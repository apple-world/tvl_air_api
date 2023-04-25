import { Injectable } from '@nestjs/common'
import { AxiosResponse } from 'axios'
import { AirlinesClient } from 'src/app/gateway/api/air/airlines/airlines.client'
import { AirlinesInput } from 'src/app/gateway/api/air/airlines/airlines.input'
import { AirlinesOutput } from 'src/app/gateway/api/air/airlines/airlines.output'
import { AirlinesFacadeInterface } from 'src/domain/facade/airlines.facade.interface'

@Injectable()
export class AirlinesFacade implements AirlinesFacadeInterface {
  constructor(private readonly apiClient: AirlinesClient) {}

  async getAirlines(
  ): Promise<AirlinesOutput> {
    const input: AirlinesInput = {
    }
    const data: AirlinesOutput =
      await this.apiClient.callApi(input)
    return data
  }
}
