import BaseModel from './baseModel'
import { tax } from '../modules'

export default class MTax extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor(data = null) {
    super(data)
    this.module = tax
  }
}
