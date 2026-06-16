import * as path from 'path';
import { BasePage } from './BasePage';

export class FormPage extends BasePage {
  private nom = '#nom';
  private prenom = '#prenom';
  private ville = '#ville';
  private email = '#email';

  private submitButton = 'button[type="submit"]';
  private successModal = '#myModal';
  private errorModal = '#myModal';

  async open() {
    const filePath = path.resolve(process.cwd(), 'fixtures', 'ceWeekEnd.html');
    await this.goto(`file://${filePath}`);
  }

  async setNom(v: string) {
    await this.fill(this.nom, v);
  }

  async setPrenom(v: string) {
    await this.fill(this.prenom, v);
  }

  async selectVille() {
  await this.page.waitForFunction(() => {
    const select = document.querySelector('#ville');
    return select && select.children.length > 1;
  });

  await this.page.selectOption('#ville', { index: 1 });
}

  async setEmail(v: string) {
    await this.fill(this.email, v);
  }

  async submit() {
    await this.click(this.submitButton);
  }

  async isSuccessVisible() {
    return this.page.isVisible(this.successModal);
  }

  async isErrorVisible() {
    return this.page.isVisible(this.errorModal);
  }
}