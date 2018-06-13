import dotenv from 'dotenv'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { SpaceInvoices } from '../src/spaceInvoices'
import { MAccount } from '../src/models'
import { RequestError } from '../src/services/errors'

dotenv.config()
let expect = chai.use(chaiAsPromised).expect

/** @test {SpaceInvoices#account} */
describe('SpaceInvoices Modules Test / Account', () => {
  let spaceInvoices = new SpaceInvoices(process.env.API_TOKEN)
  /**
   * @type { MAccount | null }
   */
  let account = null

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

  it('is email unique', () => {
    return expect(spaceInvoices.account.isEmailUnique(process.env.TEST_EMAIL)).to.eventually.be.fulfilled.with.false
  })
})
