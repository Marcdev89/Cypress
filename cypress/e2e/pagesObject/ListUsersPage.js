class ListUsersPage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      name: () => cy.get("#nombre"),
      firstSurname: () => cy.get("#apellido1"),
      secondSurname: () => cy.get("#apellido2"),
      username: () => cy.get("#nombreUsuario"),
      profile: () => cy.get('[data-id="perfiles"]'),
      email: () => cy.get("#email"),
      documentType: () => cy.get('[data-id="tipoDocumento"]'),
      documentNumber: () => cy.get("#numeroDocumento"),
      calendarStartFrom: () => cy.get("#fechaAltaDesde"),
      calendarStartTo: () => cy.get("#fechaAltaHasta"),
      calendarFinishFrom: () => cy.get("#fechaBajaDesde"),
      calendarioFinishTo: () => cy.get("#fechaBajaHasta"),
      marca: () => cy.get('[data-id="marcas"]'),
    },

    buttons: {
      buttonViewAll: () => cy.get('[title="Ver todo"]'),
      buttonSearch: () => cy.get('[title="Buscar"]'),
      buttonExport: () => cy.get("#export"),
      buttonNewUser: () => cy.get('[name="boton-nuevo-usuario"]'),
    },

    usersTable: {
      list: () => cy.get("#listadoUsuarios"),
      rows: () => cy.get("#listadoUsuarios tr"),
    },
  };

  // FUNCTIONS

  exportAllUsers() {
    this.elements.buttons.buttonViewAll().click();
    this.elements.buttons.buttonExport().click();
  }

  formatDownloadFileName(file, fileExtension) {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth returns 0 to 11
    const day = date.getDate();

    // assign a leading 0 to the month
    if (month < 10) {
      month = "0" + month;
    }
  
    return file + year + month + day + fileExtension;
  }
}

export default new ListUsersPage();
