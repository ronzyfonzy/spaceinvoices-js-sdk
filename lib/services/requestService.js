'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-line no-unused-vars


var _errors = require('../errors');

var _filterBuilder = require('./filterBuilder');

var _filterBuilder2 = _interopRequireDefault(_filterBuilder);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestService = function () {
  function RequestService() {
    _classCallCheck(this, RequestService);
  }

  _createClass(RequestService, [{
    key: 'init',

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
     * @param {string} endpoint
     * @param {string} method
     * @param {(null|object)} data
     * @param {(null|FilterBuilder)} filter
     *
     * @returns {Promise<(Array|Object|RequestError|ResponseError)>}
     */

  }, {
    key: 'call',
    value: function call(endpoint) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var filter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (filter !== null) {
        endpoint = filter.buildUri(endpoint);
      }

      var requestProps = {
        method: method,
        uri: endpoint,
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
        if (response.statusCode >= 400 && response.statusCode < 500) {
          return Promise.reject(new _errors.RequestError(response.statusCode, response.response.body.error));
        } else {
          return Promise.reject(new _errors.ServerError(response.statusCode, response.response.body.error));
        }
      });
    }
  }]);

  return RequestService;
}();

var requestService = exports.requestService = new RequestService();