# spaceinvoices-api-client

[![Build Status](https://travis-ci.org/ronzyfonzy/spaceinvoices-api-client.svg?branch=master)](https://travis-ci.org/ronzyfonzy/spaceinvoices-api-client)
[![codecov](https://codecov.io/gh/ronzyfonzy/spaceinvoices-api-client/branch/master/graph/badge.svg)](https://codecov.io/gh/ronzyfonzy/spaceinvoices-api-client)
[![Dependency Status](https://david-dm.org/ronzyfonzy/spaceinvoices-api-client.svg)](https://codecov.io/gh/ronzyfonzy/spaceinvoices-api-client)

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