'use strict';

const cheerio = require('cheerio');
const axios = require('axios');
const c = require('../constants');

module.exports = (endpoint, callback) => {
  const options = {
    method: 'get',
    url: encodeURI(c.BASE_URL + endpoint),
    transformResponse: (body) => {
      return cheerio.load(body, {
        normalizeWhitespace: true,
        xmlMode: true,
      });
    },
  };

  axios(options)
      .then((res) => {
        const {data} = res;
        data.statusCode = res.status;
        callback(data);
      })
      .catch((err) => {
        const {data} = err.response;
        data.statusCode = err.response.status;
        callback(data);
      });
};
