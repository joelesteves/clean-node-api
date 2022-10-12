import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../error/missing-parm-error'
import { badRequest } from '../helpers/http-help'

export class SingnupController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
