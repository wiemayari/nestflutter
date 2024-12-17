import { IsEmail, IsString, Matches, MinLength,IsMongoId } from 'class-validator';

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
  password: string;

  @IsString()
  bio: string;

  @IsString()  // Accepte n'importe quelle chaîne de caractères pour l'URL de l'image
  imageUri: string;

  @IsMongoId()  // Utilisé pour valider l'ID MongoDB du rôle
  roleId: string;
}
