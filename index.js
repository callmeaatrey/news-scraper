'use-strict';

/**
 * Scraper for gaining access to news from news centers all over the world
 * @param {string} [source] [news source name]
 * @param {url:string} [link] [link to be scraped]
 * @returns {object} [blog post in a json format]
 */

var request = require('request');
var cheerio = require('cheerio');

var sources = ['techcrunch'];

module.exports = function(source, link) {
	if (sources.indexOf(source)) == -1
		return {'body': 'sorry! support not available yet for the required source'};

	var scrape_map = {
		"techcrunch": techcrunch
	};

	scrape_map[source](link);
}

// scraper for techcrunch posts
function techcrunch(link) {
	request(link, function(err, res, html) {
		if (!err) {
			var $ = cheerio.load(html);
			console.log($);
		}
	})
}