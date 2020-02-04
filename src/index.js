// Third party modules
const express = require('express');
// Local modules
const routes = require('./routes/index');

const app = express();
routes(app);

app.listen(4000, () => {
  console.log('running on port 4000');
});
