import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'testando msg' })
  @MinLength(6, { message: 'mais de 6' })
  password: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  cpf?: string | null;

  @IsNotEmpty()
  cnpj?: string | null;
}
