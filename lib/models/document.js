'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require('./baseModel');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _modules = require('../modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDocument = function (_BaseModel) {
  _inherits(MDocument, _BaseModel);

  function MDocument() {
    _classCallCheck(this, MDocument);

    return _possibleConstructorReturn(this, (MDocument.__proto__ || Object.getPrototypeOf(MDocument)).apply(this, arguments));
  }

  _createClass(MDocument, [{
    key: 'listPayments',

    /**
     *
     * @returns {Promise<MPayment[]>}
    */
    value: function listPayments() {
      return _modules.payment.list(this.id);
    }

    /**
     *
     * @returns {Promise<MPayment>}
    */

  }, {
    key: 'createPayment',
    value: function createPayment(data) {
      return _modules.payment.create(this.id, data);
    }

    /**
     *
     * @returns {Promise<MRecurrence[]>}
    */

  }, {
    key: 'listReccurences',
    value: function listReccurences() {
      return _modules.recurrence.listFromDocument(this.id);
    }

    /**
     *
     * @returns {Promise<MRecurrence>}
    */

  }, {
    key: 'createReccurence',
    value: function createReccurence(data) {
      return _modules.recurrence.create(this.id, data);
    }
  }]);

  return MDocument;
}(_baseModel2.default);

exports.default = MDocument;