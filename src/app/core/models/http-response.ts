export interface HttpRespnseBody {
  insertId?: number;
}

export class HttpResponse {
  error?: any;
  status: number;
  response: HttpRespnseBody;
}
