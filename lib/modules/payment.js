'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModule = require('./baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payment = function (_BaseModule) {
  _inherits(Payment, _BaseModule);

  function Payment() {
    _classCallCheck(this, Payment);

    var _this = _possibleConstructorReturn(this, (Payment.__proto__ || Object.getPrototypeOf(Payment)).call(this));

    _this.TransformModel = _models.MPayment;
    return _this;
  }

  /**
  * @param {string} organizationId
  *
  * @returns {Promise<MPayment[]>}
  */


  _createClass(Payment, [{
    key: 'organizationList',
    value: function organizationList(organizationId) {
      return this.call('/organizations/' + organizationId + '/payments');
    }

    /**
    * @param {string} documentId
    *
    * @returns {Promise<MPayment[]>}
    */

  }, {
    key: 'documentList',
    value: function documentList(documentId) {
      return this.call('/documents/' + documentId + '/payments');
    }

    /**
     * @param {string} documentId
     * @param {object} data
     *
     * @returns {Promise<MPayment>}
     */

  }, {
    key: 'create',
    value: function create(documentId, data) {
      return this.call('/documents/' + documentId + '/payments', data, 'POST');
    }

    /**
     * @param {string} paymentId
     * @param {object} data
     *
     * @returns {Promise<MPayment>}
     */

  }, {
    key: 'update',
    value: function update(paymentId, data) {
      return this.call('/payments/' + paymentId, data, 'PUT');
    }

    /**
     * @param {string} paymentId
     *
     * @returns {Promise<MPayment>}
     */

  }, {
    key: 'delete',
    value: function _delete(paymentId) {
      return this.call('/payments/' + paymentId, null, 'DELETE');
    }
  }]);

  return Payment;
}(_baseModule2.default);

exports.default = Payment;