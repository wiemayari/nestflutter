import { Body, Controller, Get, Param, Post, Put, Req, UseGuards ,InternalServerErrorException} from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';
import { RefreshTokenDto } from './dtos/refresh-tokens.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { AuthService } from './User.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('recommendations/:userId')
  async getRecommendations(@Param('userId') userId: string) {
    return this.authService.getUserRecommendations(userId);
  }
  @Post('save-selection')
  async saveSelection(@Body() body: { userId: string; doctorName: string; category: string }) {
    return this.authService.saveUserSelection(body.userId, body.doctorName, body.category);
  }

  
  @Post('signup')
  async signUp(@Body() signupData: SignupDto) {
    return this.authService.signup(signupData);
  }

  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return this.authService.login(credentials);
  }

  @Post('refresh')
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto.refreshToken);
  }

  @UseGuards(AuthenticationGuard)
  @Put('change-password')
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @Req() req,
  ) {
    return this.authService.changePassword(
      req.userId,
      changePasswordDto.oldPassword,
      changePasswordDto.newPassword,
    );
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Put('reset-password')
  async resetPassword(
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.authService.resetPassword(
      resetPasswordDto.newPassword,
      resetPasswordDto.resetToken,
    );
  }

  @Get('users')
  async getAllUsers() {
    return this.authService.getAllUsers();
  }

  @Get('role-percentages')
  async getRolePercentages() {
    const rolePercentages = await this.authService.getRolePercentages();
    if (rolePercentages.percentages) {
      return rolePercentages;
    } else {
      throw new InternalServerErrorException('Role percentages could not be calculated');
    }
  }
}
