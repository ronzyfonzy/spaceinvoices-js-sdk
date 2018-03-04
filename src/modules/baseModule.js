import { requestService } from "../requestService";

export default class BaseModule {

  constructor() {
    this.transformModel = null;
  }

  /**
   *
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise<any>}
   */
  call(endpoint, method = "GET", data = null) {
    return requestService.call(endpoint, method, data).then((data) => {
      if (this.transformModel !== null) {
        return this._transform(data);
      } else {
        return data;
      }
    });
  }

  _transform(data) {
    if (Array.isArray(data)) {
      return data.map((item) => {
        return new this.transformModel(item);
      });
    } else {
      return new this.transformModel(data);
    }
  }
}