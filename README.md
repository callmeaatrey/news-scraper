News Scraper
=========

Fast, lean implementation of a web scraper for gaining access to news from various news centers all around the world.

## Installation

  `npm install news-scraper --save`

## Usage

    var scraper = require('news-scraper');

    var formattedNum = scraper('techcrunch', ['link to a post', 'another link to a post']);


  Output should be `{'result': 'json object containing blog post'}`


## Contributors

In lieu of a formal style guide, take care to maintain the existing coding style. Lint and test your code.
