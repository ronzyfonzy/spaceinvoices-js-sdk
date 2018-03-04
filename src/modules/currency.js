import BaseModule from "./baseModule";

export default class Currency extends BaseModule {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list() {
    return this.call("/currencies");
  }
}