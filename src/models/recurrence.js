import BaseModel from './baseModel'
import { recurrence } from '../modules'

export default class MRecurrence extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = recurrence
  }
}
