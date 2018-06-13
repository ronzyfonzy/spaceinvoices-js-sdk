import BaseModel from './baseModel'
import { organization, document, client, item, payment, recurrence, tax } from '../modules'

export default class MOrganization extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = organization

    /**
     * Name of company or other type of organization
     * @type {string}
     */
    this.name = data.name || ''
    /**
     * Street or similar address
     * @type {string}
     */
    this.address = data.address || ''
    /**
     * Address line 2
     * @type {string}
     */
    this.address2 = data.address2 || ''
    /**
     * City name
     * @type {string}
     */
    this.city = data.city || ''
    /**
     * Zip / post code
     * @type {string}
     */
    this.zip = data.zip || ''
    /**
     * ISO 3166 county. [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1) The country parameter is used 
     * to apply some smart defaults to the organization being created including default tax rates and texts 
     * (both may be effected by taxSubject property in some cases)
     * @type {string}
     */
    this.country = data.country || ''
    /**
     * Specify if the organization is subject to tax. Property effects creation of default tax 
     * rates and texts
     * @type {boolean=false} 
     */
    this.taxSubject = data.taxSubject || ''
    /**
     * VAT / GST / etc. tax identification number
     * @type {string}
     */
    this.taxNumber = data.taxNumber || ''
    /**
     * registration or similar identification number
     * @type {string}
     */
    this.companyNumber = data.companyNumber || ''
    /**
     * Bank account number
     * @type {string}
     */
    this.IBAN = data.IBAN || ''
    /**
     * Website address
     * @type {string}
     */
    this.website = data.website || ''
    /**
     * ISO 639-1 locale code. [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) Effects 
     * language of default texts and system messages. 
     * @type {String=en} 
     */
    this.locale = data.locale || ''
    /**
     * Brand source identification for internal use
     * @type {string}
     */
    this.brand = data.brand || 'space-invoices'
  }

  /**
   *
   * @returns {Promise<MDocument[]>}
   */
  listDocuments() {
    return document.list(this.id)
  }

  /**
   *
   * @returns {Promise<MDocument>}
   */
  createDocument(data) {
    return document.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MClient[]>}
   */
  listClients() {
    return client.list(this.id)
  }

  /**
   *
   * @returns {Promise<MClient>}
   */
  createClient(data) {
    return client.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MClient>}
   */
  searchClient(term) {
    return client.search(this.id, term)
  }

  /**
   *
   * @returns {Promise<MItem[]>}
   */
  listItems() {
    return item.list(this.id)
  }

  /**
   *
   * @returns {Promise<MItem>}
   */
  createItem(data) {
    return item.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MItem>}
   */
  searchItem(term) {
    return item.search(this.id, term)
  }

  /**
   *
   * @returns {Promise<MPayment[]>}
   */
  listPayments() {
    return payment.list(this.id)
  }

  /**
   *
   * @returns {Promise<MRecurrence[]>}
   */
  listRecurrences() {
    return recurrence.listFromOrganization(this.id)
  }

  /**
   *
   * @returns {Promise<MTax[]>}
   */
  listTaxes() {
    return tax.list(this.id)
  }

  /**
   *
   * @returns {Promise<MTax>}
   */
  createTax(data) {
    return tax.create(this.id, data)
  }
}
