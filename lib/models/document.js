"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MDocument = function MDocument(data) {
  _classCallCheck(this, MDocument);

  this.id = data.id;

  this.data = data;
};

exports.default = MDocument;