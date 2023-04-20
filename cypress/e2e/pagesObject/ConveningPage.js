class ConveningPage
{
    elements = {
        url:'convocatorias',
        exportDetailsBtn:()=> cy.get('#export'),
        newConveningBtn:()=> cy.get('button[title="Nueva convocatoria"]'),
        conveningList:()=> cy.get('#convocatoriasTabla > tr'),
        conveningTitle_title:(title)=> cy.get('#convocatoriasTabla > tr > td > a').contains(title),
        conveningTitle_year:(year)=> cy.get('#convocatoriasTabla > tr > td').contains(year).siblings().find('a[title="Editar"]'),
        conveningTrashBtn_year:(year)=> cy.get('#convocatoriasTabla > tr > td').contains(year).siblings().find('a[title="Eliminar"]'),
        conveningDefaultBtn_year:(year)=> cy.get('#convocatoriasTabla > tr > td').contains(year).siblings().find('a[title="Convocatoria predeterminada"]'),
        confirmModalText:()=> cy.get('#modalConfirmar [data-field="body"]'),
        confirmModalYesBtn:()=> cy.get('#modalConfirmar .modal-body button').contains('Sí'),
        confirmModalNoBtn:()=> cy.get('#modalConfirmar .modal-body button').contains('No'),
        confirmModalCloseBtn:()=> cy.get('#modalConfirmar .modal-header button.close'),
        successModalText:()=> cy.get('#cuerpoModal'),
        successModalAcceptBtn:()=> cy.get('#modalExito .modal-body button'),
    }

    removeConveningIfExists(year)
    {
        cy.get('#convocatoriasTabla > tr').should('be.visible').its('length').should('be.gte',1).then((len)=>{
            let table_row = Cypress.$('#convocatoriasTabla > tr')
            let patt = new RegExp('>'+year+'</td>')
            for(let i = 0; i<len; i++)
            {
                if(patt.test(Cypress.$(table_row[i]).html()))
                {
                    this.elements.conveningTrashBtn_year(year).click()
                    this.elements.confirmModalYesBtn().click()
                    this.elements.successModalAcceptBtn().click()
                }
            }
        })}
}
export default new ConveningPage()