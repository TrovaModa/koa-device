var thunkify      = require('thunkify'),
    expressDevice = thunkify(require('express-device').capture);

var koaDevice = module.exports = function() {
  return function* (next) {
    yield expressDevice(this.request, this.response);
    yield next;
  };
};
