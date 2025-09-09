import { Job } from "bull";
import { MailService } from "src/api/mail/mail.service";
export declare class MailQueueProcessor {
    private readonly mailService;
    constructor(mailService: MailService);
    handleSendMail(job: Job<{
        email: string;
        content: string;
    }>): Promise<void>;
}
