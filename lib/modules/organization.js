'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModule = require('./baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _models = require('../models');

var _services = require('../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var Organization = function (_BaseModule) {
  _inherits(Organization, _BaseModule);

  function Organization() {
    _classCallCheck(this, Organization);

    var _this = _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).call(this));

    _this.TransformModel = _models.MOrganization;
    return _this;
  }

  /**
   * @param {string} accountId
   * @param {null|FilterBuilder} filter
   *
   * @returns {Promise<MOrganization[]>}
   */


  _createClass(Organization, [{
    key: 'list',
    value: function list(accountId) {
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.call('/accounts/' + accountId + '/organizations', filter);
    }

    /**
    *
    * @returns {Promise<MOrganization>}
    */

  }, {
    key: 'get',
    value: function get(organizationId) {
      return this.call('/organizations/' + organizationId);
    }

    /**
     * @param {string} accountId
     * @param {object} data
     *
     * @returns {Promise<MOrganization>}
     */

  }, {
    key: 'create',
    value: function create(accountId, data) {
      return this.call('/accounts/' + accountId + '/organizations', data, 'POST');
    }

    /**
     * @param {string} organizationId
     * @param {object} data
     *
     * @returns {Promise<MOrganization>}
     */

  }, {
    key: 'update',
    value: function update(organizationId, data) {
      return this.call('/organizations/' + organizationId, data, 'PUT');
    }

    /**
     * @param {string} organizationId
     *
     * @returns {Promise<MOrganization>}
     */

  }, {
    key: 'delete',
    value: function _delete(organizationId) {
      return this.call('/organizations/' + organizationId, null, 'DELETE');
    }
  }]);

  return Organization;
}(_baseModule2.default);

exports.default = Organization;