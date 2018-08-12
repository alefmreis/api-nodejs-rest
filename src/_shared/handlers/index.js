const onError = require('./errorRequest.handler');
const onSuccess = require('./successRequest.handler');
const onBadRequest = require('./badRequest.handler.js');
const onCreated = require('./createdRequest');
const noContent = require('./noContentRequest.js');

module.exports = { onError, onBadRequest, onSuccess, onCreated, noContent };
