# spaceinvoices-api-client

### Instalation

```
yarn
```
OR
```
npm i
```

### Usage

Include module
```javascript
import SpaceInvoices from "./spaceInvoices";
let spaceInvoices = new SpaceInvoices(${host}, ${accountId}, ${apiToken});

// List Organizations
spaceInvoices.organization.list().then(organizations => {
  console.log("organizations", organizations);
}).catch((err) => {
  console.error("ERROR", err);
});
```

### Test

```
yarn run test
```
OR
```
npm run test
```