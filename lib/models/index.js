"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _document = require("./document");

Object.defineProperty(exports, "MDocument", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_document).default;
  }
});

var _organization = require("./organization");

Object.defineProperty(exports, "MOrganization", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_organization).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }