import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

class CustomWorld {
  browser!: Browser;
  page!: Page;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
  }
}

setWorldConstructor(CustomWorld);