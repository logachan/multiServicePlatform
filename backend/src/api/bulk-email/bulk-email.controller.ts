import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BulkEmailService } from './bulk-email.service';
import { CreateBulkEmailDto } from './dto/create-bulk-email.dto';

@Controller('bulk-email')
export class BulkEmailController {
  constructor(private readonly bulkEmailService: BulkEmailService) {}


  @Post('sendAll')
  sendAll(@Body() body:any){
    return this.bulkEmailService.sendAll(body)
  }

  @Post()
  create(@Body() createBulkEmailDto: CreateBulkEmailDto) {
    return this.bulkEmailService.create(createBulkEmailDto);
  }

  @Get()
  findAll() {
    return this.bulkEmailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bulkEmailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBulkEmailDto: CreateBulkEmailDto) {
    return this.bulkEmailService.update(+id, updateBulkEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bulkEmailService.remove(+id);
  }
}
