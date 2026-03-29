import p from 'puppeteer';
(async () => {
  const b = await p.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await b.newPage();
  const search = process.argv[2];
  await page.goto("https://unsplash.com/s/photos/" + search);
  await page.waitForSelector('img[src*="images.unsplash.com/photo"]', {timeout: 5000});
  const urls = await page.evaluate(() => Array.from(document.querySelectorAll('img[src*="images.unsplash.com/photo"]')).map(img => img.src).slice(0, 5));
  console.log(urls.join("\n"));
  await b.close();
})();
