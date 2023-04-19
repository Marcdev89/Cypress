class ChatManagementPage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      code: () => cy.get("#codigo"),
      name: () => cy.get("#denominacion"),
    },

    buttons: {
      viewAll: () => cy.get('[title="Ver todo"]'),
      search: () => cy.get('[title="Buscar"]'),
      export: () => cy.get("#export"),
      newChat: () => cy.get('[name="boton-nuevo-chat"]'),
    },

    table: {
      body: () => cy.get("table > #listado-chats"),
      rows: () => cy.get("#listado-chats").find("[data-index]"),
      getRowByCode: (code) => cy.contains("td", code).parent(),
    },

    modal: {
      modal: () => cy.get("#modalExito .modal-content"),
      buttonAccept: () => this.elements.alerts.modal().find('button[title="Aceptar"]'),
    },
  };

  // FUNCTIONS
  search(code, name) {
    cy.textfield(this.elements.form.code(), code)
    cy.textfield(this.elements.form.name(), name)
    this.elements.buttons.search().click()
    this.elements.table.getRowByCode(code).should('exist')
  }
}

export default new ChatManagementPage();
