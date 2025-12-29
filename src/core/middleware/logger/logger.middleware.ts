import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from 'src/core/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: () => void) {
    res.on('finish', () => {
      const { url, method } = req;
      const logData = {
        url,
        method
      };
      const { statusCode } = res;
      if (statusCode === 500) {
        this.logger.error(`500 Error`, undefined, `HTTP`, logData);
      } else if (statusCode >= 400) {
        this.logger.warn(`400 error`, `HTTP`, logData);
      } else {
        this.logger.log(`request processed!`, `HTTP`, logData);
      }
    });
    next();
  }
}
