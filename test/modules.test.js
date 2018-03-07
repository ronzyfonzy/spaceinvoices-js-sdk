import dotenv from 'dotenv'
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import SpaceInvoices from "../src/spaceInvoices";
import { MAccount } from "../src/models";
import { account } from "../src/modules";

dotenv.config()
let expect = chai.use(chaiAsPromised).expect;

describe("SpaceInvoices Modules Test", () => {
  let spaceInvoices = new SpaceInvoices(process.env.API_TOKEN);
  let account = null;

  describe("account", () => {
    it("authenticate wrong cridentials", () => {
      return expect(spaceInvoices.account.authenticate("text@example.com", "here")).to.eventually.be.rejected;
    });

    it("authenticate right cridentials", () => {
      return expect(spaceInvoices.account.authenticate(process.env.TEST_EMAIL, process.env.TEST_PASSWORD).then(_account => {
        account = _account;
        return Promise.resolve(_account);
      })).to.eventually.be.fulfilled;
    });

    it("authenticate response instance", () => {
      return expect(account).to.be.instanceOf(MAccount);
    });

    it("get request", () => {
      return expect(spaceInvoices.account.get(account.id).then((data) => {
        return Promise.resolve(data);
      })).to.eventually.be.fulfilled;
    });
  });

  describe("organization", () => {
    let organizations = null;
    it("get all organizations", () => {
      return expect(spaceInvoices.organization.list(account.id).then(_organizations => {
        organizations = _organizations;
        return Promise.resolve(_organizations);
      }).catch(error => { console.log(error) })).to.eventually.be.fulfilled;
    });

    it("all organizations instances", () => {
      return expect(organizations).to.be.an('array');
    });
  });
});