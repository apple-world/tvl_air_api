import { AirlinesInput } from 'src/app/gateway/api/air/airlines/airlines.input'
import { AirlinesOutput } from 'src/app/gateway/api/air/airlines/airlines.output'

export const AIRLINES_FACADE_INTERFACE_TOKEN = 'AirlinesFacadeInterface'

export interface AirlinesFacadeInterface {
  getAirlines(): Promise<AirlinesOutput>
}
