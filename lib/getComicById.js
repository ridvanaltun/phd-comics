"use strict";

const r = require("../utils/request");
const c = require("../constants");
const e = require("../exceptions");

/**
 * A promise for the comic.
 *
 * @promise Comic
 * @fulfill {Object} Comic.
 * @reject {NotFoundError} Throws when comic not found.
 */

/**
 * Fetch comic with given id.
 *
 * @returns {Comic} A promise for the comic.
 */
const getComicById = (id) => {
  return new Promise((resolve, reject) => {

    r(`${c.COMICS_DOWNLOAD_PATH}?comicid=${id}`, ($) => {
      const status = $.statusCode;

      if (status === 200) {
        const subtitle = $('body').find('table tr:nth-child(3) font').text().trim()
        resolve({
          id,
          image_url: $('body').find('img').attr('src'),
          publish_date: subtitle.substr(subtitle.length - 10),
          title: subtitle.split('"')[1],
          orginal_url: c.BASE_URL + c.COMICS_PATH + '?comicid=' + id
        });
      } else if(status === 404) {
        reject(new e.NotFoundError('Comic not found.'));
      } else {
        reject(new Error('An unknown error occurred.'));
      }
    });
  });
};

module.exports = getComicById;
