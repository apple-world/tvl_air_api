import { ValidationPipe } from '@nestjs/common'
import * as fs from 'fs'
import { NestFactory } from '@nestjs/core'
import { dump } from 'js-yaml'
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger'
import { AppModule } from './app/http/endpoint/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  const config = new DocumentBuilder()
    .setTitle('tvl_air_api')
    .setDescription('API I/F仕様')
    .setVersion('1.0')
    .build()

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  }

  const document = SwaggerModule.createDocument(app, config, options)
  // YAML
  fs.writeFileSync('./openapi.yml', dump(document, {}))

  SwaggerModule.setup('api', app, document)

  await app.listen(5000)
}
bootstrap()
