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
import SpaceInvoices from "./spaceInvoices";
let spaceInvoices = new SpaceInvoices(${apiToken}, ${accountId});

spaceInvoices.organization.list().then(organizations => {
  console.log('organizations', organizations);
  let organization = organizations.pop();

  organization.listDocuments().then((documents) => {
    console.log('documents from organization', documents);
  })
}).catch((err) => {
  console.error("Error", err);
});
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