"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = function () {

  /**
   * @param {null|object} data 
   */
  function BaseModel() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, BaseModel);

    this.data = data;
    this.module = null;
    this.parseData();
  }

  _createClass(BaseModel, [{
    key: "parseData",
    value: function parseData() {
      this.setId();
    }
  }, {
    key: "setId",
    value: function setId() {
      this.id = this.data.id;
    }

    /**
     * @return {Promise<object>}
     */

  }, {
    key: "update",
    value: function update() {
      return this.module.update(this.id, this.data);
    }

    /**
     * @return {Promise<object>}
     */

  }, {
    key: "delete",
    value: function _delete() {
      return this.module.delete(this.id);
    }
  }]);

  return BaseModel;
}();

exports.default = BaseModel;