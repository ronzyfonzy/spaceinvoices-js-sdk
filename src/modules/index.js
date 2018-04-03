import Account from './account'
import Client from './client'
import Company from './company'
import Currency from './currency'
import Document from './document'
import Item from './item'
import Organization from './organization'
import Payment from './payment'
import Recurrence from './recurrence'
import Tax from './tax'

// export default {
//   account: new Account(),
//   client: new Client(),
//   company: new Company(),
//   currency: new Currency(),
//   document: new Document(),
//   item: new Item(),
//   organization: new Organization(),
//   payment: new Payment(),
//   recurrence: new Recurrence(),
//   tax: new Tax()
// }

export const account = new Account()
export const client = new Client()
export const company = new Company()
export const currency = new Currency()
export const document = new Document()
export const item = new Item()
export const organization = new Organization()
export const payment = new Payment()
export const recurrence = new Recurrence()
export const tax = new Tax()
