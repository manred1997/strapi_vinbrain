'use strict';

/**
 * hospital-name service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hospital-name.hospital-name');
