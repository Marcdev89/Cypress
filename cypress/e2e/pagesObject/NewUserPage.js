import userData from "../../fixtures/newUserData.json";

class NewUserPage {
  // LOCATORS
  elements = {
    buttons: {
      save: () => cy.get("#guardar"),
      cancel: () => cy.get('[name="boton-cancelar"]'),
    },

    alerts: {
      modal: () => cy.get('#modalExito .modal-content'),
      buttonAccept: () => this.elements.alerts.modal().find('button[title="Aceptar"]'),
    },

    form: {
      name: () => cy.get("#nombre"),
      firstSurname: () => cy.get("#apellido1"),
      secondSurname: () => cy.get("#apellido2"),
      attachPhoto: () => cy.get("#t_foto").find("input"),
      removeAttachedCV: () => cy.get("#t_foto").find('[title="Eliminar"]'),
      language: () => cy.get('[data-id="idiomas"]'),
      languageSelect: () => this.elements.form.language().siblings(".dropdown-menu").find("ul > li"),
      gender: () => cy.get('[data-id="sexo"]'),
      genderSelect: () => this.elements.form.gender().siblings(".dropdown-menu").find("ul > li"),
      username: () => cy.get("#nombreUsuario"),
      password: () => cy.get("#contrasena"),
      marca: () => cy.get('[data-id="marcas"]'),
      marcaSelect: () => this.elements.form.marca().siblings(".dropdown-menu").find("ul > li"),
      profile: () => cy.get('[data-id="profileSelect"]'),
      profileSelect: () => this.elements.form.profile().siblings(".dropdown-menu").find("ul > li"),
      checkboxDontDisplayContact: () => cy.get("#checkbox1"),
      checkboxReceivePendingIssues: () => cy.get("#checkbox2"),
      textBox: () => cy.get("#observacionesNuevoUsuario_ifr"),

      admin: {
        email: () => cy.get("#ad_email"),
        documentType: () => cy.get('[data-id="ad_tipoDocumentos"]'),
        documentTypeSelect: () => this.elements.form.admin.documentType().siblings(".dropdown-menu").find("ul > li"),
        documentNumber: () => cy.get("#ad_idDocumento"),
        extensionDays: () => cy.get("#ad_diasProrroga"),
      },

      tutor: {
        email: () => cy.get("#t_email"),
        documentType: () => cy.get('[data-id="t_tipoDocumentos"]'),
        documentTypeSelect: () => this.elements.form.tutor.documentType().siblings(".dropdown-menu").find("ul > li"),
        documentNumber: () => cy.get("#t_idDocumento"),
        extensionDays: () => cy.get("#t_diasProrroga"),
        phone: () => cy.get("#t_telefono"),
        teachingCompetence: () => cy.get('[data-id="competenciaDocente"]'),
        teachingCompetenceSelect: () => this.elements.form.tutor.teachingCompetence().siblings(".dropdown-menu").find("ul > li"),
        contractType: () => cy.get('[data-id="t_situacionContractual"]'),
        contractTypeSelect: () => this.elements.form.tutor.contractType().siblings(".dropdown-menu").find("ul > li"),
        teletrainingExperience: () => cy.get("#t_experienciaModalidadTeleformacion"),
        teletrainingModality: () => cy.get('[data-id="t_formacionModalidadTeleformacion"]'),
        teletrainingModalitySelect: () => this.elements.form.tutor.teletrainingModality().siblings(".dropdown-menu").find("ul > li"),
        birthDate: () => cy.get("#t_fechaNacimiento"),
        attachCV: () => cy.get("#t_adjuntarCV").find("input"),
        removeAttachedCV: () => cy.get("#t_adjuntarCV").find('[title="Eliminar"]'),
      },

      alumno: {
        email: () => cy.get("#al_email"),
        documentType: () => cy.get('[data-id="al_tipoDocumentos"]'),
        documentTypeSelect: () => this.elements.form.alumno.documentType().siblings(".dropdown-menu").find("ul > li"),
        documentNumber: () => cy.get("#al_idDocumento"),
        country: () => cy.get('[data-id="paises"]'),
        countrySelect: () => this.elements.form.alumno.country().siblings(".dropdown-menu").find("ul > li"),
        province: () => cy.get('[data-id="provincias"]'),
        provinceSelect: () => this.elements.form.alumno.province().siblings(".dropdown-menu").find("ul > li"),
        township: () => cy.get('[data-id="municipios"]'),
        townshipSelect: () => this.elements.form.alumno.township().siblings(".dropdown-menu").find("ul > li"),
        postalCode: () => cy.get("#al_codigoPostal"),
        roadType: () => cy.get('[data-id="tipoVias"]'),
        roadTypeSelect: () => this.elements.form.alumno.roadType().siblings(".dropdown-menu").find("ul > li"),
        address: () => cy.get("#al_direccion"),
        education: () => cy.get('[data-id="nivelFormativo"]'),
        educationSelect: () => this.elements.form.alumno.education().siblings(".dropdown-menu").find("ul > li"),
        phone: () => cy.get("#al_telefono"),
        employmentStatus: () => cy.get('[data-id="situacionLaboral"]'),
        employmentStatusSelect: () => this.elements.form.alumno.employmentStatus().siblings(".dropdown-menu").find("ul > li"),
        CIF: () => cy.get("#cif"),
        company: () => cy.get("#empresa"),
        job: () => cy.get("#al_puesto"),
        extensionDays: () => cy.get("#al_diasProrroga"),
        birthDate: () => cy.get("#al_fechaNacimiento"),
      },

      auditor: {
        email: () => cy.get("#au_email"),
        documentType: () => cy.get('[data-id="au_tipoDocumentos"]'),
        documentTypeSelect: () => this.elements.form.auditor.documentType().siblings(".dropdown-menu").find("ul > li"),
        documentNumber: () => cy.get("#au_idDocumento"),
        extensionDays: () => cy.get("#au_diasProrroga"),
        checkboxIsCertified: () => cy.get("#checkbox4"),
      },
    },
  };

