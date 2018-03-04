"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = function BaseModel(data) {
  _classCallCheck(this, BaseModel);

  if (data.id !== undefined) {
    this.id = data.id;
  }
  this.data = data;
};

exports.default = BaseModel;