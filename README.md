# spaceinvoices-api-client

[![Build Status](https://travis-ci.org/ronzyfonzy/spaceinvoices-api-client.svg?branch=master)](https://travis-ci.org/ronzyfonzy/spaceinvoices-api-client)
[![codecov](https://codecov.io/gh/ronzyfonzy/spaceinvoices-api-client/branch/master/graph/badge.svg)](https://codecov.io/gh/ronzyfonzy/spaceinvoices-api-client)
[![dependencies Status](https://david-dm.org/ronzyfonzy/spaceinvoices-api-client/status.svg)](https://david-dm.org/ronzyfonzy/spaceinvoices-api-client)
[![devDependencies Status](https://david-dm.org/ronzyfonzy/spaceinvoices-api-client/dev-status.svg)](https://david-dm.org/ronzyfonzy/spaceinvoices-api-client?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Instalation

```
yarn
```

### Usage

Include module
```javascript
import dotenv from 'dotenv'
import { SpaceInvoices, siFilter } from './src/spaceInvoices'

dotenv.config()

let spaceInvoices = new SpaceInvoices(process.env.API_TOKEN)

spaceInvoices.account.authenticate(process.env.TEST_EMAIL, process.env.TEST_PASSWORD).then(account => {
  console.log('account', account)

  // Example 1: List All Organizations
  account.listOrganizations().then(organizations => {
    console.log('allOrganizations', organizations.length)
    let organization = organizations.pop()

    if (organization) {
      organization.listDocuments().then((documents) => {
        console.log('documents from organization', documents)
      })
    }
  })

  // Example 1: List Filtered Organizations

  let filter = siFilter()
    .where('locale').eq('en')
    .and('supportPin').gte(10000)

  account.listOrganizations(filter).then(organizations => {
    console.log('filteredOrganizations', organizations.length)
  })
}).catch((error) => {
  console.error('Error', error)
})
```

### Compile

```
yarn compile
```

### Test

```
yarn test
```

## License

MIT © [Robert Tajnšek](https://github.com/ronzyfonzy)