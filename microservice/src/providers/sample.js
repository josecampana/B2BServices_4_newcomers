const { factory } = require('@b2b/fetch');
const { api } = require('../options');
const fetch = factory(api.sample);
const { sample: parser } = require('../parsers');

module.exports.get = async (id, _options = {}) => {
  const url = `/cats?tag=${id}`;

  return fetch(url).then(parser.get);
};

module.exports.list = async (_options = {}) => {
  const url = '/tags';

  return fetch(url).then(parser.list);
};
