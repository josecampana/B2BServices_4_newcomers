const { UNKNOWN_OWNER } = require('../constants');

module.exports.catsImages = ([cats, images] = []) => {
  return cats.filter(cat => cat.owner !== UNKNOWN_OWNER).map(cat => ({ ...cat, imageUrl: images }));
};