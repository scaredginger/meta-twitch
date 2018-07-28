const fetch = require('node-fetch');
const safeEval = require('safe-eval');

/*
const pages = [
  'https://socialblade.com/youtube/top/category/autos/mostsubscribed',
  'https://socialblade.com/youtube/top/category/autos/mostsubscribed',
  'https://socialblade.com/youtube/top/category/comedy/mostsubscribed',
  'https://socialblade.com/youtube/top/category/education/mostsubscribed',
  'https://socialblade.com/youtube/top/category/entertainment/mostsubscribed',
  'https://socialblade.com/youtube/top/category/film/mostsubscribed',
  'https://socialblade.com/youtube/top/category/games/mostsubscribed',
  'https://socialblade.com/youtube/top/category/tech/mostsubscribed',
  'https://socialblade.com/youtube/top/category/shows/mostsubscribed',
];
*/

const pages = [
  'https://socialblade.com/youtube/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw/monthly'
];

const re = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9],[0-9]+/;

function extract(text) {
  text = text.split('\n');
  for (let line of text) {
    if (re.test(line)) {
      // console.log(line.slice(0, line.length - 4));
      const csv = safeEval(line.slice(0, line.length - 4));
      const rows = csv.split('\n');
      let table = '';
      if (rows[0].includes('Daily Subs')) {
        table = 'dailySubs';
      } else if (rows[0].includes('Total Subs')) {
        table = 'totalSubs';
      } else if (rows[0].includes('Daily Views')) {
        table = 'dailyViews';
      } else if (rows[0].includes('Total Views')) {
        table = 'totalViews';
      } else if (rows[0].includes('Average Views')) {
        table = 'averageViews';
      } else if (rows[0].includes('Monthly Views')) {
        table = 'monthlyViews';
      }
      for (let row of rows.slice(1, rows.length)) {
        if (!row) {
          continue;
	}
        const [date, value] = row.split(',');
        console.log(table, date, value);
      }
    }
  }
}

for (let page of pages) {
  fetch(page)
    .then(res => res.text())
    .then(extract)
}
