'use strict';

var events = require('../models/events');

/**
 * Controller that renders our about page.
 */
function about (request, response) {
  var contextData = {events: events.all};
  response.render('about.html', contextData);
}

module.exports = {
  about: about
};