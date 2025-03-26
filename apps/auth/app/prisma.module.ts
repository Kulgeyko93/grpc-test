import { Module } from '@nestjs/common';
import { UserModule } from './src/user.module';

@Module({
  imports: [UserModule],
})
export class PrismaModule {}
