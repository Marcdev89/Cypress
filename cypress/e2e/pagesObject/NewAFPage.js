
class NewAFPage {
  code = 'ABCDEFG123456';
  name = 'AF-TEST-0102030405';
  textboxInput = "TEST12048021394##_·@";
  attachFile = "cypress/support/test_files/test.pdf";

  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),

    form: {
      code: () => cy.get("#codigoAAFF"),
      name: () => cy.get("#denominacionAAFF"),
      modality: () => cy.get('[data-id="modalidadAAFF"]'),
      modalitySelect: () => cy.get('[data-id="modalidadAAFF"]').siblings(".dropdown-menu").find("ul li"),
      version: () => cy.get('[data-id="versionAAFF"]'),
      versionSelect: () => cy.get('[data-id="versionAAFF"]').siblings(".dropdown-menu").find("ul li"),
      professionalBranch: () => cy.get('[data-id="familia_profesionalAAFF"]'),
      professionalBranchSelect: () => cy.get('[data-id="familia_profesionalAAFF"]').siblings(".dropdown-menu").find("ul li"),
      professionalArea: () => cy.get('[data-id="area_profesionalAAFF"]'),
      professionalAreaSelect: () => cy.get('[data-id="area_profesionalAAFF"]').siblings(".dropdown-menu").find("ul li"),
      formationType: () => cy.get('[data-id="tipo_form"]'),
      formationTypeSelect: () => cy.get('[data-id="tipo_form"]').siblings(".dropdown-menu").find("ul li"),
      ratingRange: () => cy.get('[data-id="rango_calificacionesAAFF"]'),
      ratingRangeSelect: () => cy.get('[data-id="rango_calificacionesAAFF"]').siblings(".dropdown-menu").find("ul li"),
      qualificationLevel: () => cy.get('[data-id="niv_cualif"]'),
      qualificationLevelSelect: () => cy.get('[data-id="niv_cualif"]').siblings(".dropdown-menu").find("ul li"),
      autonomousCommunity: () => cy.get('[data-id="com_aut"]'),
      autonomousCommunitySelect: () => cy.get('[data-id="com_aut"]').siblings(".dropdown-menu").find("ul li"),
      days: () => cy.get("#diasAAFF"),
      hours: () => cy.get("#horasAAFF"),
      practiceHours: () => cy.get("#horas_practicasAAFF"),
      schedule: () => cy.get("#horarioAAFF"),
      attachFile: () => cy.get("#adj_ficha").find("input"),
      deleteAttachedFile: () => cy.get("#adj_ficha").find('[data-ondel="eliminarFicha"] [title="Eliminar"]'),
      checkboxProfessionalCertificate: () => cy.get("#checkboxCertificado"),
      checkboxShowDidacticalGuide: () => cy.get("#checkboxMostrarGuiaDidac"),
    },

    cards: {
      goals: () => cy.get('[alt="Guía didáctica - Objetivos"] > .cursor-pointer'),
      contents: () => cy.get('[alt="Guía didáctica - Contenidos"] > .cursor-pointer'),
      toolsAndMethodology: () => cy.get('[alt="Guía didáctica - Herramientas y metodología"] > .cursor-pointer'),
      tutorshipCharacteristics: () => cy.get('[alt="Guía didáctica - Características tutoría"] > .cursor-pointer'),
      followup: () => cy.get('[alt="Guía didáctica - Seguimiento"] > .cursor-pointer'),
      evaluationSystem: () => cy.get('[alt="Guía didáctica - Controles y sistema de evaluación"] > .cursor-pointer'),
      description: () => cy.get('[data-cardprogreso="descripcion"] > .cursor-pointer'),
      observations: () => cy.get('[data-cardprogreso="observaciones"] > .cursor-pointer'),
    },

    textBox: {
      goals: () => cy.get("#g_did_obj_bloque iframe"),
      contents: () => cy.get("#g_did_cont_bloque iframe"),
      toolsAndMethodology: () => cy.get("#g_did_herr_met_bloque iframe"),
      tutorshipCharacteristics: () => cy.get("#g_did_carac_tut_bloque iframe"),
      followup: () => cy.get("#g_did_seg_bloque iframe"),
      evaluationSystem: () => cy.get("#g_did_cont_sis_bloque iframe"),
      description: () => cy.get("#descripcion_bloque textarea"),
      observations: () => cy.get("#observaciones_bloque textarea"),
    },

    buttons: {
      save: () => cy.get('[name="boton-guardar"]'),
      cancel: () => cy.get('[name="boton-cancelar"]'),
    },

    alerts: {
      codeRequired: () => cy.contains(".snackbar-alert", "Debe informar el campo: Código"),
      nameRequired: () => cy.contains(".snackbar-alert", "Debe informar el campo: Denominación"),
      modalityRequired: () => cy.contains(".snackbar-alert", "Debe informar el campo: Modalidad"),
      modalSuccesful: () => cy.contains("#cuerpoModal", "Datos guardados correctamente"),
    },
  };

  // FUNCTIONS
  clearRequiredFields() {
    this.elements.form.code().clear();
    this.elements.form.name().clear();
    cy.pickOnSelect(this.elements.form.modality(), this.elements.form.modalitySelect(), 0)
  }

  newOnlyRequiredFields() {
    cy.textfield(this.elements.form.code(), this.code);
    cy.textfield(this.elements.form.name(), this.name);
    cy.pickOnSelect(this.elements.form.modality(), this.elements.form.modalitySelect(), 3);
    this.elements.buttons.save().click();
    this.elements.alerts.modalSuccesful().should("exist");
  }

  newWithoutRequiredFieldCode() {
    this.clearRequiredFields();
    cy.textfield(this.elements.form.name(), this.name);
    cy.pickOnSelect(this.elements.form.modality(), this.elements.form.modalitySelect(), 3);
    this.elements.buttons.save().click();
    this.elements.alerts.codeRequired().should("exist");
  }

  newWithoutRequiredFieldName() {
    this.clearRequiredFields();
    cy.textfield(this.elements.form.code(), this.code);
    cy.pickOnSelect(this.elements.form.modality(), this.elements.form.modalitySelect(), 3);
    this.elements.buttons.save().click();
    this.elements.alerts.nameRequired().should("exist");
  }

  newWithoutRequiredFieldModality() {
    this.clearRequiredFields();
    cy.textfield(this.elements.form.code(), this.code);
    cy.textfield(this.elements.form.name(), this.name);
    this.elements.buttons.save().click();
    this.elements.alerts.modalityRequired().should("exist");
  }

  newWithAllFields() {
    cy.textfield(this.elements.form.code(), this.code);
    cy.textfield(this.elements.form.name(), this.name);
    cy.pickOnSelect(this.elements.form.modality(), this.elements.form.modalitySelect(), 3);
    cy.pickOnSelect(this.elements.form.version(), this.elements.form.versionSelect(), 3);
    cy.pickOnSelect(this.elements.form.professionalBranch(), this.elements.form.professionalBranchSelect(), 3);
    cy.pickOnSelect(this.elements.form.professionalArea(), this.elements.form.professionalAreaSelect(), 3);
    cy.pickOnSelect(this.elements.form.formationType(), this.elements.form.formationTypeSelect(), 0);
    cy.pickOnSelect(this.elements.form.ratingRange(), this.elements.form.ratingRangeSelect(), 1);
    cy.pickOnSelect(this.elements.form.qualificationLevel(), this.elements.form.qualificationLevelSelect(), 2);
    cy.pickOnSelect(this.elements.form.autonomousCommunity(), this.elements.form.autonomousCommunitySelect(), 6);
    cy.textfield(this.elements.form.days(), "100");
    cy.textfield(this.elements.form.hours(), "1000");
    cy.textfield(this.elements.form.practiceHours(), "1000");
    cy.textfield(this.elements.form.schedule(), "10:00-11:00");
    this.elements.form.attachFile().selectFile(this.attachFile, { force: true });
    this.elements.form.checkboxProfessionalCertificate().check();
    this.elements.form.checkboxShowDidacticalGuide().check();

    this.elements.cards.goals().click();
    cy.typeOnIframe(this.elements.textBox.goals(), this.textboxInput)

    this.elements.cards.contents().click();
    cy.typeOnIframe(this.elements.textBox.contents(), this.textboxInput);

    this.elements.cards.toolsAndMethodology().click();
    cy.typeOnIframe(this.elements.textBox.toolsAndMethodology(), this.textboxInput);

    this.elements.cards.tutorshipCharacteristics().click();
    cy.typeOnIframe(this.elements.textBox.tutorshipCharacteristics(), this.textboxInput);

    this.elements.cards.followup().click();
    cy.typeOnIframe(this.elements.textBox.followup(), this.textboxInput);

    this.elements.cards.evaluationSystem().click();
    cy.typeOnIframe(this.elements.textBox.evaluationSystem(), this.textboxInput);

    this.elements.cards.description().click();
    this.elements.textBox.description().type(this.textboxInput);

    this.elements.cards.observations().click();
    this.elements.textBox.observations().type(this.textboxInput);
      
    this.elements.buttons.save().click();
    this.elements.alerts.modalSuccesful().should("exist");
  }

}

export default new NewAFPage();