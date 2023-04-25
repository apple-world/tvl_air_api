import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import * as http from 'http'
import * as https from 'https'

@Module({
  imports: [
    HttpModule.register({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      // TODO: 必要になった時、指定する
      // timeout: 5000,
      // maxRedirects: 5,
    }),
  ],
  exports: [HttpModule],
})
export class ApiModule {}
