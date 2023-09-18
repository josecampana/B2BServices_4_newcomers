const { cats, images } = require('../providers');
const { join } = require('../parsers');

module.exports.list = async (req, res) => {
  const { tag, transactionId } = req.b2bHelper();

  const result = await Promise.all([cats.get({ tag, transactionId }), images.get({ transactionId })]).then(join.catsImages);

  return res.send(result);
};