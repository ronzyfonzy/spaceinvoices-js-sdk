import BaseModel from './baseModel'
import { company } from '../modules'

export default class MCompany extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = company
  }
}
