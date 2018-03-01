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
  function SpaceInvoices(host, accountId, apiToken) {
    _classCallCheck(this, SpaceInvoices);

    _requestService.rs.init(host, accountId, apiToken);
  }

  _createClass(SpaceInvoices, [{
    key: "account",
    get: function get() {
      return modules.Account;
    }
  }, {
    key: "client",
    get: function get() {
      return modules.Client;
    }
  }, {
    key: "company",
    get: function get() {
      return modules.Company;
    }
  }, {
    key: "currency",
    get: function get() {
      return modules.Currency;
    }
  }, {
    key: "document",
    get: function get() {
      return modules.Document;
    }
  }, {
    key: "item",
    get: function get() {
      return modules.Item;
    }
  }, {
    key: "organization",
    get: function get() {
      return modules.Organization;
    }
  }]);

  return SpaceInvoices;
}();

exports.default = SpaceInvoices;