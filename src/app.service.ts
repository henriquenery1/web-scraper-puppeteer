import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  public url: string =
    'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

  async getAmountNotebooks(): Promise<number> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(this.url);

    await page.waitForSelector('.thumbnail');

    const notebooksTitle = await page.$$eval(".thumbnail a", (el) =>
    el.map((elem) => elem.textContent)
  );

    await browser.close();
    return notebooksTitle.length;
  }
}
