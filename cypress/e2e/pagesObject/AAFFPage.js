class AAFFPage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      code: () => cy.get("#codigoAAFF"),
      name: () => cy.get("#nombreAAFF"),
      modality: () => cy.get('[data-id="modalidadAAFF"]'),
      modalityDropdown: () => cy.get('[data-id="modalidadAAFF"]').siblings('.dropdown-menu').find('ul li'),
      hours: () => cy.get("#horasAAFF"),
    },

    buttons: {
      viewAll: () => cy.get('[title="Ver todo"]'),
      search: () => cy.get('[title="Buscar"]'),
      export: () => cy.get("#export"),
      newAF: () => cy.get('[name="boton-nueva-af"]'),
    },

    table: {
      list: () => cy.get("#listadoGrupos"),
      rows: () => cy.get("#listadoGrupos tr"),
    },
  };

  // FUNCTIONS

  isOnDB(code) {
    cy.visit('/acciones-formativas')
    cy.textfield(this.elements.form.code(), code)
    this.elements.buttons.search().click()
    this.elements.table.rows().should('contain', code)
  }

  isNotOnDB(code) {
    cy.visit('/acciones-formativas')
    cy.textfield(this.elements.form.code(), code)
    this.elements.buttons.search().click()
    this.elements.table.rows().should('not.contain', code)
  }
  
}

export default new AAFFPage();
