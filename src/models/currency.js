import BaseModel from './baseModel'
import { currency } from '../modules'

export default class MCurrency extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = currency

    /**
     * Unique ISO 4217 currency ID of model instance
     * @type {string}
     */
    this.id = data.id || null
    /**
     * Name of Currency.
     * @type {string}
     */
    this.name = data.name || null
    /**
     * Symbol of currency if available otherwise same as ID
     * @type {string}
     */
    this.symbol = data.symbol || null
    /**
     * Type of currency. Either fiat or crypto
     * @type {string}
     */
    this.type = data.type || null
  }
}
