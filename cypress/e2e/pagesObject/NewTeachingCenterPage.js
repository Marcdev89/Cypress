class NewTeachingCenterPage
{
    elements = {
        centerTypeSelect:{
            open: ()=> cy.get('[data-id="tipoCentro"]'),
            option: (name)=> cy.pickOnSelectByValue(
                this.elements.centerTypeSelect.open(),
                this.elements.centerTypeSelect.open().siblings('div > ul'),
                name
                )
        },
        sepeInput: ()=> cy.get('#codigoSepeCentro'),
        nameInput:()=> cy.get('#nombreCentro'),
        cifInput:()=> cy.get('#cifCentro'),
        businexxNameInput:()=> cy.get('#razonSocialCentro'),
        countrySelect:
        {
            open:()=>cy.get('[data-id="paises"]'),
            option: (name)=> cy.pickOnSelectByValue(
                this.elements.countrySelect.open(),
                this.elements.countrySelect.open().siblings('div > ul'),
                name
                )
        },
        provinceSelect:{
            open:()=>cy.get('[data-id="provincias"]'),
            option: (name)=> cy.pickOnSelectByValue(
                this.elements.provinceSelect.open(),
                this.elements.provinceSelect.open().siblings('div > ul'),
                name
                )
        },
        localitySelect:{
            open:()=> cy.get('[data-id="municipios"]'),
            option: (name)=> cy.pickOnSelectByValue(
                this.elements.localitySelect.open(),
                this.elements.localitySelect.open().siblings('div > ul'),
                name
                )
        },
        roadTypeSelect:{
            open:()=> cy.get('[data-id="tipoViaCentro"]'),
            option: (name)=> cy.pickOnSelectByValue(
                this.elements.roadTypeSelect.open(),
                this.elements.roadTypeSelect.open().siblings('div > ul'),
                name
                )
        },
        postalCodeInput:()=> cy.get('#codigoPostalCentro'),
        addressInput:()=> cy.get('#direccionCentro'),
        contactPersonInput:()=> cy.get('#nombreContactoCentro'),
        contactEmailInput:()=> cy.get('#emailContactoCentro'),
        contactPhoneInput:()=> cy.get('#telefonoContactoCentro'),
        saveBtn:()=> cy.get('#guardarCentro'),
        cancelBtn:()=> this.elements.saveBtn().siblings('[title="Cancelar"]'),
    }
}
export default new NewTeachingCenterPage()