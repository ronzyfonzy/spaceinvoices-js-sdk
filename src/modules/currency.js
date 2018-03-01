import BaseModel from "./baseModel";

export default class Currency extends BaseModel {
  /** 
   * 
   * @returns {Promise<object[]>}
   */
  static list() {
    return this.call("/currencies");
  }
}