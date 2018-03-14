import ExtendableError from 'es6-error'

class APIError extends ExtendableError {
  constructor (error) {
    super(error.message)
    this.code = error.code
    this.stackApi = error.stack
  }
}

export class RequestError extends APIError { }
export class ResponseError extends APIError { }
