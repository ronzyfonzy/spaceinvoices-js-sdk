import BaseModel from './baseModel'
import { payment, recurrence } from '../modules'

export default class MDocument extends BaseModel {
  /**
   *
   * @returns {Promise<MPayment[]>}
  */
  listPayments () {
    return payment.list(this.id)
  }

  /**
   *
   * @returns {Promise<MPayment>}
  */
  createPayment (data) {
    return payment.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MRecurrence[]>}
  */
  listReccurences () {
    return recurrence.listFromDocument(this.id)
  }

  /**
   *
   * @returns {Promise<MRecurrence>}
  */
  createReccurence (data) {
    return recurrence.create(this.id, data)
  }
}
