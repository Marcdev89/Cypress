class NewTeachingCenterPage
{
    creationData = [{
        required:{
            centerType: 'Centro de trabajo',
            sepe: '0123456789',
            centerName: 'Vertilde Academia',
            cif: 'A01479617',
            country: 'España',
            province: 'Albacete',
            contactEmail: 'ro.ro@unemail.com',
            contactPhone: '616 98 54 54'
        },
        other:{
            businessName: 'Magic SA',
            locality: 'Barrax',
            roadType: 'CALLE',
            postalCode: '02597',
            address: 'Libertad, 46',
            contactPerson: 'Rodrigo Rodriguez'
        }
    },{
        required:{
            centerType: 'Centro de trabajo',
            sepe: '9876543210',
            centerName: 'Oírtice Academia',
            cif: 'A41833385',
            country: 'España',
            province: 'Albacete',
            contactEmail: 'ro.ro@unemail.com',
            contactPhone: '616 98 54 54'
        },
        other:{
            businessName: 'Normal SA',
            locality: 'Barrax',
            roadType: 'CALLE',
            postalCode: '02597',
            address: 'Libertad, 48',
            contactPerson: 'Gonzalo Gonzalez'
        }
    }]

    missingDataMess={
        centerType: 'Tipo de centro',
        sepe: 'Código SEPE',
        centerName: 'Nombre del centro',
        cif: 'CIF',
        country: 'País',
        province: 'Provincia',
        contactEmail: 'Email',
        contactPhone: 'Teléfono'
    }

    elements = {
        url:'nuevo-centro',
        urlEdit:'editar-centro',
        centerTypeSelect:{
            open: ()=> cy.get('[data-id="tipoCentro"]'),
            option: (name)=> cy.clickSelectOption(
                ()=>{ return this.elements.centerTypeSelect.open()},
                ()=>{ return this.elements.centerTypeSelect.open().siblings('div')},
                name
            )
        },
        sepeInput: ()=> cy.get('#codigoSepeCentro'),
        nameInput:()=> cy.get('#nombreCentro'),
        cifInput:()=> cy.get('#cifCentro'),
        businessNameInput:()=> cy.get('#razonSocialCentro'),
        countrySelect:
        {
            open:()=>cy.get('[data-id="paises"]'),
            option: (name)=> cy.clickSelectOption(
                ()=>{ return this.elements.countrySelect.open()},
                ()=>{ return this.elements.countrySelect.open().siblings('div')},
                name
                )
        },
        provinceSelect:{
            open:()=>cy.get('[data-id="provincias"]'),
            option: (name)=> cy.clickSelectOption(
                ()=>{ return this.elements.provinceSelect.open()},
                ()=>{ return this.elements.provinceSelect.open().siblings('div')},
                name
                )
        },
        localitySelect:{
            open:()=> cy.get('[data-id="municipios"]'),
            option: (name)=> cy.clickSelectOption(
                ()=>{ return this.elements.localitySelect.open()},
                ()=>{ return this.elements.localitySelect.open().siblings('div')},
                name
                )
        },
        roadTypeSelect:{
            open:()=> cy.get('[data-id="tipoViaCentro"]'),
            option: (name)=> cy.clickSelectOption(
                ()=>{ return this.elements.roadTypeSelect.open()},
                ()=>{ return this.elements.roadTypeSelect.open().siblings('div')},
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
        succesModal:()=> cy.get('#cuerpoModal'),
        succesModalBtn:()=> cy.get('#modalExito > .modal-dialog > .modal-content > .modal-body > form > .card > .card-footer-modal > .btn')
    }

    fillCreateCenterFormAnd(click="save",data_set=0)
    {
        if(typeof(data_set)!=='object')
        {
            data_set = Object.assign({},this.creationData[data_set].required, this.creationData[data_set].other)
        }
        
        this.elements.centerTypeSelect.option(data_set.centerType)
        this.elements.sepeInput().type(data_set.sepe)
        this.elements.nameInput().type(data_set.centerName)
        this.elements.cifInput().type(data_set.cif)
        this.elements.businessNameInput().type(data_set.businessName)
        this.elements.countrySelect.option(data_set.country)
        this.elements.provinceSelect.option(data_set.province)
        this.elements.localitySelect.option(data_set.locality)
        this.elements.roadTypeSelect.option(data_set.roadType)
        this.elements.postalCodeInput().type(data_set.postalCode)
        this.elements.addressInput().type(data_set.address)
        this.elements.contactPersonInput().type(data_set.contactPerson)
        this.elements.contactEmailInput().type(data_set.contactEmail)
        this.elements.contactPhoneInput().type(data_set.contactPhone)
        if(click==='save'){ this.elements.saveBtn().click() }
        else if(click==='cancel'){ this.elements.cancelBtn().click() }
        return data_set;
    }

    fillOnlyRequiredFields(nb,click='save',data_set=0)
    {
        nb--;
        let emptyS = 'Seleccione...'
        let emptyI = '{selectall}{del}'
        let required = Object.assign({},this.creationData[data_set].required)

        let other_fields = {
            businessName: emptyI,
            locality: 'Municipio',
            roadType: emptyS,
            postalCode: emptyI,
            address: emptyI,
            contactPerson: emptyI,
        }
        let i = 0
        let required_fields_empty = {};

        for(let x in required)
        {
            if(nb<i && /(centerType)|(country)/.test(x))
            {
                required[x] = emptyS;
            }
            else if(nb<i && /province/.test(x))
            {
                required[x] = 'Provincia';
            }
            else if(nb<i)
            {
                required[x] = emptyI;
            }

            if(nb<i)
            {
                required_fields_empty[x] = (required[x]===emptyI) ? '' : required[x]
            }

            i++
        }
        
        this.fillCreateCenterFormAnd(click,Object.assign({},required,other_fields))

        return required_fields_empty
    }

    fillAllFieldsLess(fieldName, data_set=0)
    {
        this.clearForm()
        let data = Object.assign({}, this.creationData[data_set].required, this.creationData[data_set].other)

        switch(fieldName)
        {
            case 'centerType':
            case 'country':
                data[fieldName] = 'Seleccione...'
                data.province = 'Provincia'
                data.locality = 'Municipio'
                break
            case 'roadType':
                data[fieldName] = 'Seleccione...'
                break
            case 'province':
                data[fieldName] = 'Provincia'
                data.locality = 'Municipio'
                break
            case 'locality':
                data[fieldName] = 'Municipio'
                break
            default:
                data[fieldName] = '{selectall}{backspace}'
                break
        }

        this.fillCreateCenterFormAnd('save',data)
    }

    clearField(fieldName)
    {
        let emptyS = 'Seleccione...'
        let emptyI = '{selectall}{backspace}'
        switch(fieldName)
        {
            case 'centerType':
                this.elements.centerTypeSelect.option(emptyS)
                break
            case 'sepe':
                this.elements.sepeInput().type(emptyI)
                break
            case 'centerName':
                this.elements.nameInput().type(emptyI)
                break
            case 'cif':
                this.elements.cifInput().type(emptyI)
                break
            case 'businessName':
                this.elements.businessNameInput().type(emptyI)
                break
            case 'country':
                this.elements.countrySelect.option(emptyS)
                this.elements.provinceSelect.option('Provincia')
                this.elements.localitySelect.option('Municipio')
                break
            case 'province':
                this.elements.provinceSelect.option(emptyS)
                this.elements.localitySelect.option('Municipio')
                break
            case 'locality':
                this.elements.localitySelect.option('Municipio')
                break
            case 'roadType':
                this.elements.centerTypeSelect.option(emptyS)
                break
            case 'postalCode':
                this.elements.postalCodeInput().type(emptyI)
                break
            case 'address':
                this.elements.addressInput().type(emptyI)
                break
            case 'contactPerson':
                this.elements.contactPersonInput().type(emptyI)
                break
            case 'contactEmail':
                this.elements.contactEmailInput().type(emptyI)
                break
            case 'contactPhone':
                this.elements.contactPhoneInput().type(emptyI)
                break
            default:
                this.elements.
                break
        }
    }

    clearForm()
    {
        let emptyI = '{selectall}{backspace}'
        let emptyS = 'Seleccione...'
        let data = {
            centerType: emptyS,
            sepe: emptyI,
            centerName: emptyI,
            cif: emptyI,
            country: emptyS,
            province: 'Provincia',
            contactEmail: emptyI,
            contactPhone: emptyI,
            businessName: emptyI,
            locality: 'Municipio',
            roadType: emptyS,
            postalCode: emptyI,
            address: emptyI,
            contactPerson: emptyI
        }
        this.fillCreateCenterFormAnd('no_submit',data)
    }

    shouldFormBeEmpty()
    {
        this.elements.centerTypeSelect.open().contains('Seleccione...').should('be.visible')
        this.elements.sepeInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.nameInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.cifInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.businessNameInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.countrySelect.open().contains('Seleccione...').should('be.visible')
        this.elements.provinceSelect.open().contains('Seleccione...').should('be.visible')
        this.elements.localitySelect.open().contains('Seleccione...').should('be.visible')
        this.elements.roadTypeSelect.open().contains('Seleccione...').should('be.visible')
        this.elements.postalCodeInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.addressInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.contactPersonInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.contactEmailInput().should('be.visible').invoke('val').and('be.eq','')
        this.elements.contactPhoneInput().should('be.visible').invoke('val').and('be.eq','')
    }

    shouldFormBeFilled(data_set=0)
    {
        let timeout = { timeout:8000}
        this.elements.centerTypeSelect.open().contains(this.creationData[data_set].required.centerType).should('be.visible')
        this.elements.sepeInput().should('be.visible').invoke(timeout, 'val').and('be.eq',this.creationData[data_set].required.sepe)
        this.elements.nameInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].required.centerName)
        this.elements.cifInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].required.cif)
        this.elements.businessNameInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].other.businessName)
        this.elements.countrySelect.open().contains(this.creationData[data_set].required.country).should('be.visible')
        this.elements.provinceSelect.open().contains(this.creationData[data_set].required.province).should('be.visible')
        this.elements.localitySelect.open().contains(this.creationData[data_set].other.locality).should('be.visible')
        this.elements.roadTypeSelect.open().contains(this.creationData[data_set].other.roadType).should('be.visible')
        this.elements.postalCodeInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].other.postalCode)
        this.elements.addressInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].other.address)
        this.elements.contactPersonInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].other.contactPerson)
        this.elements.contactEmailInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].required.contactEmail)
        this.elements.contactPhoneInput().should('be.visible').invoke(timeout,'val').and('be.eq',this.creationData[data_set].required.contactPhone)
    }

    createCenterAndGoToCentersList(data_set)
    {
        this.fillCreateCenterFormAnd('save',data_set);
        this.elements.succesModalBtn().click()
        cy.closeTab(this.elements.urlEdit);
    }
}
export default new NewTeachingCenterPage()