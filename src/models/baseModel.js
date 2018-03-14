export default class BaseModel {
  /**
   *
   * @param {object} data
   */
  constructor (data) {
    this.data = data
    this.module = null
    this.parseData()
  }

  parseData () {
    this.setId()
  }

  setId (data) {
    this.id = this.data.id
  }

  /**
   * @return {Promise<object>}
   */
  update () {
    return this.module.update(this.id, this.data)
  }

  /**
   * @return {Promise<object>}
   */
  delete () {
    return this.module.delete(this.id)
  }
}
