import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { MailQueueModule } from './mail-queue/mail-queue.module';
import { BullModule } from '@nestjs/bull';
import { BulkEmailModule } from './api/bulk-email/bulk-email.module';

@Module({
  imports: [UserModule,BulkEmailModule, MailQueueModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost', // or your Redis server
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
