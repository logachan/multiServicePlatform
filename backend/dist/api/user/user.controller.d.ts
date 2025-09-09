import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<{
        status: import("@nestjs/common").HttpStatus;
        userData: {
            name: string;
            age: number;
            profession: string;
            email: string;
        }[];
    }>;
    findOne(id: string): string;
    update(id: string, updateUserDto: CreateUserDto): string;
    remove(id: string): string;
}
