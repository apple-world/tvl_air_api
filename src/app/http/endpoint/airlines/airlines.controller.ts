import { Controller, Get, Query } from '@nestjs/common'
import { GetAirlineOutputDto } from 'src/app/http/endpoint/airlines/presenter/dto/get-airline.output.dto'
import { GetAirlinesInputDto } from 'src/app/http/validation/get-airlines.input.dto'
import { GetAirlinesPresenter } from 'src/app/http/endpoint/airlines/presenter/get-airlines.presenter'
import { GetAirlinesUsecase } from 'src/domain/usecase/airlines/get-airlines.usecase'

@Controller('airlines')
export class AirlinesController {
  constructor(
    private readonly airlinesUsecase: GetAirlinesUsecase,
    private readonly airlinesPresenter: GetAirlinesPresenter,
  ) {}

  @Get()
  async findAll(@Query() query: GetAirlinesInputDto): Promise<GetAirlineOutputDto[]> {
    return this.airlinesPresenter.index(
      await this.airlinesUsecase.index(),
    )
  }
}
