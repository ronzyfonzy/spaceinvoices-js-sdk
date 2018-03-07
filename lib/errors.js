"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestError = exports.RequestError = function (_Error) {
  _inherits(RequestError, _Error);

  function RequestError() {
    _classCallCheck(this, RequestError);

    return _possibleConstructorReturn(this, (RequestError.__proto__ || Object.getPrototypeOf(RequestError)).apply(this, arguments));
  }

  return RequestError;
}(Error);

;

var ResponseError = exports.ResponseError = function (_Error2) {
  _inherits(ResponseError, _Error2);

  /**
   * 
   * @param {object} error 
   */
  function ResponseError(error) {
    _classCallCheck(this, ResponseError);

    var _this2 = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this));

    _this2.name = error.response.body.error.name;
    _this2.statusCode = error.response.body.error.statusCode;
    _this2.code = error.response.body.error.code;
    _this2.message = error.response.body.error.message;
    _this2.stack = error.response.body.error.stack.split("\n");
    return _this2;
  }

  return ResponseError;
}(Error);

;