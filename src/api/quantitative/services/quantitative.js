'use strict';

/**
 * quantitative service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quantitative.quantitative');
