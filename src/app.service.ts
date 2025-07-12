import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) { }
  getHello() {
    const enviromentVariable = this.configService.get<string>(`environment`);
    console.log(`Environment Variable TEST: ${enviromentVariable} `);
    return {
      data: 'Hello World!',
      meta: {
        pages: 10,
      }
    }
  }
}
