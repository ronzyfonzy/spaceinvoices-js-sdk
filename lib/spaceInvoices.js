"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestService = require("./requestService");

var _modules = require("./modules");

var modules = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaceInvoices = function () {

  /**
   * 
   * @param {string} apiToken - Token needed for calling the API
   * @param {string} accountId - Account for retreiving data from
   * @param {string} host - Hostname for the API / default https://api.spaceinvoices.com/v1
   */
  function SpaceInvoices(apiToken, accountId) {
    var host = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://api.spaceinvoices.com/v1";

    _classCallCheck(this, SpaceInvoices);

    _requestService.requestService.init(host, apiToken, accountId);
  }

  /**
   *
   * @param {string} accountId 
   */


  _createClass(SpaceInvoices, [{
    key: "switchAccountId",
    value: function switchAccountId(accountId) {
      _requestService.requestService.accountId = accountId;
    }
  }, {
    key: "account",
    get: function get() {
      return modules.account;
    }
  }, {
    key: "client",
    get: function get() {
      return modules.client;
    }
  }, {
    key: "company",
    get: function get() {
      return modules.company;
    }
  }, {
    key: "currency",
    get: function get() {
      return modules.currency;
    }
  }, {
    key: "document",
    get: function get() {
      return modules.document;
    }
  }, {
    key: "item",
    get: function get() {
      return modules.item;
    }
  }, {
    key: "organization",
    get: function get() {
      return modules.organization;
    }
  }]);

  return SpaceInvoices;
}();

exports.default = SpaceInvoices;