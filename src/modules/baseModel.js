import { rs } from "../requestService";

export default class BaseModel {
  /**
   *
   * @param {string} method
   * @param {string} endpoint
   * @param {object} data
   *
   * @returns {Promise<any>}
   */
  static call(endpoint, method = "GET", data = null) {
    return rs.call(endpoint, method, data);
  }
}