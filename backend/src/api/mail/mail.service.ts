import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from "fs";
import * as hb from "handlebars";

@Injectable()
export class MailService {

    constructor(private readonly mailService: MailerService) { }


    async sendBulkEmail(email: string, content: string) {
        try {

            const templatePath = path.resolve(process.cwd(), 'src', 'emailtemplates', 'send_Bulk_email.hbs');
            const attachmentPath = path.resolve(process.cwd(),'src','attachments','Logachander B_SE.pdf')

            const template = fs.readFileSync(templatePath, "utf8");
            // Compile the template
            const compiledTemplate = hb.compile(template);

            let data = "123"
            const html = compiledTemplate(data);

            const info = await this.mailService.sendMail({
                to: email,
                subject: "Job Application Software Developer",
                html: content,
                attachments: [
                    {
                        filename: 'LogachanderB_SE.pdf',
                        path: attachmentPath,
                        contentType: 'application/pdf',
                    },
                ]
            });
            return info;
        } catch (err) {
            throw new Error(err);
        }
    }
}
