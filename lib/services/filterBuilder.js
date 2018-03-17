'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _paramBuilder = require('./paramBuilder');

var _paramBuilder2 = _interopRequireDefault(_paramBuilder);

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterBuilder = function () {
  function FilterBuilder() {
    _classCallCheck(this, FilterBuilder);

    this._param = new _paramBuilder2.default(this);
    this.reset();
  }

  _createClass(FilterBuilder, [{
    key: 'reset',
    value: function reset() {
      this._where = {};
      this._include = null;
      this._fields = null;
      this._limit = null;
      this._order = null;
      this._skip = null;
      this._deleted = null;
    }

    /**
     * Where query filter
     * Accepts operators, see [Where operators](http://docs.spaceinvoices.com/?shell#where-operators) section for details.
     * @param {*} fields
     */

  }, {
    key: 'where',
    value: function where() {
      var _this = this;

      for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
        fields[_key] = arguments[_key];
      }

      fields.forEach(function (field) {
        _this._where[field] = null;
      });
      return this._param;
    }

    /**
     * Logical AND operator
     * @param {string} fields
     */

  }, {
    key: 'and',
    value: function and() {
      for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fields[_key2] = arguments[_key2];
      }

      this._operator('and', fields);
      return this._param;
    }

    /**
     * Logical OR operator
     * @param {string} fields
     */

  }, {
    key: 'or',
    value: function or() {
      for (var _len3 = arguments.length, fields = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        fields[_key3] = arguments[_key3];
      }

      this._operator('or', fields);
      return this._param;
    }
  }, {
    key: '_operator',
    value: function _operator(operation, fields) {
      var _this2 = this;

      if (this._where[operation] === undefined) {
        var tmpWhere = Object.assign({}, this._where);
        this._where = {};
        this._where[operation] = [tmpWhere];
      }
      fields.forEach(function (field) {
        var tmpWhere = {};
        tmpWhere[field] = null;
        _this2._where[operation].push(tmpWhere);
      });
    }

    /**
     * Used to include related models
     * @param {*} model
     */

  }, {
    key: 'include',
    value: function include(model) {
      this._include = model;
      return this;
    }

    /**
     * Include or exclude certain fields
     * @param {*} fields
     */

  }, {
    key: 'fields',
    value: function fields() {
      var _this3 = this;

      this._fields = {};

      for (var _len4 = arguments.length, _fields = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        _fields[_key4] = arguments[_key4];
      }

      _fields.forEach(function (field) {
        _this3._fields[field] = true;
      });
      return this;
    }

    /**
     * Limit amount of data returned
     * @param {number} limit
     */

  }, {
    key: 'limit',
    value: function limit(_limit) {
      this._limit = _limit;
      return this;
    }

    /**
     * Order results by property
     * @param {string} field
     * @param {string} sort ASC or DESC
     */

  }, {
    key: 'order',
    value: function order(field) {
      var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ASC';

      this._order = { field: field, sort: sort };
      return this;
    }

    /**
     * Number of results to skip
     * @param {number} skip
     */

  }, {
    key: 'skip',
    value: function skip(_skip) {
      this._skip = _skip;
      return this;
    }

    /**
     * Also return deleted records. Only available on models that implement soft delete
     */

  }, {
    key: 'deleted',
    value: function deleted() {
      this._deleted = true;
      return this;
    }
  }, {
    key: 'buildObject',
    value: function buildObject() {
      var filter = {};
      if (this._where) {
        filter.where = this._where;
      }
      if (this._include) {
        filter.include = this._include;
      }
      if (this._fields) {
        filter.fields = this._fields;
      }
      if (this._limit) {
        filter.limit = this._limit;
      }
      if (this._order) {
        filter.order = this._order;
      }
      if (this._skip) {
        filter.skip = this._skip;
      }
      if (this._deleted) {
        filter.deleted = this._deleted;
      }

      return filter;
    }
  }, {
    key: 'buildUri',
    value: function buildUri() {
      var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var filter = { filter: this.buildObject() };

      var filterFlatten = this._flattenFilter(filter);
      var uriFilter = _urijs2.default.buildQuery(filterFlatten);
      var uri = (0, _urijs2.default)(endpoint + ((0, _urijs2.default)(endpoint).search() ? '&' : '?') + uriFilter);

      if (decode) {
        return _urijs2.default.decode(uri.toString());
      } else {
        return uri.toString();
      }
    }
  }, {
    key: '_flattenFilter',
    value: function _flattenFilter(ob) {
      var lvl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var toReturn = {};
      for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if (_typeof(ob[i]) === 'object') {
          var flatObject = this._flattenFilter(ob[i], ++lvl);
          for (var x in flatObject) {
            if (!flatObject.hasOwnProperty(x)) continue;

            if (lvl !== 1) {
              toReturn['[' + i + ']' + x] = flatObject[x];
            } else {
              toReturn['' + i + x] = flatObject[x];
            }
          }
        } else {
          toReturn['[' + i + ']'] = ob[i];
        }
      }
      return toReturn;
    }
  }], [{
    key: 'new',
    value: function _new() {
      return new this();
    }
  }]);

  return FilterBuilder;
}();

exports.default = FilterBuilder;