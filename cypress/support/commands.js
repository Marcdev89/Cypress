// Types on a textfield
Cypress.Commands.add("textfield", (field, newtext) => {
  field.clear().type(newtext);
});

// Pick choice on a select by position
Cypress.Commands.add("pickOnSelect", (locatorSelect, locatorOptions, itemPosition) => {
    locatorSelect.click({force: true});
    locatorOptions.eq(itemPosition).trigger('click');
  }
);

// Pick choice on a select by value
Cypress.Commands.add("pickOnSelectByValue", (locatorSelect, locatorOptions, value) => {
    locatorSelect.click({force: true});
    locatorOptions.contains(value).trigger('click');
  }
);

// Gets iframe body
Cypress.Commands.add("getIframeBody", (locator) => {
  return cy.get(locator).its('0.contentDocument.body').should('be.visible');
});

// Types on iframe body
Cypress.Commands.add("typeOnIframe", (locator, text) => {
  locator
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap)
    .clear()
    .type(text);
});

Cypress.Commands.add("alertAssert", (text) => {
  cy.get(".snackbar-alert").should("have.text", text);
});