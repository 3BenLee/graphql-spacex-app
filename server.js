const express = require('express');
const graphQLHTTP = require('express-graphQL');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


