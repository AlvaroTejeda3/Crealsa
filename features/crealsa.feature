Feature: Crealsa Website


   Scenario: As a user, I want to navigate in Crealsa

    Given access the page Crealsa
    When select the tab Conocenos
    And select the tab Servicios Financieros->Factoring
    And select the button Acceder
    And login with invalid user
    Then it is verified that the error message appears
