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

var MOrganization = function (_BaseModel) {
  _inherits(MOrganization, _BaseModel);

  /**
   * @param {null|object} data 
   */
  function MOrganization() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MOrganization);

    var _this = _possibleConstructorReturn(this, (MOrganization.__proto__ || Object.getPrototypeOf(MOrganization)).call(this, data));

    _this.module = _modules.organization;

    /**
     * Name of company or other type of organization
     * @type {string}
     */
    _this.name = data.name || '';
    /**
     * Street or similar address
     * @type {string}
     */
    _this.address = data.address || '';
    /**
     * Address line 2
     * @type {string}
     */
    _this.address2 = data.address2 || '';
    /**
     * City name
     * @type {string}
     */
    _this.city = data.city || '';
    /**
     * Zip / post code
     * @type {string}
     */
    _this.zip = data.zip || '';
    /**
     * ISO 3166 county. [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1) The country parameter is used 
     * to apply some smart defaults to the organization being created including default tax rates and texts 
     * (both may be effected by taxSubject property in some cases)
     * @type {string}
     */
    _this.country = data.country || '';
    /**
     * Specify if the organization is subject to tax. Property effects creation of default tax 
     * rates and texts
     * @type {boolean=false} 
     */
    _this.taxSubject = data.taxSubject || '';
    /**
     * VAT / GST / etc. tax identification number
     * @type {string}
     */
    _this.taxNumber = data.taxNumber || '';
    /**
     * registration or similar identification number
     * @type {string}
     */
    _this.companyNumber = data.companyNumber || '';
    /**
     * Bank account number
     * @type {string}
     */
    _this.IBAN = data.IBAN || '';
    /**
     * Website address
     * @type {string}
     */
    _this.website = data.website || '';
    /**
     * ISO 639-1 locale code. [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) Effects 
     * language of default texts and system messages. 
     * @type {String=en} 
     */
    _this.locale = data.locale || '';
    /**
     * Brand source identification for internal use
     * @type {string}
     */
    _this.brand = data.brand || 'space-invoices';
    return _this;
  }

  /**
   *
   * @returns {Promise<MDocument[]>}
   */


  _createClass(MOrganization, [{
    key: 'listDocuments',
    value: function listDocuments() {
      return _modules.document.list(this.id);
    }

    /**
     *
     * @returns {Promise<MDocument>}
     */

  }, {
    key: 'createDocument',
    value: function createDocument(data) {
      return _modules.document.create(this.id, data);
    }

    /**
     *
     * @returns {Promise<MClient[]>}
     */

  }, {
    key: 'listClients',
    value: function listClients() {
      return _modules.client.list(this.id);
    }

    /**
     *
     * @returns {Promise<MClient>}
     */

  }, {
    key: 'createClient',
    value: function createClient(data) {
      return _modules.client.create(this.id, data);
    }

    /**
     *
     * @returns {Promise<MClient>}
     */

  }, {
    key: 'searchClient',
    value: function searchClient(term) {
      return _modules.client.search(this.id, term);
    }

    /**
     *
     * @returns {Promise<MItem[]>}
     */

  }, {
    key: 'listItems',
    value: function listItems() {
      return _modules.item.list(this.id);
    }

    /**
     *
     * @returns {Promise<MItem>}
     */

  }, {
    key: 'createItem',
    value: function createItem(data) {
      return _modules.item.create(this.id, data);
    }

    /**
     *
     * @returns {Promise<MItem>}
     */

  }, {
    key: 'searchItem',
    value: function searchItem(term) {
      return _modules.item.search(this.id, term);
    }

    /**
     *
     * @returns {Promise<MPayment[]>}
     */

  }, {
    key: 'listPayments',
    value: function listPayments() {
      return _modules.payment.list(this.id);
    }

    /**
     *
     * @returns {Promise<MRecurrence[]>}
     */

  }, {
    key: 'listRecurrences',
    value: function listRecurrences() {
      return _modules.recurrence.listFromOrganization(this.id);
    }

    /**
     *
     * @returns {Promise<MTax[]>}
     */

  }, {
    key: 'listTaxes',
    value: function listTaxes() {
      return _modules.tax.list(this.id);
    }

    /**
     *
     * @returns {Promise<MTax>}
     */

  }, {
    key: 'createTax',
    value: function createTax(data) {
      return _modules.tax.create(this.id, data);
    }
  }]);

  return MOrganization;
}(_baseModel2.default);

exports.default = MOrganization;