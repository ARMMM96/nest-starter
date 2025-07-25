import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    () => {
      console.log('This is a simple arrow function');
    }
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return payload
  }

}
