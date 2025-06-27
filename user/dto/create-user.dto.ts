import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @ApiProperty({ example: 'astriayala@example.com' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'Astrid Ayala' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 1234 })
    @IsNotEmpty()
    password: string
}