import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

Given('je suis sur le formulaire', async function () {
  this.form = new FormPage(this.page);
  await this.form.open();
});

When('je remplis le nom {string}', async function (nom) {
  await this.form.setNom(nom);
});

When('je remplis le prénom {string}', async function (prenom) {
  await this.form.setPrenom(prenom);
});

When('je sélectionne une ville', async function () {
  await this.form.selectVille();
});

When('je remplis l\'email {string}', async function (email) {
  await this.form.setEmail(email);
});

When('je clique sur envoyer', async function () {
  await this.form.submit();
});

Then('la popup de succès est affichée', async function () {
  expect(await this.form.isSuccessVisible()).toBeTruthy();
});

Then('un message d\'erreur est affiché', async function () {
  expect(await this.form.isErrorVisible()).toBeTruthy();
});