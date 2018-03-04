import { requestService } from "./requestService";
import * as modules from "./modules";

export default class SpaceInvoices {

  constructor(accountId, apiToken, host = "https://api.spaceinvoices.com/v1") {
    requestService.init(host, accountId, apiToken)
    modules.org
  }

  get account() { return modules.Account; }
  get client() { return modules.Client; }
  get company() { return modules.Company; }
  get currency() { return modules.Currency; }
  get document() { return modules.Document; }
  get item() { return modules.Item; }
  get organization() { return modules.Organization; }
}