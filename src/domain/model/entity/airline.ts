import { AirlineId } from 'src/domain/model/value-object/airline/airline-id'
import { AirlineName } from 'src/domain/model/value-object/airline/airline-name'
import { AirlineNo } from 'src/domain/model/value-object/airline/airline-no'

export class Airline {
  code: AirlineId
  name: AirlineName
  no: AirlineNo

  constructor(code: string, name: string, no: string) {
    this.code = new AirlineId(code)
    this.name = new AirlineName(name)
    this.no = new AirlineNo(no)
  }
}
