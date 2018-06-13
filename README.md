# spaceinvoices-js-sdk

[![Build Status](https://travis-ci.org/ronzyfonzy/spaceinvoices-js-sdk.svg?branch=master)](https://travis-ci.org/ronzyfonzy/spaceinvoices-js-sdk)
[![codecov](https://codecov.io/gh/ronzyfonzy/spaceinvoices-js-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/ronzyfonzy/spaceinvoices-js-sdk)
[![dependencies Status](https://david-dm.org/ronzyfonzy/spaceinvoices-js-sdk/status.svg)](https://david-dm.org/ronzyfonzy/spaceinvoices-js-sdk)
[![devDependencies Status](https://david-dm.org/ronzyfonzy/spaceinvoices-js-sdk/dev-status.svg)](https://david-dm.org/ronzyfonzy/spaceinvoices-js-sdk?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Instalation

```
yarn
```

### Usage

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

  // Example 2: List Filtered Organizations

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

### Contribution guide

#### Developing spaceinvoices-js-sdk

You consider contributing changes to spaceinvoices-js-sdk – thank you! Please consider these guidelines when filing a pull request:

*  Project uses [standard](https://standardjs.com/) JavaScript style guide, linter, and formatter. Use it and save yourselve some time
*  Commits follow the [Angular commit convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). The project uses [commitizen](http://commitizen.github.io/cz-cli/) library
*  JavaScript is written using ES6 features
*  Features and bug fixes should be covered by test cases

## License

MIT © [Robert Tajnšek](https://github.com/ronzyfonzy)