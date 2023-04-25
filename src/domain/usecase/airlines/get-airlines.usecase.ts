import { Inject, Injectable } from '@nestjs/common'
import { AirlinesInput } from 'src/app/gateway/api/air/airlines/airlines.input'
import { AirlinesOutput } from 'src/app/gateway/api/air/airlines/airlines.output'
import {
  AirlinesFacadeInterface,
  AIRLINES_FACADE_INTERFACE_TOKEN,
} from 'src/domain/facade/airlines.facade.interface'
import { GetAirlineUsecaseOutput } from 'src/domain/usecase/airlines/get-airlines.usecase-output'

@Injectable()
export class GetAirlinesUsecase {
  constructor(
    @Inject(AIRLINES_FACADE_INTERFACE_TOKEN)
    private readonly airlineFacade: AirlinesFacadeInterface,
  ) {}

  async index(): Promise<GetAirlineUsecaseOutput[]> {
    const params = new AirlinesInput();
    const airlinesOutput: AirlinesOutput =
      await this.airlineFacade.getAirlines()
    const entries = Object.entries(airlinesOutput.data);
    return entries.map(([key, value]) => {
      return new GetAirlineUsecaseOutput(key, value.airline_name, value.airline_no);
    });
  }
}
