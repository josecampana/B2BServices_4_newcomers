//More info at https://bit.ly/b2b-service-next-config
module.exports = {
  logLevel: 'info',
  hosting: {
    basePath: 'test/api',
  },
  api: {
    basePath: 'https://dev.services.ifb.ingka.com',
    translation: 'translations',
    cats: 'cats',
  },
  translation: {
    tag: 'test',
  },
};
