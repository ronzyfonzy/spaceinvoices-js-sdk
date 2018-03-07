"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require("./errors");

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
     * @param {string} apiToken
     * @param {string} accountId
     */
    value: function init(host, apiToken, accountId) {
      this.host = host;
      this.apiToken = apiToken;
      this.accountId = accountId;
      this.requester = _requestPromise2.default.defaults({
        baseUrl: this.host,
        headers: {
          Authorization: this.apiToken
        }
      });
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
        resolveWithFullResponse: true,
        simple: true,
        json: true
      };

      if (data) {
        requestProps = Object.assign(requestProps, {
          body: data
        });
      }

      return this.requester(requestProps).then(function (response) {
        return response.body;
      }).catch(function (response) {
        return Promise.reject(new _errors.ResponseError(response));
      });
    }

    /**
     * Will be deprecated one the account model will be working
     * 
     * @param {string} endpoint
     * @returns {string}
     */

  }, {
    key: "createUri",
    value: function createUri(endpoint) {
      if (!endpoint) {
        throw new _errors.RequestError("No endpoint specified");
      }
      return endpoint.replace("${accountId}", this.accountId);
    }
  }]);

  return RequestService;
}();

var requestService = exports.requestService = new RequestService();