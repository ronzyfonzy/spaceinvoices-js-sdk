import { expect } from "chai";
import config from "../config";
import SpaceInvoices from "../src/spaceInvoices";

describe("SpaceInvoices", () => {
  it("organization get response should be array", () => {
    let spaceInvoices = new SpaceInvoices(config.apiToken, config.accountId);

    spaceInvoices.organization.list().then(organizations => {
      expect(organizations).to.be.a('array');
    }).catch((err) => {
      console.error("NAPAKA", err);
    });
  });
});