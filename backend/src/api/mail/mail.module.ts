import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({

  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465, // usually 465 (secure) or 587
        secure: true, // true for port 465
        auth: {
          user: 'logachan08@gmail.com',
          pass: 'hrbvllnmzmlsxrcj',
        },
      },
    })
  ],
  providers: [MailService]
})
export class MailModule { }
