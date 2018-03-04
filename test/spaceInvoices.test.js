import { expect } from "chai";
import config from "../config";
import SpaceInvoices from "../src/spaceInvoices";

describe("SpaceInvoices", () => {
  it("organization get response should be array", () => {
    let spaceInvoices = new SpaceInvoices(config.accountId, config.apiToken);

    spaceInvoices.organization.list().then(organizations => {
      console.log(organizations);
      // console.log('organizations', organizations);
      // organizations[0].listDocuments().then((documents) => {
      //   console.log('documents', documents);
      // })
      expect(organizations).to.be.a('array');
    }).catch((err) => {
      console.error("NAPAKA", err);
    });
  });
});