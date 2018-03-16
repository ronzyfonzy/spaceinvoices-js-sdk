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

var Client = function (_BaseModule) {
  _inherits(Client, _BaseModule);

  function Client() {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this));

    _this.TransformModel = _models.MClient;
    return _this;
  }

  /**
  *
  * @returns {Promise<MClient[]>}
  */


  _createClass(Client, [{
    key: 'list',
    value: function list(organizationId) {
      return this.call('/organizations/' + organizationId + '/clients');
    }

    /**
    * @param {string} organizationId
    * @param {string} term
    *
    * @returns {Promise<MClient[]>}
    */

  }, {
    key: 'search',
    value: function search(organizationId, term) {
      return this.call('/organizations/' + organizationId + '/search-clients?term=' + term);
    }

    /**
    *
    * @returns {Promise<MClient>}
    */

  }, {
    key: 'get',
    value: function get(clientId) {
      return this.call('/clients/' + clientId);
    }

    /**
    * @param {object} data
    *
    * @returns {Promise<MClient>}
    */

  }, {
    key: 'create',
    value: function create(organizationId, data) {
      return this.call('/organizations/' + organizationId + '/clients', data, 'POST');
    }

    /**
    * @param {string} clientId
    * @param {object} data
    *
    * @returns {Promise<MClient>}
    */

  }, {
    key: 'update',
    value: function update(clientId, data) {
      return this.call('/clients/' + clientId, data, 'PUT');
    }

    /**
    * @param {string} clientId
    *
    * @returns {Promise<MClient>}
    */

  }, {
    key: 'delete',
    value: function _delete(clientId) {
      return this.call('/clients/' + clientId, 'DELETE');
    }
  }]);

  return Client;
}(_baseModule2.default);

exports.default = new Client();