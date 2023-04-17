import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // DBConfig(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),

  ],
})
export class AppModule {}
