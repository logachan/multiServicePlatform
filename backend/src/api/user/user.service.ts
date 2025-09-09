import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from '../mail/mail.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService {


  constructor(
    @InjectQueue('mail-queue') private readonly mailQueue: Queue,
  ) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {


    const users = [
      {
        name: "Logachander",
        age: 23,
        profession: "Developer",
        email:"logachan08@gmail.com"

      },
      {
        name: "Ramesh Rov",
        age: 28,
        profession: "Tester",
        email:"logachan08@gmail.com"

      },
      {
        name: "Suresh sha",
        age: 29,
        profession: "Designer",
        email:"logachan08@gmail.com"
      },
      {
        name: "Shaskshi",
        age: 38,
        profession: "Manager",
        email:"logachan08@gmail.com"

      }
    ]

    // for (let i of users) {
    //   await this.mailQueue.add({ email: i.email });
    // }

    // here need to check if the user age is greater than 25 then filte and show
    const greater25AgeUser = await users.filter((i: any) => i?.age >= 25)



    return {
      status: HttpStatus.OK,
      userData: greater25AgeUser
    }
  }


  // async BulKEmailSentUser(email: string) {
  //   // call the mail service here
  //   await this.mailService.sendBulkEmail(email)
  // }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: CreateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
