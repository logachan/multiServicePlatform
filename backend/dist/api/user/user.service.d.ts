import { HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Queue } from 'bull';
export declare class UserService {
    private readonly mailQueue;
    constructor(mailQueue: Queue);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<{
        status: HttpStatus;
        userData: {
            name: string;
            age: number;
            profession: string;
            email: string;
        }[];
    }>;
    findOne(id: number): string;
    update(id: number, updateUserDto: CreateUserDto): string;
    remove(id: number): string;
}
