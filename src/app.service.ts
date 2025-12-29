import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  private context = `AppService`;
  constructor(private readonly logger: LoggerService) {}

  getHello() {
    this.logger.log('Hello World!', this.context, {
      userID: 123,
      isPremium: true,
    });
    throw new Error(``);
    return 'Hello World!';
  }
}
