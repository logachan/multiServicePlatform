import { Injectable } from '@nestjs/common';
import { CreateBulkEmailDto } from './dto/create-bulk-email.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class BulkEmailService {

  constructor(
    @InjectQueue('mail-queue') private readonly mailQueue: Queue,
  ) { }
  create(createBulkEmailDto: CreateBulkEmailDto) {
    return 'This action adds a new bulkEmail';
  }



  async sendAll(body: any) {

    //get emails Array from the payload
    let emailDataArray = body?.emails

    for (let email of emailDataArray) {
      console.log("boddddd", body?.content);
      
      await this.mailQueue.add({email:email, content: body?.content}) 

    }

    return {
      mesaage: "Emails sent Successfully!",
      data: emailDataArray
    }

  }
  findAll() {
    return {
      message:"All Bulk mail returns Here!",
      data:"abc"
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} bulkEmail`;
  }

  update(id: number, updateBulkEmailDto: CreateBulkEmailDto) {
    return `This action updates a #${id} bulkEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} bulkEmail`;
  }
}
