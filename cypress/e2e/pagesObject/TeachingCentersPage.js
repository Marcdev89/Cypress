class TeachingCentersPage
{
    elements = {
        url: () => cy.visit('center'),
        lookAllBtn: () => cy.contains('Ver todo'),
        removeBtn: (index=0) => cy.get('.icons-tables[alt="Eliminar"]').eq(index),
        confirmBtn: () => cy.get('.btn[data-field="si"][title="Sí"]'),
        cancelBtn: () => cy.get('.btn[data-field="no"][title="No"]')
    }

    clickLookAll()
    {
        this.elements.lookAllBtn().click()
    }

    clickTrash(nb)
    {
        this.elements.removeBtn(nb).click();
    }

    clickYes()
    {
        this.elements.confirmBtn().click();
    }

    clickNo()
    {
        this.elements.cancelBtn().click();
    }

    goTo()
    {
        this.elements.url();
    }
}

export default new TeachingCentersPage();