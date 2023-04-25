import { Injectable } from '@nestjs/common'
import { GetAirlineOutputDto } from 'src/app/http/endpoint/airlines/presenter/dto/get-airline.output.dto'
import { GetAirlineUsecaseOutput } from 'src/domain/usecase/airlines/get-airlines.usecase-output'

@Injectable()
export class GetAirlinesPresenter {
  index(usecaseOutput: GetAirlineUsecaseOutput[]): GetAirlineOutputDto[] {
    return usecaseOutput.map((airline) => {
      return {
        code: airline.code.value,
        no: airline.no.value,
        name: airline.name.value
      }
    })
  }
}
