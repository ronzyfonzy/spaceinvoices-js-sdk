import { requestService, FilterBuilder } from '../services' // eslint-disable-line no-unused-vars
export default class BaseModule {
  constructor() {
    this.TransformModel = null
  }

  /**
   *
   * @param {string} endpoint
   * @param {object|FilterBuilder} data
   * @param {string} method
   * @param {boolean} autoTransform
   *
   * @returns {Promise}
   */
  call(endpoint, data = null, method = 'GET', autoTransform = true) {
    let filter = null
    if (data !== null && data.constructor !== undefined && data.constructor.name === 'FilterBuilder') {
      filter = data
      data = null
    }

    return requestService.call(endpoint, method, data, filter).then((data) => {
      if (autoTransform && this.transformModel !== null) {
        return this._transform(data)
      } else {
        return data
      }
    })
  }

  _transform(data) {
    if (Array.isArray(data)) {
      return data.map((item) => {
        return new this.TransformModel(item)
      })
    } else if (typeof data === 'object') {
      return new this.TransformModel(data)
    } else {
      return undefined
    }
  }
}
