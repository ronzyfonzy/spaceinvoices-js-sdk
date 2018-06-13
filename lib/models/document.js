'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require('./baseModel');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _modules = require('../modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDocument = function (_BaseModel) {
  _inherits(MDocument, _BaseModel);

  /**
   * @param {null|object} data 
   */
  function MDocument() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MDocument);

    var _this = _possibleConstructorReturn(this, (MDocument.__proto__ || Object.getPrototypeOf(MDocument)).call(this, data));

    _this.module = _modules.document;

    /**
     * String, unique (to Document type and Organization) Document number. Auto populated with next number based on document type.
     * @type {string} // default is YYYY-0000n+1 
     */
    _this.number = data.number || null;
    /**
     * Type of document (invoice, estimate or advance). Determines type of document, note that different document types contain different properties, rules and funcionalities. For example invoice can have Payments logged and contains dateService property. Document type cannot be switched once set to instance.
     * @type {string}
     */
    _this.type = data.type || 'invoice';
    /**
     * Boolean, if invoice a draft. If set to true the property cannot go back to false. Only present if type is invoice.
     * @type {string}
     */
    _this.draft = data.draft || false;
    /**
     * Javascript date, date of Document. Represents date the Document was issued. Time is trimmed.
     * @type {string} // default is today 
     */
    _this.date = data.date || null;
    /**
     * Javascript date, date invoice is due. Auto populated using Organization's default due days from today. Only present on type invoice. Time is trimmed.
     * @type {string} // default is today + default due days 
     */
    _this.dateDue = data.dateDue || null;
    /**
     * Javascript date, date service was started or conducted. Only present on type invoice. Time is trimmed.
     * @type {string}
     */
    _this.dateService = data.dateService || null;
    /**
     * Javascript date, date service period ends. Only present on type invoice. Time is trimmed.
     * @type {string}
     */
    _this.dateServiceTo = data.dateServiceTo || null;
    /**
     * ISO 4217 currency code. Wikipedia If not provided the Organization's default currency is used.
     * @type {string}
     */
    _this.currencyId = data.currencyId || null;
    /**
     * ID reference to Organization's Client. If provided _documentClient object gets populated using referenced Client.
     * @type {string}
     */
    _this.clientId = data.clientId || null;
    /**
     * Object containting client data. Property is optional if clientId is provided. Any key defined in object will be used instead of loaded client data. If clientId is not provided the data in object is saved to Organization's Clients and referenced in document ie. the clientId is auto populated. toggle definition
     * @type {string}
     */
    _this._documentClient = data._documentClient || null;
    /**
     * Object containting issuer data. Property is automatically populated with Organization data. Any key that is provided in object is used instead. toggle definition
     * @type {string}
     */
    _this._documentIssuer = data._documentIssuer || null;
    /**
     * Collection of objects containing document line items. toggle definition
     * @type {string}
     */
    _this._documentItems = data._documentItems || null;
    /**
     * Text note for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    _this.note = data.note || null;
    /**
     * Text signature for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    _this.signature = data.signature || null;
    /**
     * Text footer for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    _this.footer = data.footer || null;
    /**
     * Number of decimal places the Document items are trimmed and rounded to in calculations. Should be 4 in most cases.
     * @type {string}
     */
    _this.decimalPlaces = data.decimalPlaces || 4;
    return _this;
  }

  /**
   *
   * @returns {Promise<MPayment[]>}
  */


  _createClass(MDocument, [{
    key: 'listPayments',
    value: function listPayments() {
      return _modules.payment.list(this.id);
    }

    /**
     *
     * @returns {Promise<MPayment>}
    */

  }, {
    key: 'createPayment',
    value: function createPayment(data) {
      return _modules.payment.create(this.id, data);
    }

    /**
     *
     * @returns {Promise<MRecurrence[]>}
    */

  }, {
    key: 'listReccurences',
    value: function listReccurences() {
      return _modules.recurrence.listFromDocument(this.id);
    }

    /**
     *
     * @returns {Promise<MRecurrence>}
    */

  }, {
    key: 'createReccurence',
    value: function createReccurence(data) {
      return _modules.recurrence.create(this.id, data);
    }
  }]);

  return MDocument;
}(_baseModel2.default);

exports.default = MDocument;