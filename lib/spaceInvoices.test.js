"use strict";

var _chai = require("chai");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _spaceInvoices = require("./spaceInvoices");

var _spaceInvoices2 = _interopRequireDefault(_spaceInvoices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("SpaceInvoices", function () {
  it("organization get response should be array", function () {
    var spaceInvoices = new _spaceInvoices2.default(_config2.default.host, _config2.default.accountId, _config2.default.apiToken);

    spaceInvoices.organization.list().then(function (data) {
      (0, _chai.expect)(data).to.be.a('array');
    }).catch(function (err) {
      console.error("NAPAKA", err);
    });
  });
});