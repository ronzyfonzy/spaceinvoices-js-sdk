import BaseModel from './baseModel'
import { organization, document, client, item, payment, recurrence, tax } from '../modules'

export default class MOrganization extends BaseModel {
  constructor (data) {
    super(data)
    this.module = organization
    if (data) {
      /**
       * @type {String}
       */
      this.locale = data.locale
      /**
       * @type {String}
       */
      this.brand = data.brand
      /**
       * @type {number}
       */
      this.supportPin = data.supportPin
      /**
       * @type {String}
       */
      this.name = data.name
      /**
       * @type {String}
       */
      this.address = data.address
      /**
       * @type {String}
       */
      this.city = data.city
      /**
       * @type {String}
       */
      this.country = data.country
      /**
       * @type {String}
       */
      this.IBAN = data.IBAN
      /**
       * @type {String}
       */
      this.bank = data.bank
    }
  }

  /**
   *
   * @returns {Promise<MDocument[]>}
   */
  listDocuments () {
    return document.list(this.id)
  }

  /**
   *
   * @returns {Promise<MDocument>}
   */
  createDocument (data) {
    return document.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MClient[]>}
   */
  listClients () {
    return client.list(this.id)
  }

  /**
   *
   * @returns {Promise<MClient>}
   */
  createClient (data) {
    return client.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MClient>}
   */
  searchClient (term) {
    return client.search(this.id, term)
  }

  /**
   *
   * @returns {Promise<MItem[]>}
   */
  listItems () {
    return item.list(this.id)
  }

  /**
   *
   * @returns {Promise<MItem>}
   */
  createItem (data) {
    return item.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MItem>}
   */
  searchItem (term) {
    return item.search(this.id, term)
  }

  /**
   *
   * @returns {Promise<MPayment[]>}
   */
  listPayments () {
    return payment.list(this.id)
  }

  /**
   *
   * @returns {Promise<MRecurrence[]>}
   */
  listRecurrences () {
    return recurrence.listFromOrganization(this.id)
  }

  /**
   *
   * @returns {Promise<MTax[]>}
   */
  listTaxes () {
    return tax.list(this.id)
  }

  /**
   *
   * @returns {Promise<MTax>}
   */
  createTax (data) {
    return tax.create(this.id, data)
  }
}
