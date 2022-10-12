import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../error/missing-parm-error'
import { badRequest } from '../helpers/http-help'

export class SingnupController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    const requeredFields = ['name', 'email', 'password']

    for (const field of requeredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
