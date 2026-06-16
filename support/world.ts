import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

class CustomWorld {
  browser!: Browser;
  page!: Page;
  form!: FormPage;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
  }
}

setWorldConstructor(CustomWorld);