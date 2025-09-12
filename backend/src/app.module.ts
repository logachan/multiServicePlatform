import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { MailQueueModule } from './mail-queue/mail-queue.module';
import { BullModule } from '@nestjs/bull';
import { BulkEmailModule } from './api/bulk-email/bulk-email.module';
import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UserModule,BulkEmailModule, MailQueueModule,ChatModule,
    BullModule.forRoot({
      redis: {
        host: process?.env?.REDIS_HOST, // or your Redis server
        // port: Number(process?.env?.REDIS_PORT),
        port:6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
