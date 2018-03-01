"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestService = require("../requestService");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = function () {
  function BaseModel() {
    _classCallCheck(this, BaseModel);
  }

  _createClass(BaseModel, null, [{
    key: "call",

    /**
     *
     * @param {string} method
     * @param {string} endpoint
     * @param {object} data
     *
     * @returns {Promise<any>}
     */
    value: function call(endpoint) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return _requestService.rs.call(endpoint, method, data);
    }
  }]);

  return BaseModel;
}();

exports.default = BaseModel;