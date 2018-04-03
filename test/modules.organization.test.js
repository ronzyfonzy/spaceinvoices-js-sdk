import dotenv from 'dotenv'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { SpaceInvoices } from '../src/spaceInvoices'
import { MOrganization } from '../src/models'

dotenv.config()
let expect = chai.use(chaiAsPromised).expect

// let samples = {
//   organization: {
//     name: 'Space Exploration Technologies corp',
//     address: 'Rocket Road',
//     city: 'Hawthorne',
//     zip: 'CA 90250',
//     country: 'USA',
//     IBAN: '123454321 123454321',
//     bank: 'Bank Of America'
//   }
// }

describe('SpaceInvoices Modules Test / Organization', () => {
  let spaceInvoices = new SpaceInvoices(process.env.API_TOKEN)
  /**
   * @type { MAccount | null }
   */
  let account = null
  /**
   * @type { MOrganization[] | null }
   */
  let organizations = null

  before(() => {
    return spaceInvoices.account.authenticate(process.env.TEST_EMAIL, process.env.TEST_PASSWORD).then(_account => {
      account = _account
      return Promise.resolve(_account)
    })
  })

  it('get all organizations', () => {
    return expect(spaceInvoices.organization.list(account.id).then(_organizations => {
      organizations = _organizations
      return Promise.resolve(_organizations)
    })).to.eventually.be.fulfilled.with.an('array')
  })

  it('all organizations instance', () => {
    if (organizations.length) {
      return expect(organizations[0]).to.be.instanceof(MOrganization)
    } else {
      return expect(organizations).to.be.empty
    }
  })

  it('get all organizations from account instance', () => {
    return expect(account.listOrganizations()).to.eventually.be.fulfilled.with.an('array')
  })
})
