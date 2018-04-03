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

/**
 * @extends {BaseModule}
 */
var Account = function (_BaseModule) {
  _inherits(Account, _BaseModule);

  function Account() {
    _classCallCheck(this, Account);

    var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this));

    _this.TransformModel = _models.MAccount;
    return _this;
  }

  /**
  *
  * @param {string} accountId
  *
  * @returns {Promise<object>}
  */


  _createClass(Account, [{
    key: 'get',
    value: function get(accountId) {
      return this.call('/accounts/' + accountId);
    }

    /**
    *
    * @param {string} email
    * @param {string} password
    *
    * @returns {Promise<MAccount>}
    */

  }, {
    key: 'authenticate',
    value: function authenticate(email, password) {
      return this.call('/accounts/login', { email: email, password: password }, 'POST');
    }

    /**
    *
    * @param {string} email
    * @param {string} password
    *
    * @returns {Promise<object>}
    */

  }, {
    key: 'create',
    value: function create(email, password) {
      return this.call('/accounts', { email: email, password: password }, 'POST');
    }

    /**
    *
    * @param {string} email
      * @returns {Promise<boolean>}
    */

  }, {
    key: 'isEmailUnique',
    value: function isEmailUnique(email) {
      return this.call('/accounts/is-unique?email=' + email, null, 'GET', false).then(function (data) {
        return data.isUnique;
      });
    }
  }]);

  return Account;
}(_baseModule2.default);

exports.default = Account;