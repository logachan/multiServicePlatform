import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';
import { MailQueueModule } from 'src/mail-queue/mail-queue.module';

@Module({
  imports:[MailModule, MailQueueModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
