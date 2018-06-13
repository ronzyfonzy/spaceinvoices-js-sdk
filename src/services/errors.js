import ExtendableError from 'es6-error'

class APIError extends ExtendableError {
  constructor (statusCode, error) {
    super(error.message)
    this.statusCode = error.statusCode
    this.code = error.code
    this.stackApi = null
    this.stackApi = error.stack
  }

  toString () {
    return `${super.toString()}\nStatusCode: ${this.statusCode}\nApiStack: ${this.stackApi}\nStack: ${this.stack}`
  }
}

export class RequestError extends APIError { }
export class ServerError extends APIError { }
