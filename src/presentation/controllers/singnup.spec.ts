import { SingnupController } from './singnup'
import { MissingParamError } from '../error/missing-parm-error'

const makeSut = (): SingnupController => {
  return new SingnupController()
}

describe('', () => {
  test('should return 400 if no name provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any@email.com',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('should return 400 if no email provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no password provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any@email.com',
        passwordConfirmation: 'anypassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
