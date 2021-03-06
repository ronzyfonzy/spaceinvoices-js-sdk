'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = require('../services');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars
var BaseModule = function () {
  function BaseModule() {
    _classCallCheck(this, BaseModule);

    this.TransformModel = null;
  }

  /**
   *
   * @param {string} endpoint
   * @param {object|FilterBuilder} data
   * @param {string} method
   * @param {boolean} autoTransform
   *
   * @returns {Promise}
   */


  _createClass(BaseModule, [{
    key: 'call',
    value: function call(endpoint) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
      var autoTransform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var filter = null;
      if (data !== null && data.constructor !== undefined && data.constructor.name === 'FilterBuilder') {
        filter = data;
        data = null;
      }

      return _services.requestService.call(endpoint, method, data, filter).then(function (data) {
        if (autoTransform && _this.transformModel !== null) {
          return _this._transform(data);
        } else {
          return data;
        }
      });
    }
  }, {
    key: '_transform',
    value: function _transform(data) {
      var _this2 = this;

      if (Array.isArray(data)) {
        return data.map(function (item) {
          return new _this2.TransformModel(item);
        });
      } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        return new this.TransformModel(data);
      } else {
        return undefined;
      }
    }
  }]);

  return BaseModule;
}();

exports.default = BaseModule;