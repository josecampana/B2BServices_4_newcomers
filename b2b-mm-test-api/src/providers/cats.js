const { factory, queryHelper } = require('@b2b/fetch');
const { api } = require('../options');
const fetch = factory(api.cats);
const { cats: parser } = require('../parsers');

module.exports.get = async ({ transactionId, tag, limit } = {}) => {
  const params = queryHelper({ tag, limit });

  const url = `/v1/cats?${params}`;
  const options = { transactionId };

  return fetch(url, options).then(parser.get);
};



