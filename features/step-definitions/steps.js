const { Given, When, Then } = require('@wdio/cucumber-framework');


const Crealsa = require('../pageobjects/crealsa.page');


//-----STEPS-------------------------------------------------
Given(/^access the page Crealsa$/, async () => {
    await Crealsa.go_to_page();
});

When(/^select the tab Conocenos$/, async () => {
    await Crealsa.select_conocenos();
});

When(/^select the tab Servicios Financieros->Factoring$/, async () => {
    await Crealsa.select_servicios_financieros();
    await Crealsa.select_factoring();
});

When(/^select the button Acceder$/, async () => {
    await Crealsa.select_acceder();
});

When(/^login with invalid user$/, async () => {
    await Crealsa.login('Alvaro Tejeda', 'No tengo usuario')
});

Then(/^it is verified that the error message appears$/, async () => {
    await Crealsa.error_message_exits()
});



