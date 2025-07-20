import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { RedisModule } from './clients';
import { MailModule } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd() + 'uploads'),
      serveRoot: '/api/uploads',
    }),

    PrismaModule,
    RedisModule,
    MailModule,
  ],
})
export class AppModule {}
