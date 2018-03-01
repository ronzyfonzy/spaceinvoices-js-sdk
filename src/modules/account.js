import BaseModel from "./baseModel";

export default class Account extends BaseModel {
  /**
  * 
  * @param {string} accountId 
  * 
  * @returns {Promise<object>}
  */
  static get(accountId) {
    return this.call(`/accounts/${accountId}`);
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<object>}
  */
  static authenticate(email, password) {
    return this.call("/accounts/login", "POST", { email, password });
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<object>}
  */
  static authenticate(email, password) {
    return this.call("/accounts", "POST", { email, password });
  }


  /**
  * 
  * @param {string} email 

  * @returns {Promise<boolean>}
  */
  static isEmailUnique(email) {
    return this.call(`/accounts/is-unique?email=${email}`).then((data) => {
      return data.isUnique;
    });
  }
}