import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { MailService } from "src/api/mail/mail.service";


@Processor('mail-queue')
export class MailQueueProcessor {
    constructor(private readonly mailService: MailService){}

    @Process()
    async handleSendMail(job: Job<{email:string, content: string}>){
        const {email, content}  = job.data

        console.log("email:" , email);
        console.log("content : ", content);
        
        
        await this.mailService.sendBulkEmail(email, content)
    }
}