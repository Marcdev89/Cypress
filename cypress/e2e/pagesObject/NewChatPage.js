class NewChatPage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      code: () => cy.get('[name="codigoChat"]'),
      name: () => cy.get('[name="nombreChat"]'),
    },

    buttons: {
      save: () => cy.get("#guardar"),
      cancel: () => cy.get('[name="boton-cancelar"]'),
    },

    alerts: {
      modal: () => cy.get("#modalExito .modal-content"),
      buttonAccept: () => this.elements.alerts.modal().find('button[title="Aceptar"]'),
    },
  };

  createNewChat(code, name) {
    cy.textfield(this.elements.form.code(), code);
    cy.textfield(this.elements.form.name(), name);
    this.elements.buttons.save().click();
    this.elements.alerts.modal().contains("Chat creado correctamente").should("exist");
    this.elements.alerts.buttonAccept().click();
  }

  createNewChatWithoutAnyFields() {
    this.elements.buttons.save().click();
    cy.contains('.snackbar-alert', 'Debe introducir un nombre para el chat').should('be.visible')
  }

  createNewChatWithoutCode(name) {
    cy.textfield(this.elements.form.name(), name);
    this.elements.buttons.save().click();
    cy.contains('.snackbar-alert', 'Debe introducir un código para el chat').should('be.visible')
  }

  createNewChatWithoutName(code) {
    cy.textfield(this.elements.form.code(), code);
    this.elements.buttons.save().click();
    cy.contains('.snackbar-alert', 'Debe introducir un nombre para el chat').should('be.visible')
  }
}

export default new NewChatPage();
