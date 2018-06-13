import BaseModel from './baseModel'
import { payment } from '../modules'

export default class MPayment extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = payment
  }
}
