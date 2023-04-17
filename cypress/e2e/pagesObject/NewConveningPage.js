class NewConveningPage
{
    creationData=[
    {
        required:
        {
            year:2023,
            denomination:'convocatoria1'
        },
        other:
        {
            file: new File([''],'header1.pdf',{type: "text/plain", lastModified: 1681462212002}),
            emails:'nomail@nomail.com,nadie@ningunaparte.com',
            comments:'no comment',
            is_default:false
        }
    },
    {
        required:
        {
            year:2023,
            denomination:'convocatoria2'
        },
        other:
        {
            file: new File([''],'header2.pdf',{type: "text/plain", lastModified: 1681462212018}),
            emails:'sdf@sdfs.com,nnth@we.com',
            comments:'without comment',
            is_default:true
        }
    }]

    elements = {
        url : 'nueva-convocatoria',
        yearInput:()=> cy.get('#anio'),
        denominationInput:()=> cy.get('#denominacion'),
        headerInputFile:()=> cy.get('[type="file"]').get('[name="cabecera"]'),
        headerFile:()=> cy.get('[data-inputfile="filename"]'),
        emailsInput:()=> cy.get('#mails'),
        commentInput:()=> cy.get('#observaciones'),
        defaultConveningCheckBox:()=> cy.get('#checkboxConvocatoriaPred'),
        saveBtn:()=> cy.get('#guardarConvocatoria'),
        cancelBtn:()=> cy.get('button[name="boton-cancelar"]'),
        succesModal:()=> cy.get('#cuerpoModal'),
        succesModalBtn:()=> cy.get('#modalExito > .modal-dialog > .modal-content > .modal-body > form > .card > .card-footer-modal > .btn')
    }

    shouldFormBeEmpty()
    {
        this.elements.yearInput().should('be.visible').invoke('val').should('be.eq','')
        this.elements.denominationInput().should('be.visible').invoke('val').should('be.eq','')
        this.elements.headerFile().contains('Selecciona un archivo')
        this.elements.emailsInput().should('be.visible').invoke('val').should('be.eq','')
        this.elements.commentInput().should('be.visible').invoke('val').should('be.eq','')
        this.elements.defaultConveningCheckBox().invoke('prop','checked').should('be.eq',false)
    }

    fillCreateCenterFormAnd(click='save', data_set=0)
    {
        this.elements.yearInput().type(this.creationData[data_set].required.year)
        this.elements.denominationInput().type(this.creationData[data_set].required.denomination)
        this.elements.headerInputFile().selectFile('cypress/support/test_files/test.pdf',{force:true})
        this.elements.emailsInput().type(this.creationData[data_set].other.emails)
        this.elements.commentInput().type(this.creationData[data_set].other.comments)
        this.elements.defaultConveningCheckBox().invoke('prop','checked', this.creationData[data_set].other.is_default).then(()=>{
            if(click==='save')
            {
                this.elements.saveBtn().click()
            }
            else if(click==='cancel')
            {
                this.elements.cancelBtn().click()
            }
        })
    }
}
export default new NewConveningPage()