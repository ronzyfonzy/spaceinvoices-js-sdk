'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filterBuilder = require('./filterBuilder');

var _filterBuilder2 = _interopRequireDefault(_filterBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars

var ParamBuilder = function () {
  /**
   *
   * @param {FilterBuilder} filter
   */
  function ParamBuilder(filter) {
    _classCallCheck(this, ParamBuilder);

    this._filter = filter;
  }

  /**
   * Equivalence
   * @param {*} value
   *
   * @returns {FilterBuilder}
   */


  _createClass(ParamBuilder, [{
    key: 'eq',
    value: function eq(value) {
      this._setValue(value);
      return this._filter;
    }

    /**
     * Not equal (!=)
     * @param {*} value
     */

  }, {
    key: 'neq',
    value: function neq(value) {
      return this.eq(value);
    }

    /**
     * Numerical greather than (>)
     * Valid for numberical and date values. For Geopoint values, the units are in miles by default.
     *
     * @param {string|number|Date} value
     */

  }, {
    key: 'gt',
    value: function gt(value) {
      this._setValue({ 'gt': value });
      return this._filter;
    }

    /**
     * Numerical greater than of equal (>=)
     * Valid for numberical and date values. For Geopoint values, the units are in miles by default.
     *
     * @param {string|number|Date} value
     */

  }, {
    key: 'gte',
    value: function gte(value) {
      this._setValue({ 'gt': value });
      return this._filter;
    }

    /**
     * Numerical less than (<)
     * Valid only for numerical and date values. For Geopoint values, the units are in miles by default.
     * @param {string|number|Date} value
     */

  }, {
    key: 'lt',
    value: function lt(value) {
      this._setValue({ 'lt': value });
      return this._filter;
    }

    /**
     * Numerical less than or equal (<=)
     * Valid only for numerical and date values. For Geopoint values, the units are in miles by default.
     * @param {string|number|Date} value
     */

  }, {
    key: 'lte',
    value: function lte(value) {
      this._setValue({ 'lte': value });
      return this._filter;
    }

    /**
     * True if the value is between the two specified values
     * greater than or equal to first value and less than or equal to second value.
     * @param {*} valFrom
     * @param {*} valTo
     */

  }, {
    key: 'between',
    value: function between(valFrom, valTo) {
      this._setValue({ 'between': [valFrom, valTo] });
      return this._filter;
    }

    /**
     * In an array of values.
     * @param {*} values
     */

  }, {
    key: 'inq',
    value: function inq() {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      this._setValue({ 'inq': values });
      return this._filter;
    }

    /**
     * Not in an array of values.
     * @param {*} values
     */

  }, {
    key: 'nin',
    value: function nin() {
      for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      this._setValue({ 'nin': values });
      return this._filter;
    }

    /**
     * For geolocations, return the closest points, sorted in order of distance.
     * Use with limit to return the n closest points.
     * maxDistance and unit can also be passed on same level as near to configure the search.
     * @param {string} near
     * @param {number} maxDistance
     * @param {string} units miles or meters. Default: miles
     */

  }, {
    key: 'near',
    value: function near(_near) {
      var maxDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var units = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var value = _near;
      if (maxDistance) {
        value = Object.assign({}, { near: _near, maxDistance: maxDistance });
      }
      if (units) {
        value = Object.assign({}, { near: _near, maxDistance: maxDistance, units: units });
      }
      this._setValue(value);
      return this._filter;
    }

    /**
     * Sets the value to the filter builder
     * @param {*} value
     */

  }, {
    key: '_setValue',
    value: function _setValue(value) {
      var fields = this._filter._where;

      if (this._filter._where.and !== undefined) {
        fields = this._filter._where.and[this._filter._where.and.length - 1];
      } else if (this._filter._where.or !== undefined) {
        fields = this._filter._where.or[this._filter._where.or.length - 1];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(fields)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          fields[key] = value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return ParamBuilder;
}();

exports.default = ParamBuilder;