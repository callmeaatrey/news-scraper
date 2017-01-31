News Scraper
=========
[![NPM](https://nodei.co/npm/news-scraper.png)](https://npmjs.org/package/news-scraper)

Fast, lean implementation of a web scraper for gaining access to news from various news centers all around the world.

Starting out with TechCrunch. Believe me, I am just getting started.

## Installation

  `npm install news-scraper --save`

## Usage

    var scraper = require('news-scraper');

    scraper('source_website', 'link to a post/ array of posts', function(res) {
    	// res contains the resulting post
		// callback function to be implemented here
    });


  Format of the output should be `{'url': 'url to be scraped', 'post': 'blog post content'}`

## Example

	scraper('techcrunch', 'http://social.techcrunch.com/2017/01/31/ycaclu/', function(res) {
		console.log(res);
	});

	Output returned from the scraper is:
		{
			url: 'http://social.techcrunch.com/2017/01/31/ycaclu/',
    		post: '"The American Civil Liberties Union will learn how to turn the $24 million it raised over the weekend
    		into growth and progress with help from top Silicon Valley startup accelerator Y Combinator.
    		The ACLU will be part of the winter batch of companies in YC, where it will receive mentorship, a network
    		of powerful connections in tech and a chance to present itself to investors on Demo Day.Y Combinator will
    		also provide some funding, though it won’t take an equity stake in ACLU because it’s a nonprofit.
    		ACLU will not pay to participate.After fighting to secure a stay of the executive order signed by
    		President Trump barring entry to the country for people from seven Muslim countries, the public rewarded the
    		ACLU’s vigilance with a windfall..........
    	}

   The output displayed above is just a snippet of the complete one. It's just to give you a gist of the whole module.


## Contributors

In lieu of a formal style guide, take care to maintain the existing coding style. Lint and test your code.
