import { expect } from "chai";
import config from "../config";
import SpaceInvoices from "./spaceInvoices";

describe("SpaceInvoices", () => {
  it("organization get response should be array", () => {
    let spaceInvoices = new SpaceInvoices(config.host, config.accountId, config.apiToken);

    spaceInvoices.organization.list().then(data => {
      expect(data).to.be.a('array');
    }).catch((err) => {
      console.error("NAPAKA", err);
    })
  });
});