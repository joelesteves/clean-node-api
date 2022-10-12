import { SingnupController } from './singnup'

describe('', () => {
  test('should return 400 if no name provided', () => {
    const sut = new SingnupController()
    const httpRequest = {
      body: {
        email: 'any@email.com',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('should return 400 if no email provided', () => {
    const sut = new SingnupController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
