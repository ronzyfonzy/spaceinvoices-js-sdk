import BaseModel from "./baseModel";
import { organization } from "../modules";

export default class MAccount extends BaseModel {
  /** 
  * 
  * @returns {Promise<MOrganization[]>}
  */
  listOrganizations() {
    return organization.list(this.id);
  }
}