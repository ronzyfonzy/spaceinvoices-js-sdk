"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseModel = require("./baseModel");

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MRecurrence = function (_BaseModel) {
  _inherits(MRecurrence, _BaseModel);

  function MRecurrence() {
    _classCallCheck(this, MRecurrence);

    return _possibleConstructorReturn(this, (MRecurrence.__proto__ || Object.getPrototypeOf(MRecurrence)).apply(this, arguments));
  }

  return MRecurrence;
}(_baseModel2.default);

exports.default = MRecurrence;