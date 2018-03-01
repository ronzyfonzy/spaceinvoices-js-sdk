"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestService = function () {
  function RequestService() {
    _classCallCheck(this, RequestService);
  }

  _createClass(RequestService, [{
    key: "init",

    /**
     * Initialize
     * @param {string} host
     * @param {string} accountId
     * @param {string} apiToken
     */
    value: function init(host, accountId, apiToken) {
      this.host = host;
      this.accountId = accountId;
      this.apiToken = apiToken;
    }

    /**
     *
     * @param {string} method
     * @param {string} endpoint
     * @param {object} data
     *
     * @returns {Promise}
     */

  }, {
    key: "call",
    value: function call(endpoint) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var requestProps = {
        method: method,
        uri: this.createUri(endpoint),
        headers: {
          Authorization: this.apiToken
        }
      };

      if (data && this.requestHasBody(method)) {
        requestProps.body = data;
        requestProps.json = true;
      }

      return (0, _requestPromise2.default)(requestProps).then(function (data) {
        return JSON.parse(data);
      });
    }
  }, {
    key: "requestHasBody",
    value: function requestHasBody(method) {
      return ["GET", "DELETE"].indexOf(method);
    }

    /**
     * @param {string} endpoint
     * @returns {string} 
     */

  }, {
    key: "createUri",
    value: function createUri(endpoint) {
      var replacedEndpoint = endpoint.replace("${accountId}", this.accountId);
      return "" + this.host + replacedEndpoint;
    }
  }]);

  return RequestService;
}();

var rs = exports.rs = new RequestService();