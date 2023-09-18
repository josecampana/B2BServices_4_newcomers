//More info at https://bit.ly/b2bservice-next-vs-controllers
module.exports['v1.pets.cats'] = require('./cats').list;
module.exports['v1.pets'] = require('./pets').list;
