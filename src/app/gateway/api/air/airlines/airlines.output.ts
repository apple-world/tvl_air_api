interface Airline {
  airline_no: string
  airline_name: string
  ppt_flg: string
  airline_major_status: string
  country_iso2: string
  search_status: string
}

interface AirlinesData {
  [key: string]: Airline
}

export interface AirlinesOutput {
  code: string
  data: AirlinesData
}
