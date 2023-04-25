import { Module } from '@nestjs/common'
import { ApiModule } from 'src/app/gateway/api/api.module'
import { AirlinesClient } from 'src/app/gateway/api/air/airlines/airlines.client'
import { AirlinesFacade } from 'src/app/gateway/facade/airlines.facade'
import { AirlinesController } from 'src/app/http/endpoint/airlines/airlines.controller'
import { GetAirlinesPresenter } from 'src/app/http/endpoint/airlines/presenter/get-airlines.presenter'
import { AIRLINES_FACADE_INTERFACE_TOKEN } from 'src/domain/facade/airlines.facade.interface'
import { GetAirlinesUsecase } from 'src/domain/usecase/airlines/get-airlines.usecase'

@Module({
  imports: [ApiModule],
  controllers: [AirlinesController],
  providers: [
    {
      provide: AIRLINES_FACADE_INTERFACE_TOKEN,
      useClass: AirlinesFacade,
    },
    GetAirlinesPresenter,
    GetAirlinesUsecase,
    AirlinesClient
  ],
})
export class AirlinesModule {}
