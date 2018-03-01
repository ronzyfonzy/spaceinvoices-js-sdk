import { rs as requestService } from "./requestService";
import * as modules from "./modules";

export default class SpaceInvoices {

  constructor(host, accountId, apiToken) {
    requestService.init(host, accountId, apiToken)
  }

  get account() { return modules.Account; }
  get client() { return modules.Client; }
  get company() { return modules.Company; }
  get currency() { return modules.Currency; }
  get document() { return modules.Document; }
  get item() { return modules.Item; }
  get organization() { return modules.Organization; }
}