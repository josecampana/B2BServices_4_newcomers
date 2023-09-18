//More info at https://bit.ly/b2bservice-next-vs-controllers
const { sample } = require('../providers');

module.exports.get = async (req, res) => {
  const { retailUnit, language, sampleId } = req.b2bHelper();
  const result = await sample.get(sampleId, { retailUnit, language });

  return res.send(result);
};

module.exports.list = async (req, res) => {
  const { retailUnit, language } = req.b2bHelper();
  const result = await sample.list({ retailUnit, language });

  return res.send(result);
};
