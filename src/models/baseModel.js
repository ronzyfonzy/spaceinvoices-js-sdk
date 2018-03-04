export default class BaseModel {
  constructor(data) {
    if (data.id !== undefined) {
      this.id = data.id;
    }
    this.data = data;
  }
}