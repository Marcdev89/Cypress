import userData from '../../fixtures/userData.json';

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
      profileSelect: () => cy.get('[data-id="perfiles"]').siblings(".dropdown-menu").find("ul li"),
      email: () => cy.get("#email"),
      documentType: () => cy.get('[data-id="tipoDocumento"]'),
      documentTypeSelect: () => cy.get('[data-id="tipoDocumento"]').siblings(".dropdown-menu").find("ul li"),
      documentNumber: () => cy.get("#numeroDocumento"),
      dateRegistrationFrom: () => cy.get("#fechaAltaDesde"),
      dateRegistrationTo: () => cy.get("#fechaAltaHasta"),
      dateResignFrom: () => cy.get("#fechaBajaDesde"),
      dateResignTo: () => cy.get("#fechaBajaHasta"),
      marca: () => cy.get('[data-id="marcas"]'),
      marcaSelect: () => cy.get('[data-id="marcas"]').siblings(".dropdown-menu").find("ul li")
    },

    buttons: {
      buttonViewAll: () => cy.get('[title="Ver todo"]'),
      buttonSearch: () => cy.get('[title="Buscar"]'),
      buttonExport: () => cy.get("#export"),
      buttonNewUser: () => cy.get('[name="boton-nuevo-usuario"]'),
    },

    usersTable: {
      body: () => cy.get("table > #listadoUsuarios"),
      rows: () => cy.get("#listadoUsuarios").find("[data-index]"),
      getRowByUsername: (username) => cy.get("#listadoUsuarios").contains('td', username).parent(),
      // Positions of fields in the row, use .eq() to get them
      posUser: 0,
      posEmail: 1,
      posName: 2,
      posProfile: 3,
      posDocument: 4,
      posRegistrationDate: 5,
      posMarca: 6,
      posActions: 7,
    },
  };

  // FUNCTIONS
  viewAllUsers() {
    this.elements.buttons.buttonViewAll().click();
  }

  searchUserByName(name) {
    cy.textfield(this.elements.form.name(), name)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posName).should("contain", name);
    this.elements.form.name().clear();
  }

  searchUserByFirstSurname(surname) {
    cy.textfield(this.elements.form.firstSurname(), surname)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posName).should("contain", surname);
    this.elements.form.firstSurname().clear();
  }

  searchUserBySecondSurname(secondSurname) {
    cy.textfield(this.elements.form.secondSurname(), secondSurname)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posName).should("contain", secondSurname);
    this.elements.form.secondSurname().clear();
  }

  searchUserByUsername(username) {
    cy.textfield(this.elements.form.username(), username)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posUser).should("contain", username);
    this.elements.form.username().clear();
  }

  searchUserByProfile(profile) {
    cy.pickOnSelectByValue(this.elements.form.profile(), this.elements.form.profileSelect(), profile);
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posProfile).should("contain", profile);
    cy.pickOnSelect(this.elements.form.profile(), this.elements.form.profileSelect(), 0)
  }

  searchUserByEmail(email) {
    cy.textfield(this.elements.form.email(), email)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posEmail).should("contain", email);
    this.elements.form.email().clear();
  }

  searchUserByDocumentType(documentType) {
    cy.pickOnSelectByValue(this.elements.form.documentType(), this.elements.form.documentTypeSelect(), documentType);
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posDocument).should("contain", documentType);
    cy.pickOnSelect(this.elements.form.documentType(), this.elements.form.documentTypeSelect(), 0)
  }

  searchUserByDocumentNumber(documentNumber) {
    cy.textfield(this.elements.form.documentNumber(), documentNumber)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posDocument).should("contain", documentNumber);
    this.elements.form.documentNumber().clear();
  }

  searchUserByRegistrationDate(dateFrom, dateTo, formattedDate) {
    cy.textfield(this.elements.form.dateRegistrationFrom(), dateFrom)
    cy.textfield(this.elements.form.dateRegistrationTo(), dateTo)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posRegistrationDate).should("contain", formattedDate);
    this.elements.form.dateRegistrationFrom().clear();
    this.elements.form.dateRegistrationTo().clear();
  }

  searchByResignedDate(dateFrom, dateTo) {
    cy.textfield(this.elements.form.dateResignFrom(), dateFrom)
    cy.textfield(this.elements.form.dateResignTo(), dateTo)
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.rows().should("not.exist");
    this.elements.form.dateResignFrom().clear();
    this.elements.form.dateResignTo().clear();
  }

  searchUserByMarca(marca) {
    cy.pickOnSelectByValue(this.elements.form.marca(), this.elements.form.marcaSelect(), marca);
    this.elements.buttons.buttonSearch().click();
    this.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(this.elements.usersTable.posMarca).should("contain", marca);
    cy.pickOnSelect(this.elements.form.marca(), this.elements.form.marcaSelect(), 0)
  }

  searchUserWithAllInputs() {
    cy.textfield(this.elements.form.name(), userData.user1.name)
    cy.textfield(this.elements.form.firstSurname(), userData.user1.firstSurname)
    cy.textfield(this.elements.form.secondSurname(), userData.user1.secondSurname)
    cy.textfield(this.elements.form.username(), userData.user1.username)
    cy.pickOnSelectByValue(this.elements.form.profile(), this.elements.form.profileSelect(), userData.user1.profile);
    cy.textfield(this.elements.form.email(), userData.user1.email)
    cy.pickOnSelectByValue(this.elements.form.documentType(), this.elements.form.documentTypeSelect(), userData.user1.documentType);
    cy.textfield(this.elements.form.documentNumber(), userData.user1.documentNumber)
    cy.textfield(this.elements.form.dateRegistrationFrom(), userData.user1.registrationDate)
    cy.textfield(this.elements.form.dateRegistrationTo(), userData.user1.registrationDate)
    cy.pickOnSelectByValue(this.elements.form.marca(), this.elements.form.marcaSelect(), userData.user1.marca);
    this.elements.buttons.buttonSearch().click();    
  }

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