  // FUNCTIONS
  assertSuccesful() {
    this.elements.alerts.modal().should('contain', 'Usuario guardado correctamente')
    this.elements.alerts.buttonAccept().click()
  }

  assertAlreadyRegisteredEmail() {
    this.elements.alerts.modal().should('contain', 'Ya existe un usuario con el mismo email en la aplicación')
    this.elements.alerts.buttonAccept().click()
  }

  assertAlreadyRegisteredUsername() {
    this.elements.alerts.modal().should('contain', 'El nombre de usuario indicado ya existe')
    this.elements.alerts.buttonAccept().click()
  }

  createNewAlumno(username, email) {
    cy.textfield(this.elements.form.name(), userData.alumno.name);
    cy.textfield(this.elements.form.firstSurname(),userData.alumno.firstSurname);
    cy.textfield(this.elements.form.secondSurname(),userData.alumno.secondSurname);
    cy.attachFile(this.elements.form.attachPhoto(),userData.alumno.attachPhoto);
    cy.pickOnSelect(this.elements.form.language(),this.elements.form.languageSelect(),userData.alumno.language);
    cy.pickOnSelect(this.elements.form.gender(),this.elements.form.genderSelect(),userData.alumno.gender);
    cy.textfield(this.elements.form.username(), username);
    cy.textfield(this.elements.form.password(), userData.alumno.password);
    cy.pickOnSelect(this.elements.form.marca(),this.elements.form.marcaSelect(),userData.alumno.marca);
    cy.pickOnSelectByValue(this.elements.form.profile(),this.elements.form.profileSelect(),"Alumno");
    this.elements.form.alumno.email().should("be.visible"); // waits to load the form
    cy.textfield(this.elements.form.alumno.email(), email);
    cy.pickOnSelectByValue(this.elements.form.alumno.documentType(),this.elements.form.alumno.documentTypeSelect(),userData.alumno.documentType);
    cy.textfield(this.elements.form.alumno.documentNumber(),userData.alumno.documentNumber);
    cy.pickOnSelectByValue(this.elements.form.alumno.country(),this.elements.form.alumno.countrySelect(),userData.alumno.country);
    cy.pickOnSelectByValue(this.elements.form.alumno.province(),this.elements.form.alumno.provinceSelect(),userData.alumno.province);
    cy.pickOnSelectByValue(this.elements.form.alumno.township(),this.elements.form.alumno.townshipSelect(),userData.alumno.township);
    cy.textfield(this.elements.form.alumno.postalCode(),userData.alumno.postalCode);
    cy.pickOnSelectByValue(this.elements.form.alumno.roadType(),this.elements.form.alumno.roadTypeSelect(),userData.alumno.roadType);
    cy.textfield(this.elements.form.alumno.address(), userData.alumno.address);
    cy.pickOnSelectByValue(this.elements.form.alumno.education(),this.elements.form.alumno.educationSelect(),userData.alumno.education);
    cy.textfield(this.elements.form.alumno.phone(), userData.alumno.phone);
    cy.pickOnSelectByValue(this.elements.form.alumno.employmentStatus(),this.elements.form.alumno.employmentStatusSelect(),userData.alumno.employmentStatus);
    cy.textfield(this.elements.form.alumno.CIF(), userData.alumno.cif);
    cy.textfield(this.elements.form.alumno.company(), userData.alumno.company);
    cy.textfield(this.elements.form.alumno.job(), userData.alumno.job);
    cy.textfield(this.elements.form.alumno.extensionDays(),userData.alumno.extensionDays);
    cy.textfield(this.elements.form.alumno.birthDate(),userData.alumno.birthDate);
    this.elements.form.checkboxDontDisplayContact().check({force: true});
    this.elements.form.checkboxReceivePendingIssues().check({force: true});
    cy.typeOnIframe(this.elements.form.textBox(), userData.alumno.textboxText);
    this.elements.buttons.save().click();
  }

