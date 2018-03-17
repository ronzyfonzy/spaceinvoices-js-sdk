import ParamBuilder from './paramBuilder'
import URI from 'urijs'

export default class FilterBuilder {
  constructor () {
    this._param = new ParamBuilder(this)
    this.reset()
  }

  static new () {
    return new this()
  }

  reset () {
    this._where = {}
    this._include = null
    this._fields = null
    this._limit = null
    this._order = null
    this._skip = null
    this._deleted = null
  }

  /**
   * Where query filter
   * Accepts operators, see [Where operators](http://docs.spaceinvoices.com/?shell#where-operators) section for details.
   * @param {*} fields
   */
  where (...fields) {
    fields.forEach(field => {
      this._where[field] = null
    })
    return this._param
  }

  /**
   * Logical AND operator
   * @param {string} fields
   */
  and (...fields) {
    this._operator('and', fields)
    return this._param
  }

  /**
   * Logical OR operator
   * @param {string} fields
   */
  or (...fields) {
    this._operator('or', fields)
    return this._param
  }

  _operator (operation, fields) {
    if (this._where[operation] === undefined) {
      let tmpWhere = Object.assign({}, this._where)
      this._where = {}
      this._where[operation] = [tmpWhere]
    }
    fields.forEach(field => {
      let tmpWhere = {}
      tmpWhere[field] = null
      this._where[operation].push(tmpWhere)
    })
  }

  /**
   * Used to include related models
   * @param {*} model
   */
  include (model) {
    this._include = model
    return this
  }

  /**
   * Include or exclude certain fields
   * @param {*} fields
   */
  fields (...fields) {
    this._fields = {}
    fields.forEach(field => {
      this._fields[field] = true
    })
    return this
  }

  /**
   * Limit amount of data returned
   * @param {number} limit
   */
  limit (limit) {
    this._limit = limit
    return this
  }

  /**
   * Order results by property
   * @param {string} field
   * @param {string} sort ASC or DESC
   */
  order (field, sort = 'ASC') {
    this._order = { field, sort }
    return this
  }

  /**
   * Number of results to skip
   * @param {number} skip
   */
  skip (skip) {
    this._skip = skip
    return this
  }

  /**
   * Also return deleted records. Only available on models that implement soft delete
   */
  deleted () {
    this._deleted = true
    return this
  }

  buildObject () {
    let filter = {}
    if (this._where) {
      filter.where = this._where
    }
    if (this._include) {
      filter.include = this._include
    }
    if (this._fields) {
      filter.fields = this._fields
    }
    if (this._limit) {
      filter.limit = this._limit
    }
    if (this._order) {
      filter.order = this._order
    }
    if (this._skip) {
      filter.skip = this._skip
    }
    if (this._deleted) {
      filter.deleted = this._deleted
    }

    return filter
  }

  buildUri (endpoint = '', decode = false) {
    let filter = { filter: this.buildObject() }

    let filterFlatten = this._flattenFilter(filter)
    let uriFilter = URI.buildQuery(filterFlatten)
    let uri = URI(endpoint + (URI(endpoint).search() ? '&' : '?') + uriFilter)

    if (decode) {
      return URI.decode(uri.toString())
    } else {
      return uri.toString()
    }
  }

  _flattenFilter (ob, lvl = 0) {
    var toReturn = {}
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue

      if ((typeof ob[i]) === 'object') {
        var flatObject = this._flattenFilter(ob[i], ++lvl)
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue

          if (lvl !== 1) {
            toReturn[`[${i}]${x}`] = flatObject[x]
          } else {
            toReturn[`${i}${x}`] = flatObject[x]
          }
        }
      } else {
        toReturn[`[${i}]`] = ob[i]
      }
    }
    return toReturn
  }
}
