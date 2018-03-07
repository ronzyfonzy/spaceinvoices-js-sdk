'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestService = require('../requestService');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModule = function () {
  function BaseModule() {
    _classCallCheck(this, BaseModule);

    this.TransformModel = null;
  }

  /**
   *
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise<any>}
   */


  _createClass(BaseModule, [{
    key: 'call',
    value: function call(endpoint) {
      var _this = this;

      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return _requestService.requestService.call(endpoint, method, data).then(function (data) {
        if (_this.transformModel !== null) {
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