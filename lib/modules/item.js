"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModule = require("./baseModule");

var _baseModule2 = _interopRequireDefault(_baseModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_BaseModule) {
  _inherits(Item, _BaseModule);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, null, [{
    key: "list",

    /** 
     * 
     * @returns {Promise<object[]>}
     */
    value: function list(organizationId) {
      return this.call("/organizations/" + organizationId + "/items");
    }

    /** 
     * 
     * @returns {Promise<object[]>}
     */

  }, {
    key: "search",
    value: function search(organizationId, term) {
      return this.call("/organizations/" + organizationId + "/search-items?term=" + term);
    }

    /** 
    * 
    * @returns {Promise<object>}
    */

  }, {
    key: "get",
    value: function get(itemId) {
      return this.call("/items/" + itemId);
    }

    /** 
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "create",
    value: function create(organizationId, data) {
      return this.call("/organizations/" + organizationId + "/items", "POST", data);
    }

    /** 
     * @param {string} itemId
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "update",
    value: function update(itemId, data) {
      return this.call("/items/" + itemId, "PUT", data);
    }

    /** 
     * @param {string} itemId
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "delete",
    value: function _delete(itemId) {
      return this.call("/items/" + itemId, "DELETE");
    }
  }]);

  return Item;
}(_baseModule2.default);

exports.default = Item;