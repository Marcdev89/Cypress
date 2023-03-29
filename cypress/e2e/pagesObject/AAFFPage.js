class AAFFPage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      code: () => cy.get("#codigoAAFF"),
      name: () => cy.get("#nombreAAFF"),
      modality: () => cy.get('[data-id="modalidadAAFF"]'),
      modalityDropdown: () => cy.get('[data-id="modalidadAAFF"]').siblings(".dropdown-menu").find("ul li"),
      hours: () => cy.get("#horasAAFF"),
    },

    buttons: {
      viewAll: () => cy.get('[title="Ver todo"]'),
      search: () => cy.get('[title="Buscar"]'),
      export: () => cy.get("#export"),
      newAF: () => cy.get('[name="boton-nueva-af"]'),
    },

    table: {
      body: () => cy.get("table > #listadoGrupos"),
      rows: () => cy.get("#listadoGrupos").find("[data-index]"),
    },

    alerts: {
      modalDelete: () => cy.get("#modalConfirmar > .modal-dialog > .modal-content"),
      modalDeleteYesButton: () => cy.get('[data-field="si"]'),
      modalDeleteNoButton: () => cy.get('[data-field="no"]'),
      modalAcceptButton: () => cy.get("#modalExito").find(".btn"),
      successfulDelete: () => cy.contains("#cuerpoModal", "Acción formativa eliminada correctamente"),
      shouldNotHaveGroupsAssigned: () => cy.contains("#cuerpoModal","La acción formativa no puede tener grupos asignados"),
    },
  };

  // FUNCTIONS
  isOnDB(code) {
    cy.visit("/acciones-formativas");
    cy.textfield(this.elements.form.code(), code);
    this.elements.buttons.search().click();
    this.elements.table.rows().should("contain", code);
  }

  isNotOnDB(code) {
    cy.visit("/acciones-formativas");
    cy.textfield(this.elements.form.code(), code);
    this.elements.buttons.search().click();
    this.elements.table.rows().should("not.contain", code);
  }

  getTableRows() {
    this.elements.buttons.viewAll().click();
    this.elements.table.rows().should("exist");
  }

  deleteRowByCode(code) {
    this.isOnDB(code);
    this.elements.table.body().contains("tr", code).then((tableRow) => {
        cy.wrap(tableRow).find('[title="Eliminar"]').click();
        this.elements.alerts.modalDeleteYesButton().click();
        this.elements.alerts.successfulDelete().should("exist");
        this.elements.alerts.modalAcceptButton().click({ force: true });
      });
  }

  deleteRowClickNo(code) {
    this.isOnDB(code);
    this.elements.table.body().contains("tr", code).then((tableRow) => {
        cy.wrap(tableRow).find('[title="Eliminar"]').click();
        this.elements.alerts.modalDeleteNoButton().click({ force: true });
        this.elements.alerts.successfulDelete().should("not.exist");
      });
  }

  deleteAFWithGroupAssigned(code) {
    this.isOnDB(code);
    this.elements.table.body().contains("tr", code).then((tableRow) => {
        cy.wrap(tableRow).find('[title="Eliminar"]').click();
        this.elements.alerts.shouldNotHaveGroupsAssigned().should("exist");
        this.elements.alerts.modalAcceptButton().click({ force: true });
      });
  }
}

export default new AAFFPage();
