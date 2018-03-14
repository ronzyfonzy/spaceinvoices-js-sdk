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

  function MOrganization(data) {
    _classCallCheck(this, MOrganization);

    var _this = _possibleConstructorReturn(this, (MOrganization.__proto__ || Object.getPrototypeOf(MOrganization)).call(this, data));

    _this.module = _modules.organization;
    if (data) {
      /**
       * @type {String}
       */
      _this.locale = data.locale;
      /**
       * @type {String}
       */
      _this.brand = data.brand;
      /**
       * @type {number}
       */
      _this.supportPin = data.supportPin;
      /**
       * @type {String}
       */
      _this.name = data.name;
      /**
       * @type {String}
       */
      _this.address = data.address;
      /**
       * @type {String}
       */
      _this.city = data.city;
      /**
       * @type {String}
       */
      _this.country = data.country;
      /**
       * @type {String}
       */
      _this.IBAN = data.IBAN;
      /**
       * @type {String}
       */
      _this.bank = data.bank;
    }
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