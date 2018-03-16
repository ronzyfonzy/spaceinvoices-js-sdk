'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerError = exports.RequestError = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIError = function (_ExtendableError) {
  _inherits(APIError, _ExtendableError);

  function APIError(statusCode, error) {
    _classCallCheck(this, APIError);

    var _this = _possibleConstructorReturn(this, (APIError.__proto__ || Object.getPrototypeOf(APIError)).call(this, error.message));

    _this.statusCode = error.statusCode;
    _this.code = error.code;
    _this.stackApi = null;
    _this.stackApi = error.stack;
    return _this;
  }

  _createClass(APIError, [{
    key: 'toString',
    value: function toString() {
      return _get(APIError.prototype.__proto__ || Object.getPrototypeOf(APIError.prototype), 'toString', this).call(this) + '\nStatusCode: ' + this.statusCode + '\nApiStack: ' + this.stackApi + '\nStack: ' + this.stack;
    }
  }]);

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

var ServerError = exports.ServerError = function (_APIError2) {
  _inherits(ServerError, _APIError2);

  function ServerError() {
    _classCallCheck(this, ServerError);

    return _possibleConstructorReturn(this, (ServerError.__proto__ || Object.getPrototypeOf(ServerError)).apply(this, arguments));
  }

  return ServerError;
}(APIError);