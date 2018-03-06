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

    var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).call(this));

    _this.transformModel = _models.MDocument;
    return _this;
  }

  /** 
   * 
   * @returns {Promise<MDocument[]>}
   */


  _createClass(Document, [{
    key: "list",
    value: function list(organizationId) {
      var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return this.call("/organizations/" + organizationId + "/documents");
    }

    /** 
    * 
    * @returns {Promise<MDocument>}
    */

  }, {
    key: "get",
    value: function get(documentId) {
      return this.call("/documents/" + documentId);
    }

    /** 
     * @param {object} data
     * 
     * @returns {Promise<MDocument>}
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
     * @returns {Promise<MDocument>}
     */

  }, {
    key: "update",
    value: function update(documentId, data) {
      return this.call("/documents/" + documentId, "PUT", data);
    }

    /** 
     * @param {string} documentId
     * 
     * @returns {Promise<MDocument>}
     */

  }, {
    key: "delete",
    value: function _delete(documentId) {
      return this.call("/documents/" + documentId, "DELETE");
    }

    /** 
     * 
     * @returns {Promise<MPayment>}
     */

  }, {
    key: "payments",
    value: function payments() {
      return this.call("/documents/" + documentId + "/payments");
    }
  }]);

  return Document;
}(_baseModule2.default);

exports.default = new Document();