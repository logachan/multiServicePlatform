import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailService;
    constructor(mailService: MailerService);
    sendBulkEmail(email: string, content: string): Promise<SentMessageInfo>;
}
