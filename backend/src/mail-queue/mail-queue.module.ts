// mail-queue.module.ts
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MailService } from 'src/api/mail/mail.service';
import { MailQueueProcessor } from 'src/processers/mail-queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'mail-queue',
    }),
  ],
  providers: [MailQueueProcessor, MailService], // 👈 ADD this
  exports: [BullModule],
})
export class MailQueueModule {}
