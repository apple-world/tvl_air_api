import { AxiosResponse } from 'axios'

export interface ApiClientInterface {
  callApi(params: any): Promise<any>
}
