import { HttpService } from '@nestjs/axios'
import { HttpException, Injectable } from '@nestjs/common'
import { AxiosError, AxiosResponse } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'
import { ApiClientInterface } from 'src/app/gateway/api/api-client.interface'
import { AirlinesInput } from 'src/app/gateway/api/air/airlines/airlines.input'
import { AirlinesOutput } from 'src/app/gateway/api/air/airlines/airlines.output'

@Injectable()
export class AirlinesClient implements ApiClientInterface {
  constructor(private readonly httpService: HttpService) {}

  async callApi(
    params: AirlinesInput
  ): Promise<AirlinesOutput> {
    const { data } = await firstValueFrom(
      this.httpService.get<AirlinesOutput>(
          `${process.env.AIR_API_URL}/airlines`,
          { params },
        ).pipe(
        catchError((e: AxiosError) => {
          console.error(e.response.data)
          throw new HttpException(e.response.statusText, e.response.status)
        }),
      ),
    )
    return data
  }
}
