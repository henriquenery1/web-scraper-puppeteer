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

    const notebooksTitle = await page.$$eval('.thumbnail a', (el) =>
      el.map((elem) => elem.textContent),
    );
    let indexLenovoNotebooks = -1;
    for (let i = 0; i < notebooksTitle.length; i++) {
      if (notebooksTitle[i].includes('Lenovo')) {
        indexLenovoNotebooks = i;
      }
    }

    await browser.close();
    return notebooksTitle.length;
  }
}
