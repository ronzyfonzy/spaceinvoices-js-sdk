import BaseModule from "./baseModule";

class Account extends BaseModule {
  /**
  * 
  * @param {string} accountId 
  * 
  * @returns {Promise<object>}
  */
  get(accountId) {
    return this.call(`/accounts/${accountId}`);
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<object>}
  */
  authenticate(email, password) {
    return this.call("/accounts/login", "POST", { email, password });
  }

  /**
  * 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<object>}
  */
  authenticate(email, password) {
    return this.call("/accounts", "POST", { email, password });
  }


  /**
  * 
  * @param {string} email 
  
  * @returns {Promise<boolean>}
  */
  isEmailUnique(email) {
    return this.call(`/accounts/is-unique?email=${email}`).then((data) => {
      return data.isUnique;
    });
  }
}

export default new Account();
