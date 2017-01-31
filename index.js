'use-strict';

/**
 * Scraper for gaining access to news from news centers all over the world
 * @param {string} [source] [news source name]
 * @param {url:string/array of links} [link] [link to be scraped]
 * @returns {object} [blog post in a json format]
 */

var request = require('request');
var cheerio = require('cheerio');
var async = require('async');

var sources = ['techcrunch'];

module.exports = function(source, link) {
	if (sources.indexOf(source) == -1)
		return {'body': 'sorry! support not available yet for the required source'};

	var scrape_map = {
		"techcrunch": techcrunch
	};

	scrape_map[source](link);
}

// scraper for techcrunch posts
function techcrunch(link) {
	// for handling incoming link array
	if (Array.isArray(link)) {
		async.map(link, function(url, callback) {
			request(url, function(err, res, html) {
				if(!err) {
					var $ = JSON.parse(html);
					callback(null, $);
				} else {
					callback(err || res.statusCode);
				}
			})
		}, function(err, result) {
			if(!err) {
				console.log(result);
			}
			else {
				// handle error here
			}
		});
	}
	// for handling incoming single link
	else {
		request(link, function(err, res, html) {
			if (!err) {
				var $ = cheerio.load(html);
				console.log($);
			}
		})
	}
}