  createNewTutor(username, email) {
    cy.textfield(this.elements.form.name(), userData.tutor.name);
    cy.textfield(this.elements.form.firstSurname(),userData.tutor.firstSurname);
    cy.textfield(this.elements.form.secondSurname(),userData.tutor.secondSurname);
    cy.attachFile(this.elements.form.attachPhoto(),userData.tutor.attachPhoto);
    cy.pickOnSelect(this.elements.form.language(),this.elements.form.languageSelect(),userData.tutor.language);
    cy.pickOnSelect(this.elements.form.gender(),this.elements.form.genderSelect(),userData.tutor.gender);
    cy.textfield(this.elements.form.username(), username);
    cy.textfield(this.elements.form.password(), userData.tutor.password);
    cy.pickOnSelect(this.elements.form.marca(), this.elements.form.marcaSelect(), userData.tutor.marca);
    cy.pickOnSelectByValue(this.elements.form.profile(), this.elements.form.profileSelect(), "Tutor");
    this.elements.form.tutor.email().should("be.visible"); // waits to load the form
    cy.textfield(this.elements.form.tutor.email(), email);
    cy.pickOnSelectByValue(this.elements.form.tutor.documentType(),this.elements.form.tutor.documentTypeSelect(),userData.tutor.documentType);
    cy.textfield(this.elements.form.tutor.documentNumber(), userData.tutor.documentNumber);
    cy.textfield(this.elements.form.tutor.extensionDays(), userData.tutor.extensionDays);
    cy.textfield(this.elements.form.tutor.phone(), userData.tutor.phone);
    cy.pickOnSelect(this.elements.form.tutor.teachingCompetence(), this.elements.form.tutor.teachingCompetenceSelect(), userData.tutor.teachingCompetence);
    cy.pickOnSelect(this.elements.form.tutor.contractType(), this.elements.form.tutor.contractTypeSelect(), userData.tutor.contractType);
    cy.textfield(this.elements.form.tutor.teletrainingExperience(), userData.tutor.teletrainingExperience);
    cy.pickOnSelect(this.elements.form.tutor.teletrainingModality(), this.elements.form.tutor.teletrainingModalitySelect(), userData.tutor.teletrainingModality);
    cy.textfield(this.elements.form.tutor.birthDate(), userData.tutor.birthDate);
    cy.attachFile(this.elements.form.tutor.attachCV(), userData.tutor.CV);
    this.elements.form.checkboxDontDisplayContact().check({force: true});
    this.elements.form.checkboxReceivePendingIssues().check({force: true});
    cy.typeOnIframe(this.elements.form.textBox(), userData.tutor.textboxText);
    this.elements.buttons.save().click();
  }

