export default class BaseModel {

  constructor(data) {
    this.data = data;
    this.parseData();
  }

  parseData() {
    this.setId()
  }

  setId(data) {
    this.id = this.data.id;
  }
}