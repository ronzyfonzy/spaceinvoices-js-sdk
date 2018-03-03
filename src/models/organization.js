import { Document } from "../modules";

export default class MOrganization {
  constructor(data) {
    this.id = data.id;

    this.data = data;
  }

  listDocuments() {
    return Document.list(this.id);
  }
}