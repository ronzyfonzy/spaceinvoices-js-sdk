import BaseModel from './baseModel'
import { item } from '../modules'

export default class MItem extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = item
  }
}
