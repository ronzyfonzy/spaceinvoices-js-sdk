'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseError = exports.RequestError = undefined;

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIError = function (_ExtendableError) {
  _inherits(APIError, _ExtendableError);

  function APIError(error) {
    _classCallCheck(this, APIError);

    var _this = _possibleConstructorReturn(this, (APIError.__proto__ || Object.getPrototypeOf(APIError)).call(this, error.message));

    _this.code = error.code;
    _this.stackApi = error.stack;
    return _this;
  }

  return APIError;
}(_es6Error2.default);

var RequestError = exports.RequestError = function (_APIError) {
  _inherits(RequestError, _APIError);

  function RequestError() {
    _classCallCheck(this, RequestError);

    return _possibleConstructorReturn(this, (RequestError.__proto__ || Object.getPrototypeOf(RequestError)).apply(this, arguments));
  }

  return RequestError;
}(APIError);

var ResponseError = exports.ResponseError = function (_APIError2) {
  _inherits(ResponseError, _APIError2);

  function ResponseError() {
    _classCallCheck(this, ResponseError);

    return _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).apply(this, arguments));
  }

  return ResponseError;
}(APIError);