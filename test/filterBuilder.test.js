import { expect } from 'chai'
import { siFilter } from '../src/spaceInvoices'

describe('FilterBuilder Test', () => {
  it('filter eq', () => {
    let uri = siFilter()
      .where('test').eq(1)
      .buildUri('', true)

    let uriExpected = '?filter[where][test]=1'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter neq', () => {
    let uri = siFilter()
      .where('test').neq(2)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][neq]=2'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter gt', () => {
    let uri = siFilter()
      .where('test').gt(3)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][gt]=3'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter gte', () => {
    let uri = siFilter()
      .where('test').gte(4)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][gte]=4'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter lt', () => {
    let uri = siFilter()
      .where('test').lt(5)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][lt]=5'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter lte', () => {
    let uri = siFilter()
      .where('test').lte(6)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][lte]=6'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter between', () => {
    let uri = siFilter()
      .where('test').between(7, 77)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][between][0]=7&filter[where][test][between][1]=77'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter inq', () => {
    let uri = siFilter()
      .where('test').inq(8, 9, 10)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][inq][0]=8&filter[where][test][inq][1]=9&filter[where][test][inq][2]=10'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter nin', () => {
    let uri = siFilter()
      .where('test').nin(8, 9, 10)
      .buildUri('', true)

    let uriExpected = '?filter[where][test][nin][0]=8&filter[where][test][nin][1]=9&filter[where][test][nin][2]=10'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter near', () => {
    let uri = siFilter()
      .where('test').near('153.536,-28.1', 10, 'meters')
      .buildUri('', true)

    let uriExpected = '?filter[where][test][near]=153.536,-28.1&filter[where][test][maxDistance]=10&filter[where][test][unit]=meters'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter like', () => {
    let uri = siFilter()
      .where('test').like('test*')
      .buildUri('', true)

    let uriExpected = '?filter[where][test][like]=test*'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter not like', () => {
    let uri = siFilter()
      .where('test').nlike('test*')
      .buildUri('', true)

    let uriExpected = '?filter[where][test][nlike]=test*'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter regexp', () => {
    let uri = siFilter()
      .where('test').regexp('^2018')
      .buildUri('', true)

    let uriExpected = '?filter[where][test][regexp]=^2018'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter include', () => {
    let uri = siFilter()
      .include({ i1: { i2: 'i3' } })
      .buildUri('', true)

    let uriExpected = '?filter[include][i1][i2]=i3'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter fields', () => {
    let uri = siFilter()
      .fields('f1', 'f2', 'f3')
      .buildUri('', true)

    let uriExpected = '?filter[fields][f1]=true&filter[fields][f2]=true&filter[fields][f3]=true'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter order', () => {
    let uri = siFilter()
      .order('test1', 'DESC')
      .buildUri('', true)

    let uriExpected = '?filter[order][field]=test1&filter[order][sort]=DESC'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter limit', () => {
    let uri = siFilter()
      .limit(5)
      .buildUri('', true)

    let uriExpected = '?filter[limit]=5'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter skip', () => {
    let uri = siFilter()
      .skip(10)
      .buildUri('', true)

    let uriExpected = '?filter[skip]=10'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('filter deleted', () => {
    let uri = siFilter()
      .deleted()
      .buildUri('', true)

    let uriExpected = '?filter[deleted]=true'

    return expect(uri).to.be.equal(uriExpected)
  })

  it('long uri build', () => {
    let uri = siFilter()
      .where('test1').eq(1)
      .and('test2').neq(2)
      .and('test3').gt(3)
      .and('test4').gte(4)
      .and('test5').lt(5)
      .and('test6').lte(6)
      .and('test7').between(7, 77)
      .and('test8').inq(8)
      .and('test9').nin(9)
      .and('test10').near('153.536,-28.1', 10, 'meters')
      .include({ i1: { i2: 'i3' } })
      .fields('f1', 'f2', 'f3')
      .order('test1', 'DESC')
      .limit(5)
      .skip(10)
      .deleted()
      .buildUri('', true)

    let uriExpected = '?filter[where][and][0][test1]=1&filter[where][and][1][test2][neq]=2&filter[where][and][2][test3][gt]=3&filter[where][and][3][test4][gte]=4&filter[where][and][4][test5][lt]=5&filter[where][and][5][test6][lte]=6&filter[where][and][6][test7][between][0]=7&filter[where][and][6][test7][between][1]=77&filter[where][and][7][test8][inq][0]=8&filter[where][and][8][test9][nin][0]=9&filter[where][and][9][test10][near]=153.536,-28.1&filter[where][and][9][test10][maxDistance]=10&filter[where][and][9][test10][unit]=meters&filter[include][i1][i2]=i3&filter[fields][f1]=true&filter[fields][f2]=true&filter[fields][f3]=true&filter[limit]=5&filter[order][field]=test1&filter[order][sort]=DESC&filter[skip]=10&filter[deleted]=true'

    return expect(uri).to.be.equal(uriExpected)
  })
})
