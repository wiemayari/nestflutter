import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model ,Types} from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './schemas/refresh-token.schema';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { ResetToken } from './schemas/reset-token.schema';
import { MailService } from 'src/services/mail.service';
import { RolesService } from 'src/roles/roles.service';
import { Permission } from 'src/guards/authorization.guard';

@Injectable()
export class AuthService {
  getUserRecommendations(userId: string) {
    throw new Error('Method not implemented.');
  }
  saveUserSelection(userId: string, doctorName: string, category: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    @InjectModel(RefreshToken.name)
    private RefreshTokenModel: Model<RefreshToken>,
    @InjectModel(ResetToken.name)
    private ResetTokenModel: Model<ResetToken>,
    private jwtService: JwtService,
    private mailService: MailService,
    private rolesService: RolesService,
  ) {}

  async signup(signupData: SignupDto) {
    const { username, email, password, bio, imageUri, roleId } = signupData;
  
    // Log des données reçues
    console.log('Données d\'inscription reçues :', signupData);
  
    // Vérification de l'email
    console.log('Vérification de l\'email...');
    const emailInUse = await this.UserModel.findOne({ email });
    if (emailInUse) {
      console.log('Erreur : L\'email est déjà utilisé.');
      throw new BadRequestException('Email already in use');
    }
  
    // Hachage du mot de passe
    console.log('Création du mot de passe haché...');
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Log du mot de passe haché
    console.log('Mot de passe haché :', hashedPassword);
  
    // Création du document utilisateur et enregistrement dans MongoDB
    try {
      console.log('Création de l\'utilisateur...');
      const newUser = await this.UserModel.create({
        username,
        email,
        password: hashedPassword,
        bio,
        imageUri,
        roleId, // Including the roleId in the user creation
      });
  
      console.log('Utilisateur créé avec succès :', newUser);
      return newUser;
    } catch (error) {
      console.log('Erreur lors de la création de l\'utilisateur:', error);
      throw new InternalServerErrorException('Erreur lors de la création de l\'utilisateur');
    }
  }
  

  async login(credentials: LoginDto) {
    const { email, password } = credentials;

    // Log de la tentative de connexion
    console.log('Tentative de connexion pour l\'email:', email);

    const user = await this.UserModel.findOne({ email });
    if (!user) {
      console.log('Erreur : Mauvais identifiants (email non trouvé)');
      throw new UnauthorizedException('Wrong credentials');
    }

    // Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Erreur : Mauvais identifiants (mot de passe incorrect)');
      throw new UnauthorizedException('Wrong credentials');
    }

    // Génération des tokens
    const tokens = await this.generateUserTokens(user._id);
    console.log('Tokens générés avec succès :', tokens);

    return {
      ...tokens,
      userId: user._id,
    };
  }

  async changePassword(userId, oldPassword: string, newPassword: string) {
    const user = await this.UserModel.findById(userId);
    if (!user) {
      console.log('Erreur : Utilisateur non trouvé');
      throw new NotFoundException('User not found...');
    }

    // Comparaison du mot de passe
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      console.log('Erreur : Mauvais identifiants (ancien mot de passe incorrect)');
      throw new UnauthorizedException('Wrong credentials');
    }

    // Hachage du nouveau mot de passe
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await user.save();
    console.log('Mot de passe changé avec succès');
  }

  async forgotPassword(email: string) {
    const user = await this.UserModel.findOne({ email });

    if (user) {
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const resetToken = nanoid(64);
      await this.ResetTokenModel.create({
        token: resetToken,
        userId: user._id,
        expiryDate,
      });
      this.mailService.sendPasswordResetEmail(email, resetToken);
      console.log('Email de réinitialisation envoyé');
    }

    return { message: 'If this user exists, they will receive an email' };
  }

  async resetPassword(newPassword: string, resetToken: string) {
    const token = await this.ResetTokenModel.findOneAndDelete({
      token: resetToken,
      expiryDate: { $gte: new Date() },
    });

    if (!token) {
      console.log('Erreur : Lien de réinitialisation invalide');
      throw new UnauthorizedException('Invalid link');
    }

    const user = await this.UserModel.findById(token.userId);
    if (!user) {
      throw new InternalServerErrorException();
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    console.log('Mot de passe réinitialisé avec succès');
  }

  async refreshTokens(refreshToken: string) {
    const token = await this.RefreshTokenModel.findOne({
      token: refreshToken,
      expiryDate: { $gte: new Date() },
    });

    if (!token) {
      console.log('Erreur : Token de rafraîchissement invalide');
      throw new UnauthorizedException('Refresh Token is invalid');
    }
    return this.generateUserTokens(token.userId);
  }

  async generateUserTokens(userId) {
    const accessToken = this.jwtService.sign({ userId }, { expiresIn: '24h' });
    const refreshToken = uuidv4();

    await this.storeRefreshToken(refreshToken, userId);
    return {
      accessToken,
      refreshToken,
    };
  }

  async storeRefreshToken(token: string, userId: string) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 3);

    await this.RefreshTokenModel.updateOne(
      { userId },
      { $set: { expiryDate, token } },
      {
        upsert: true,
      },
    );
    console.log('Token de rafraîchissement stocké');
  }

  async getUserPermissions(...args: [userId: string]): Promise<Permission[]> {
    // Simule des données récupérées depuis la base
    return [
      { resource: 'doctors', actions: ['read', 'write'] },
      { resource: 'patients', actions: ['read'] },
    ];
  }


  async getAllUsers() {
    try {
      const users = await this.UserModel.find();
      if (!users) {
        throw new NotFoundException('No users found');
      }
      console.log('list fetched successfully',users);

      return users;
    } catch (error) {
      console.log('list didnt fetch');

      throw new InternalServerErrorException('Error retrieving users');
    }
  }


  async getRolePercentages() {
    // Fetch all users and populate their roles
    const users = await this.UserModel.find().populate('roleId');

    if (!users || users.length === 0) {
      throw new NotFoundException('No users found');
    }

    // Count roles across all users
    const roleCounts = {
      'Maman': 0,
      'Admin': 0,
      'Medecin': 0,
    };

    for (const user of users) {
      const role = user.roleId as Types.ObjectId; // Cast to Types.ObjectId
      if (role) {
        const roleDetails = await this.rolesService.getRoleById(role.toString()); // Convert ObjectId to string
        if (roleDetails) {
          const roleName = roleDetails.name; // Access role details safely
          if (roleName) {
            if (roleName === 'Maman') {
              roleCounts['Maman'] += 1;
            } else if (roleName === 'Admin') {
              roleCounts['Admin'] += 1;
            } else if (roleName === 'Medecin') {
              roleCounts['Medecin'] += 1;
            }
          }
        }
      }
    }

    const totalRoles = users.length;

    const rolePercentages = {
      'Maman': (roleCounts['Maman'] / totalRoles) * 100,
      'Admin': (roleCounts['Admin'] / totalRoles) * 100,
      'Medecin': (roleCounts['Medecin'] / totalRoles) * 100,
    };

    return {
      percentages: rolePercentages,
    };
  }

}
