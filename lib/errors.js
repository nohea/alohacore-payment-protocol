'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on alohacore-payment-protocol Module: {0}'
};

module.exports = require('alohacore-lib').errors.extend(spec);
