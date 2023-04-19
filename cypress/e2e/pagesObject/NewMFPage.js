class NewMFPage{

    /* LOCATORS */

    elements ={


        additionalHelp: () => cy.contains("Ayuda adicional"),

        form: {
            code: () => cy.get('#codigoMMFF'),
            name: () => cy.get('#denominacionMMFF'),
            modalitySelectToggle: (position) =>  cy.get(`:nth-child(${position}) > .form-group > .selectpicker-margin > .btn-group > .dropdown-toggle`),
            modalitySelectOption: (select,position) =>  cy.get(`:nth-child(${select}) > .form-group > .selectpicker-margin > .btn-group > .open > .dropdown-menu > [data-original-index="${position}"]`),
            days: () => cy.get('#diasMMFF'),
            hours: () => cy.get('#horasMMFF'),
            hoursTeleform: () => cy.get('#horas_teleformacionMMFF'),
            hoursFaceToFace: () => cy.get('#horas_tutoriasMMFF'),
            hoursEvaluation: () => cy.get('#horas_evaluacionMMFF'),
            buttonSave: () => cy.get('#guardarMMFF'),
            buttonCancel: () => cy.get('[title="Cancelar"]'),
            tinyIFrame: () => cy.get('#info_mmff_ifr')
        }

    }

    /* FUNCTIONS */

    modalitySelect (selectPos, optionPos){
       this.elements.form.modalitySelectToggle(selectPos).click()
       this.elements.form.modalitySelectOption(selectPos,optionPos).click()
    }

    createNewMF (code, name, modality){
        this.elements.form.code().clear().type(code)
        this.elements.form.name().clear().type(name)
        this.modalitySelect(1,modality)
        this.elements.form.buttonSave().click()
    }

    url = () => cy.visit('nuevo-modulo-formativo')

}

export default new NewMFPage();