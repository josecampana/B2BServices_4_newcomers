//More info at https://bit.ly/b2bservice-next
const service = require('@b2b/service-next')();

service.extraServices = ['health', 'translation'];
service.start();
