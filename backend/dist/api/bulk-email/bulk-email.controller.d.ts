import { BulkEmailService } from './bulk-email.service';
import { CreateBulkEmailDto } from './dto/create-bulk-email.dto';
export declare class BulkEmailController {
    private readonly bulkEmailService;
    constructor(bulkEmailService: BulkEmailService);
    sendAll(body: any): Promise<{
        mesaage: string;
        data: any;
    }>;
    create(createBulkEmailDto: CreateBulkEmailDto): string;
    findAll(): {
        message: string;
        data: string;
    };
    findOne(id: string): string;
    update(id: string, updateBulkEmailDto: CreateBulkEmailDto): string;
    remove(id: string): string;
}
