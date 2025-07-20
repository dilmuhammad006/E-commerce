import { InjectRedis } from '@nestjs-modules/ioredis';
import { Global, Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
@Global()
export class RedisService implements OnModuleDestroy {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async setValue(key: string, value: string, EX: number) {
    await this.redis.setex(key, EX, value);

    return 'Ok';
  }

  async getValue(key: string) {
    return await this.redis.get(key);
  }

  onModuleDestroy() {
    this.redis.disconnect();
  }
}
