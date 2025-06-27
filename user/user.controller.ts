import { Controller, Body, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'Usuario creado correctamente.' })
    create(@Body() dto: CreateUserDto):Promise<User> {
        return this.userService.createUser(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 201, description: 'Lista de usuarios' })
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
