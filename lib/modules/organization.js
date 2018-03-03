"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require("./baseModel");

var _baseModel2 = _interopRequireDefault(_baseModel);

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Organization = function (_BaseModel) {
  _inherits(Organization, _BaseModel);

  function Organization() {
    _classCallCheck(this, Organization);

    return _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).apply(this, arguments));
  }

  _createClass(Organization, null, [{
    key: "list",

    /** 
     * 
     * @returns {Promise<MOrganization[]>}
     */
    value: function list() {
      var transform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this.call("/accounts/${accountId}/organizations").then(function (data) {
        if (transform) {
          return data.map(function (object) {
            return new _models.MOrganization(object);
          });
        } else {
          return data;
        }
      });
    }

    /** 
    * 
    * @returns {Promise<object>}
    */

  }, {
    key: "get",
    value: function get(organizationId) {
      return this.call("/organizations/" + organizationId);
    }

    /** 
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "create",
    value: function create(data) {
      return this.call("/accounts/${accountId}/organizations", "POST", data);
    }

    /** 
     * @param {string} organizationId
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "update",
    value: function update(organizationId, data) {
      return this.call("/organizations/" + organizationId, "PUT", data);
    }

    /** 
     * @param {string} organizationId
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "delete",
    value: function _delete(organizationId) {
      return this.call("/organizations/" + organizationId, "DELETE");
    }
  }]);

  return Organization;
}(_baseModel2.default);

exports.default = Organization;