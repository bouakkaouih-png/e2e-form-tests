import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

let form: FormPage;

Given('je suis sur le formulaire', async function () {
  form = new FormPage(this.page);
  await form.open();
});

When('je remplis le nom {string}', async function (nom) {
  await form.setNom(nom);
});

When('je remplis le prénom {string}', async function (prenom) {
  await form.setPrenom(prenom);
});

When('je sélectionne une ville', async function () {
  await form.selectVille();
});

When('je remplis l\'email {string}', async function (email) {
  await form.setEmail(email);
});

When('je clique sur envoyer', async function () {
  await form.submit();
});

Then('la popup de succès est affichée', async function () {
  expect(await form.isSuccessVisible()).toBeTruthy();
});

Then('un message d\'erreur est affiché', async function () {
  expect(await form.isErrorVisible()).toBeTruthy();
});