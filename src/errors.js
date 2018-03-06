export class RequestError extends Error {

};
export class ResponseError extends Error {
  constructor(error) {
    super();
    this.name = error.response.body.error.name;
    this.statusCode = error.response.body.error.statusCode;
    this.code = error.response.body.error.code;
    this.message = error.response.body.error.message;
    this.stack = error.response.body.error.stack.split("\n");
  }
};
