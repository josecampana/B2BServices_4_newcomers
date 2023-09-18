//More info at https://bit.ly/b2bservice-next-vs-controllers
const { cataas } = require('../providers');

module.exports.list = async (req, res) => {
  const { tag, transactionId } = req.b2bHelper();

  const result = await cataas.list({ tag, transactionId });

  return res.send(result);
};
