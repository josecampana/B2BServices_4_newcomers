const { factory, queryHelper } = require('@b2b/fetch');
const { api } = require('../options');

const fetch = factory(api.cataas);
const { cataas: parser } = require('../parsers');

module.exports.list = async ({ tag, transactionId } = {}) => {
  const params = queryHelper({ tag });
  const url = `https://cataas.com/api/cats?${params}`;

  const options = { transactionId };

  return fetch(url, options).then(parser.list);
};
