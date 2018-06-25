const request = require('request');
const cheerio = require('cheerio');

// Товары с желтыми ценниками
const opt = {
    url: 'https://ikea-club.com.ua/%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D1%81-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%BC%D0%B8-%D1%86%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8',
}

request(opt, function (err, res, body) {
    if (err) throw err;
    // парсим DOM
    const $ = cheerio.load(res.body);

    const pagerUrl = (pageNumber) => `pageSize=24&viewMode=grid&orderBy=0&pageNumber=${pageNumber}`;
    let pagerCount = 0;
    const pagerList = $('.pager li').each((index, item) => {
      // if ($(item).hasClass('current-page') || $(item).hasClass('individual-page')) {
     if ($(item).hasClass('individual-page')) {
        pagerCount+=1;
        console.log('individual-page');
      }
    });
    console.log('pagerCount',pagerCount);



    // $('.block-category-navigation .textContainer a')

});
