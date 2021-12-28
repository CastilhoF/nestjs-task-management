import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  singUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.singUp(authCredentialsDto);
  }

  @Post('/signin')
  singIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.singIn(authCredentialsDto);
  }
}
