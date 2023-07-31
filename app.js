import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const query = "4080";

  await page.goto(`https://pcpartpicker.com/search/?q=${query}`);

  await page.setViewport({ width: 1920, height: 1080 });

  const searchResult = await page.evaluate(() => {
    return document.documentElement.outerHTML;
  });

  const results = await page.$$(".list-unstyled");
  console.log(results[0]);
  // console.log(results);

  // await fs.writeFile(`./test.html`, searchResult, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
})();
