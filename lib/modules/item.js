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

var Item = function (_BaseModule) {
  _inherits(Item, _BaseModule);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.TransformModel = _models.MItem;
    return _this;
  }

  /**
   *
   * @returns {Promise<MItem[]>}
   */


  _createClass(Item, [{
    key: 'list',
    value: function list(organizationId) {
      return this.call('/organizations/' + organizationId + '/items');
    }

    /**
     *
     * @returns {Promise<MItem[]>}
     */

  }, {
    key: 'search',
    value: function search(organizationId, term) {
      return this.call('/organizations/' + organizationId + '/search-items?term=' + term);
    }

    /**
    *
    * @returns {Promise<MItem>}
    */

  }, {
    key: 'get',
    value: function get(itemId) {
      return this.call('/items/' + itemId);
    }

    /**
     * @param {string} organizationId
     * @param {object} data
     *
     * @returns {Promise<MItem>}
     */

  }, {
    key: 'create',
    value: function create(organizationId, data) {
      return this.call('/organizations/' + organizationId + '/items', data, 'POST');
    }

    /**
     * @param {string} itemId
     * @param {object} data
     *
     * @returns {Promise<MItem>}
     */

  }, {
    key: 'update',
    value: function update(itemId, data) {
      return this.call('/items/' + itemId, data, 'PUT');
    }

    /**
     * @param {string} itemId
     *
     * @returns {Promise<MItem>}
     */

  }, {
    key: 'delete',
    value: function _delete(itemId) {
      return this.call('/items/' + itemId, null, 'DELETE');
    }
  }]);

  return Item;
}(_baseModule2.default);

exports.default = Item;