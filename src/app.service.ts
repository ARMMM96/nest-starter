import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) { }
  getHello(): string {
    const enviromentVariable = this.configService.get<string>(`environment`);
    console.log(`Environment Variable TEST: ${enviromentVariable} `);
    return 'Hello World!';
  }


}
