import FilterBuilder from './filterBuilder' // eslint-disable-line no-unused-vars

export default class ParamBuilder {
  /**
   *
   * @param {FilterBuilder} filter
   */
  constructor (filter) {
    this._filter = filter
  }

  /**
   * Equivalence
   * @param {*} value
   *
   * @returns {FilterBuilder}
   */
  eq (value) {
    this._setValue(value)
    return this._filter
  }

  /**
   * Not equal (!=)
   * @param {*} value
   */
  neq (value) {
    return this.eq(value)
  }

  /**
   * Numerical greather than (>)
   * Valid for numberical and date values. For Geopoint values, the units are in miles by default.
   *
   * @param {string|number|Date} value
   */
  gt (value) {
    this._setValue({'gt': value})
    return this._filter
  }

  /**
   * Numerical greater than of equal (>=)
   * Valid for numberical and date values. For Geopoint values, the units are in miles by default.
   *
   * @param {string|number|Date} value
   */
  gte (value) {
    this._setValue({'gt': value})
    return this._filter
  }

  /**
   * Numerical less than (<)
   * Valid only for numerical and date values. For Geopoint values, the units are in miles by default.
   * @param {string|number|Date} value
   */
  lt (value) {
    this._setValue({'lt': value})
    return this._filter
  }

  /**
   * Numerical less than or equal (<=)
   * Valid only for numerical and date values. For Geopoint values, the units are in miles by default.
   * @param {string|number|Date} value
   */
  lte (value) {
    this._setValue({'lte': value})
    return this._filter
  }

  /**
   * True if the value is between the two specified values
   * greater than or equal to first value and less than or equal to second value.
   * @param {*} valFrom
   * @param {*} valTo
   */
  between (valFrom, valTo) {
    this._setValue({'between': [valFrom, valTo]})
    return this._filter
  }

  /**
   * In an array of values.
   * @param {*} values
   */
  inq (...values) {
    this._setValue({'inq': values})
    return this._filter
  }

  /**
   * Not in an array of values.
   * @param {*} values
   */
  nin (...values) {
    this._setValue({'nin': values})
    return this._filter
  }

  /**
   * For geolocations, return the closest points, sorted in order of distance.
   * Use with limit to return the n closest points.
   * maxDistance and unit can also be passed on same level as near to configure the search.
   * @param {string} near
   * @param {number} maxDistance
   * @param {string} units miles or meters. Default: miles
   */
  near (near, maxDistance = null, units = null) {
    let value = near
    if (maxDistance) {
      value = Object.assign({}, {near, maxDistance})
    }
    if (units) {
      value = Object.assign({}, {near, maxDistance, units})
    }
    this._setValue(value)
    return this._filter
  }

  /**
   * Sets the value to the filter builder
   * @param {*} value
   */
  _setValue (value) {
    let fields = this._filter._where

    if (this._filter._where.and !== undefined) {
      fields = this._filter._where.and[this._filter._where.and.length - 1]
    } else if (this._filter._where.or !== undefined) {
      fields = this._filter._where.or[this._filter._where.or.length - 1]
    }

    for (var key of Object.keys(fields)) {
      fields[key] = value
    }
  }
}
