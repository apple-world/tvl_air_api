import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AirlinesModule } from 'src/app/http/endpoint/airlines/airlines.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
    AirlinesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
