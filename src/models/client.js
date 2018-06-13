import BaseModel from './baseModel'
import { client } from '../modules'

export default class MClient extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = client
  }
}
