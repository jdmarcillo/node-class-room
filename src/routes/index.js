const { countries, languages } = require('countries-list');

const routes = app => {
  app.get('/', (request, response) => {
    response.status(200).send('Hello world');
  });

  // Get the query params from get url
  app.get('/country', (request, response) => {
    const { query } = request;
    response.json(countries[query.code]);
  });

  // Get the params from get url
  app.get('/languages/:lang', (request, response) => {
    const { params } = request;
    response.json(languages[params.lang]);
  });

  app.get('*', (request, response) => {
    response.status(404).send('NOT FOUND');
  });
};

module.exports = routes;
