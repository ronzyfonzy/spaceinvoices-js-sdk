import BaseModel from './baseModel'
import { document, payment, recurrence } from '../modules'

export default class MDocument extends BaseModel {

  /**
   * @param {null|object} data 
   */
  constructor (data = null) {
    super(data)
    this.module = document

    /**
     * String, unique (to Document type and Organization) Document number. Auto populated with next number based on document type.
     * @type {string} // default is YYYY-0000n+1 
     */
    this.number = data.number || null
    /**
     * Type of document (invoice, estimate or advance). Determines type of document, note that different document types contain different properties, rules and funcionalities. For example invoice can have Payments logged and contains dateService property. Document type cannot be switched once set to instance.
     * @type {string}
     */
    this.type = data.type || 'invoice'
    /**
     * Boolean, if invoice a draft. If set to true the property cannot go back to false. Only present if type is invoice.
     * @type {string}
     */
    this.draft = data.draft || false
    /**
     * Javascript date, date of Document. Represents date the Document was issued. Time is trimmed.
     * @type {string} // default is today 
     */
    this.date = data.date || null
    /**
     * Javascript date, date invoice is due. Auto populated using Organization's default due days from today. Only present on type invoice. Time is trimmed.
     * @type {string} // default is today + default due days 
     */
    this.dateDue = data.dateDue || null
    /**
     * Javascript date, date service was started or conducted. Only present on type invoice. Time is trimmed.
     * @type {string}
     */
    this.dateService = data.dateService || null
    /**
     * Javascript date, date service period ends. Only present on type invoice. Time is trimmed.
     * @type {string}
     */
    this.dateServiceTo = data.dateServiceTo || null
    /**
     * ISO 4217 currency code. Wikipedia If not provided the Organization's default currency is used.
     * @type {string}
     */
    this.currencyId = data.currencyId || null
    /**
     * ID reference to Organization's Client. If provided _documentClient object gets populated using referenced Client.
     * @type {string}
     */
    this.clientId = data.clientId || null
    /**
     * Object containting client data. Property is optional if clientId is provided. Any key defined in object will be used instead of loaded client data. If clientId is not provided the data in object is saved to Organization's Clients and referenced in document ie. the clientId is auto populated. toggle definition
     * @type {string}
     */
    this._documentClient = data._documentClient || null
    /**
     * Object containting issuer data. Property is automatically populated with Organization data. Any key that is provided in object is used instead. toggle definition
     * @type {string}
     */
    this._documentIssuer = data._documentIssuer || null
    /**
     * Collection of objects containing document line items. toggle definition
     * @type {string}
     */
    this._documentItems = data._documentItems || null
    /**
     * Text note for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    this.note = data.note || null
    /**
     * Text signature for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    this.signature = data.signature || null
    /**
     * Text footer for Document. Populated with Organizaion default if not provided. May contain shortcode notations which get parsed to data on PDF or when parseForDisplay flag is provided.
     * @type {string}
     */
    this.footer = data.footer || null
    /**
     * Number of decimal places the Document items are trimmed and rounded to in calculations. Should be 4 in most cases.
     * @type {string}
     */
    this.decimalPlaces = data.decimalPlaces || 4
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
   * @returns {Promise<MPayment>}
  */
  createPayment(data) {
    return payment.create(this.id, data)
  }

  /**
   *
   * @returns {Promise<MRecurrence[]>}
  */
  listReccurences() {
    return recurrence.listFromDocument(this.id)
  }

  /**
   *
   * @returns {Promise<MRecurrence>}
  */
  createReccurence(data) {
    return recurrence.create(this.id, data)
  }
}
