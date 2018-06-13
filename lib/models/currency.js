'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseModel = require('./baseModel');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _modules = require('../modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MCurrency = function (_BaseModel) {
  _inherits(MCurrency, _BaseModel);

  /**
   * @param {null|object} data 
   */
  function MCurrency() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MCurrency);

    var _this = _possibleConstructorReturn(this, (MCurrency.__proto__ || Object.getPrototypeOf(MCurrency)).call(this, data));

    _this.module = _modules.currency;

    /**
     * Unique ISO 4217 currency ID of model instance
     * @type {string}
     */
    _this.id = data.id || null;
    /**
     * Name of Currency.
     * @type {string}
     */
    _this.name = data.name || null;
    /**
     * Symbol of currency if available otherwise same as ID
     * @type {string}
     */
    _this.symbol = data.symbol || null;
    /**
     * Type of currency. Either fiat or crypto
     * @type {string}
     */
    _this.type = data.type || null;
    return _this;
  }

  return MCurrency;
}(_baseModel2.default);

exports.default = MCurrency;