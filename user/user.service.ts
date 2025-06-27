import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async createUser( dto: CreateUserDto): Promise<User> {
        const correoExistente = await this.userRepository.findOneBy({email: dto.email})
        if (correoExistente) {
            throw new UnauthorizedException('El correo ya está registrado');
        } else {
            const newUser = this.userRepository.create(dto);
            return this.userRepository.save(newUser);
        }

    }
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
