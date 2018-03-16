import dotenv from 'dotenv'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { SpaceInvoices } from '../src/spaceInvoices'
import { MAccount, MOrganization } from '../src/models'
import { RequestError } from '../src/errors'

dotenv.config()
let expect = chai.use(chaiAsPromised).expect

let samples = {
  organization: {
    name: 'Space Exploration Technologies corp',
    address: 'Rocket Road',
    city: 'Hawthorne',
    zip: 'CA 90250',
    country: 'USA',
    IBAN: '123454321 123454321',
    bank: 'Bank Of America'
  }
}

describe('SpaceInvoices Modules Test', () => {
  let spaceInvoices = new SpaceInvoices(process.env.API_TOKEN)
  /**
   * @type { MAccount | null }
   */
  let account = null
  /**
   * @type { MOrganization | null }
   */
  let organization = null

  describe('account', () => {
    it('authenticate wrong cridentials', () => {
      return expect(spaceInvoices.account.authenticate('text@example.com', 'here')).to.eventually.be.rejectedWith(RequestError)
    })

    it('authenticate right cridentials', () => {
      return expect(spaceInvoices.account.authenticate(process.env.TEST_EMAIL, process.env.TEST_PASSWORD).then(_account => {
        account = _account
        return Promise.resolve(_account)
      })).to.eventually.be.fulfilled.with.instanceOf(MAccount)
    })

    it('get request', () => {
      return expect(spaceInvoices.account.get(account.id)).to.eventually.be.fulfilled.with.instanceOf(MAccount)
    })

    // it('create organization', () => {
    //   return expect(account.createOrganization(samples.organization).then((_organization) => {
    //     organization = _organization
    //     return Promise.resolve(_organization)
    //   })).to.eventually.be.fulfilled.with.instanceOf(MOrganization)
    // })

    // it('delete organization', () => {
    //   if (organization) {
    //     return expect(organization.delete().then(() => {
    //       organization = null
    //       return Promise.resolve(null)
    //     })).to.eventually.be.fulfilled
    //   }

    //   return expect(organization).to.be.null
    // })
  })

  describe('organization', () => {
    let organizations = null

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
  })
})
