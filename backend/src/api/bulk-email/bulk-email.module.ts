import { Module } from '@nestjs/common';
import { BulkEmailService } from './bulk-email.service';
import { BulkEmailController } from './bulk-email.controller';
import { MailQueueModule } from 'src/mail-queue/mail-queue.module';

@Module({
  imports:[MailQueueModule],
  controllers: [BulkEmailController],
  providers: [BulkEmailService],
})
export class BulkEmailModule {}
