const { SUCCESS, ERROR } = require('./message');

const successResponseHelper = (res, data, errorCode, message) => {
  return res.status(errorCode || 200).send({
    data: data || [],
    message: message || SUCCESS.success
  })
};

const errorResponseHelper = (res, errorCode, message) => {
  return res.status(errorCode || 500).send({
    message: message || ERROR.error
  })
};

module.exports = { successResponseHelper, errorResponseHelper };