  createNewAdmin(username, email) {
    cy.textfield(this.elements.form.name(), userData.admin.name);
    cy.textfield(this.elements.form.firstSurname(),userData.admin.firstSurname);
    cy.textfield(this.elements.form.secondSurname(),userData.admin.secondSurname);
    cy.attachFile(this.elements.form.attachPhoto(),userData.admin.attachPhoto);
    cy.pickOnSelect(this.elements.form.language(),this.elements.form.languageSelect(),userData.admin.language);
    cy.pickOnSelect(this.elements.form.gender(),this.elements.form.genderSelect(),userData.admin.gender);
    cy.textfield(this.elements.form.username(), username);
    cy.textfield(this.elements.form.password(), userData.admin.password);
    cy.pickOnSelect(this.elements.form.marca(), this.elements.form.marcaSelect(), userData.admin.marca);
    cy.pickOnSelectByValue(this.elements.form.profile(), this.elements.form.profileSelect(), "Administrador");
    this.elements.form.admin.email().should("be.visible"); // waits to load the form
    cy.textfield(this.elements.form.admin.email(), email);
    cy.pickOnSelectByValue(this.elements.form.admin.documentType(),this.elements.form.admin.documentTypeSelect(),userData.admin.documentType);
    cy.textfield(this.elements.form.admin.documentNumber(), userData.admin.documentNumber);
    cy.textfield(this.elements.form.admin.extensionDays(), userData.admin.extensionDays);
    this.elements.form.checkboxDontDisplayContact().check({force: true});
    cy.typeOnIframe(this.elements.form.textBox(), userData.admin.textboxText);
    this.elements.buttons.save().click();
  }

  createNewAuditor(username, email) {
    cy.textfield(this.elements.form.name(), userData.auditor.name);
    cy.textfield(this.elements.form.firstSurname(),userData.auditor.firstSurname);
    cy.textfield(this.elements.form.secondSurname(),userData.auditor.secondSurname);
    cy.attachFile(this.elements.form.attachPhoto(),userData.auditor.attachPhoto);
    cy.pickOnSelect(this.elements.form.language(),this.elements.form.languageSelect(),userData.auditor.language);
    cy.pickOnSelect(this.elements.form.gender(),this.elements.form.genderSelect(),userData.auditor.gender);
    cy.textfield(this.elements.form.username(), username);
    cy.textfield(this.elements.form.password(), userData.auditor.password);
    cy.pickOnSelect(this.elements.form.marca(), this.elements.form.marcaSelect(), userData.auditor.marca);
    cy.pickOnSelectByValue(this.elements.form.profile(), this.elements.form.profileSelect(), "Auditor");
    this.elements.form.auditor.email().should("be.visible"); // waits to load the form
    cy.textfield(this.elements.form.auditor.email(), email);
    cy.pickOnSelectByValue(this.elements.form.auditor.documentType(),this.elements.form.auditor.documentTypeSelect(),userData.auditor.documentType);
    cy.textfield(this.elements.form.auditor.documentNumber(), userData.auditor.documentNumber);
    cy.textfield(this.elements.form.auditor.extensionDays(), userData.auditor.extensionDays);
    this.elements.form.checkboxDontDisplayContact().check({ force: true });
    this.elements.form.auditor.checkboxIsCertified().check({ force: true });
    cy.typeOnIframe(this.elements.form.textBox(), userData.auditor.textboxText);
    this.elements.buttons.save().click();
  }
}

export default new NewUserPage();
