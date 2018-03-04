import BaseModel from "./baseModel";
import { Document } from "../modules";

export default class MOrganization extends BaseModel {
  listDocuments() {
    return Document.list(this.id);
  }

  createDocument(data) {
    return Document.create(this.id, data);
  }
}