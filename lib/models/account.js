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

var MAccount = function (_BaseModel) {
  _inherits(MAccount, _BaseModel);

  function MAccount() {
    _classCallCheck(this, MAccount);

    return _possibleConstructorReturn(this, (MAccount.__proto__ || Object.getPrototypeOf(MAccount)).apply(this, arguments));
  }

  _createClass(MAccount, [{
    key: 'setId',

    /**
     * @inheritDoc
     */
    value: function setId() {
      this.id = this.data.userId;
    }

    /**
    * @inheritDoc
    */

  }, {
    key: 'listOrganizations',
    value: function listOrganizations() {
      var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return _modules.organization.list(this.id, filter);
    }

    /**
     *
     * @param {object} data
     *
     * @returns {Promise<MOrganization>}
     */

  }, {
    key: 'createOrganization',
    value: function createOrganization(data) {
      return _modules.organization.create(this.id, data);
    }
  }]);

  return MAccount;
}(_baseModel2.default);

exports.default = MAccount;