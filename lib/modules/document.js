"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModule = require("./baseModule");

var _baseModule2 = _interopRequireDefault(_baseModule);

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_BaseModule) {
  _inherits(Document, _BaseModule);

  function Document() {
    _classCallCheck(this, Document);

    return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  _createClass(Document, null, [{
    key: "list",

    /** 
     * 
     * @returns {Promise<MDocument[]>|object[]}
     */
    value: function list(organizationId) {
      var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.call("/organizations/" + organizationId + "/documents").then(function (data) {
        if (transform) {
          return data.map(function (object) {
            return new _models.MDocument(object);
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
    value: function get(documentId) {
      return this.call("/documents/" + documentId);
    }

    /** 
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "create",
    value: function create(organizationId, data) {
      return this.call("/organizations/" + organizationId + "/documents", "POST", data);
    }

    /** 
     * @param {string} documentId
     * @param {object} data
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "update",
    value: function update(documentId, data) {
      return this.call("/documents/" + documentId, "PUT", data);
    }

    /** 
     * @param {string} documentId
     * 
     * @returns {Promise<object>}
     */

  }, {
    key: "delete",
    value: function _delete(documentId) {
      return this.call("/documents/" + documentId, "DELETE");
    }
  }]);

  return Document;
}(_baseModule2.default);

exports.default = Document;