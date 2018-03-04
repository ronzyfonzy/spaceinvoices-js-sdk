# spaceinvoices-api-client

### Instalation

```
yarn
```

### Usage

Include module
```javascript
import SpaceInvoices from "./spaceInvoices";
let spaceInvoices = new SpaceInvoices(${accountId}, ${apiToken});

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

### Test

```
yarn run test
```