import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  public url: string =
    'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

  async getAmountNotebooks(): Promise<any > {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(this.url);

    await page.waitForSelector('.thumbnail');

    const informationNotebooks = await page.$$eval('.thumbnail', (el) =>
      el.map((elem) => elem.innerHTML),
    );

    const notebooksTitle = await page.$$eval('.thumbnail a', (el) =>
      el.map((elem) => elem.textContent),
    );
    let indexLenovoNotebooks = -1;
    let allInformationLenovoNotebooks: Array<string> = []
    for (let i = 0; i < notebooksTitle.length; i++) {
      if (notebooksTitle[i].includes('Lenovo')) {
        allInformationLenovoNotebooks.push(notebooksTitle[i]);
      }
    }

    await browser.close();
    return allInformationLenovoNotebooks;
  }
}
