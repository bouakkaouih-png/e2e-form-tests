Feature: Formulaire de destination

  Background:
    Given je suis sur le formulaire

  Scenario: Soumission réussie avec email
    When je remplis le nom "Dupont"
    And je remplis le prénom "Jean"
    And je sélectionne une ville
    And je remplis l'email "test@test.com"
    And je clique sur envoyer
    Then la popup de succès est affichée

  Scenario: Erreur si aucun moyen de contact
    When je remplis le nom "Dupont"
    And je remplis le prénom "Jean"
    And je clique sur envoyer
    Then un message d'erreur est affiché