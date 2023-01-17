import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  async allInformationNotebooksLenovo(): Promise<any> {
    const url: string =
      'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.thumbnail');

    const informationNotebooks = await page.$$eval('.thumbnail', (el) =>
      el.map((elem) => elem.innerHTML),
    );
    const notebooksTitle = await page.$$eval('.thumbnail a', (el) =>
      el.map((elem) => elem.textContent),
    );
    const prices = await page.$$eval('.price', (el) =>
      el.map((elem) => elem.textContent),
    );
    const descriptions = await page.$$eval('.description', (el) =>
      el.map((elem) => elem.textContent),
    );
    const rights = await page.$$eval('.pull-right', (el) =>
      el.map((elem) => elem.textContent),
    );

    let informationsLenovoNotebooks = [];
    for (let i = 0; i < notebooksTitle.length; i++) {
      if (notebooksTitle[i].includes('Lenovo')) {
        let notebookLenovo = {
            title: notebooksTitle[i],
            price: prices[i],
            description: descriptions[i],
            right: rights[i],
        };
        informationsLenovoNotebooks.push(notebookLenovo);
      }
    }

    await browser.close();
    return informationsLenovoNotebooks;
  }
}
