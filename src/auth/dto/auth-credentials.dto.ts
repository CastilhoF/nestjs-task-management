import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4, { message: 'User must contain more than 4 characters.' })
  @MaxLength(20, { message: 'The User must contain up to 20 characters.' })
  username: string;

  @IsString()
  @MinLength(8, {
    message: 'The password must contain at least 8 characters.',
  })
  @MaxLength(32, {
    message: 'The password cannot exceed a maximum of 32 characters.',
  })

  // * Passwords will contain at least 1 upper case letter
  // * Passwords will contain at least 1 lower case letter
  // * Passwords will contain at least 1 number or special character
  // * There is no length validation (min, max) in this regex!
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password is to weak! Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number or special character.',
  })
  password: string;
}
