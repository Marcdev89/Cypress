import AAFFPage from "./AAFFPage";
import editData from "../../fixtures/editAFData.json";

class EditAFPage {  
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

  assertEditOnlyRequiredFields() {
    AAFFPage.elements.table.getRowField(editData.code, 0).should("contain", editData.code)
    AAFFPage.elements.table.getRowField(editData.code, 1).should("contain", editData.name)
    AAFFPage.elements.table.getRowField(editData.code, 2).should("contain", editData.modality)
  }

  assertFields() {
    AAFFPage.elements.table.getRowField(editData.code, 0).should("contain", editData.code)
    AAFFPage.elements.table.getRowField(editData.code, 1).should("contain", editData.name)
    AAFFPage.elements.table.getRowField(editData.code, 2).should("contain", editData.modality)
    AAFFPage.elements.table.getRowField(editData.code, 3).should("contain", editData.days)
    AAFFPage.elements.table.getRowField(editData.code, 4).should("contain", editData.hours)
    AAFFPage.elements.table.getRowField(editData.code, 5).should("contain", editData.practiceHours)
    AAFFPage.elements.table.getRowField(editData.code, 6).should("contain", editData.version)
  }

  editOnlyRequiredFields() {
    cy.textfield(this.elements.form.code(), editData.code);
    cy.textfield(this.elements.form.name(), editData.name);
    cy.pickOnSelectByValue(this.elements.form.modality(), this.elements.form.modalitySelect(), editData.modality);
    this.elements.buttons.save().click();
    this.elements.alerts.modalSuccesful().should("exist");
  }

  editAllFields() {
    cy.textfield(this.elements.form.code(), editData.code);
    cy.textfield(this.elements.form.name(), editData.name);
    cy.pickOnSelectByValue(this.elements.form.modality(), this.elements.form.modalitySelect(), editData.modality);
    cy.pickOnSelect(this.elements.form.version(), this.elements.form.versionSelect(), editData.version);
    cy.pickOnSelect(this.elements.form.professionalBranch(), this.elements.form.professionalBranchSelect(), editData.professionalBranch);
    cy.pickOnSelect(this.elements.form.professionalArea(), this.elements.form.professionalAreaSelect(), editData.professionalArea);
    cy.pickOnSelect(this.elements.form.formationType(), this.elements.form.formationTypeSelect(), editData.formationType);
    cy.pickOnSelect(this.elements.form.ratingRange(), this.elements.form.ratingRangeSelect(), editData.ratingRange);
    cy.pickOnSelect(this.elements.form.qualificationLevel(), this.elements.form.qualificationLevelSelect(), editData.qualificationLevel);
    cy.pickOnSelectByValue(this.elements.form.autonomousCommunity(), this.elements.form.autonomousCommunitySelect(), editData.autonomousCommunity);
    cy.textfield(this.elements.form.days(), editData.days);
    cy.textfield(this.elements.form.hours(), editData.hours);
    cy.textfield(this.elements.form.practiceHours(), editData.practiceHours);
    cy.textfield(this.elements.form.schedule(), editData.schedule);
    this.elements.form.attachFile().selectFile(editData.attachFile, { force: true });
    this.elements.form.checkboxProfessionalCertificate().check();
    this.elements.form.checkboxShowDidacticalGuide().check();

    this.elements.cards.goals().click();
    cy.typeOnIframe(this.elements.textBox.goals(), editData.textboxInput)

    this.elements.cards.contents().click();
    cy.typeOnIframe(this.elements.textBox.contents(), editData.textboxInput);

    this.elements.cards.toolsAndMethodology().click();
    cy.typeOnIframe(this.elements.textBox.toolsAndMethodology(), editData.textboxInput);

    this.elements.cards.tutorshipCharacteristics().click();
    cy.typeOnIframe(this.elements.textBox.tutorshipCharacteristics(), editData.textboxInput);

    this.elements.cards.followup().click();
    cy.typeOnIframe(this.elements.textBox.followup(), editData.textboxInput);

    this.elements.cards.evaluationSystem().click();
    cy.typeOnIframe(this.elements.textBox.evaluationSystem(), editData.textboxInput);

    this.elements.cards.description().click();
    this.elements.textBox.description().type(editData.textboxInput);

    this.elements.cards.observations().click();
    this.elements.textBox.observations().type(editData.textboxInput);
      
    this.elements.buttons.save().click();
    this.elements.alerts.modalSuccesful().should("exist");
  }
}

export default new EditAFPage;