import { CreateBulkEmailDto } from './dto/create-bulk-email.dto';
import { Queue } from 'bull';
export declare class BulkEmailService {
    private readonly mailQueue;
    constructor(mailQueue: Queue);
    create(createBulkEmailDto: CreateBulkEmailDto): string;
    sendAll(body: any): Promise<{
        mesaage: string;
        data: any;
    }>;
    findAll(): {
        message: string;
        data: string;
    };
    findOne(id: number): string;
    update(id: number, updateBulkEmailDto: CreateBulkEmailDto): string;
    remove(id: number): string;
}
