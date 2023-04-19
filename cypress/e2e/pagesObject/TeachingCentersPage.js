class TeachingCentersPage
{
    elements = {
        url:'centros',
        lookAllBtn: () => cy.contains('Ver todo'),
        searchBtn: () => cy.contains('Buscar'),
        exportDetailsBtn: () => cy.contains('Exportar detalle'),
        newCenterBtn : () => cy.contains('Nuevo centro'),
        removeBtn: (index=0) => cy.get('.icons-tables[alt="Eliminar"]').eq(index),
        yesBtn: () => cy.get('.btn[data-field="si"][title="Sí"]'),
        noBtn: () => cy.get('.btn[data-field="no"][title="No"]'),
        acceptBtn: () => cy.get('#modalExito [title="Aceptar"]', {force:true}),
        teachingCentersList: () => cy.get('#listadoGrupos tr'),
        teachingCenter_name: (name) => this.elements.teachingCentersList().contains('a',name),
        centerCodeInput: () => cy.get('#codigoCentro'),
        centerNameInput: () => cy.get('#nombreCentro'),
        tab: () => cy.get(`[onclick^='abrirPestana("/centros", 1)']`).eq(0)
    }

    removeCenter(code, name, click_tab=true)
    {
        this.searchCenter(code, name, {click_tab})

        //remove center
        this.elements.teachingCentersList().should('not.have.text','').invoke('html')
        .then((html) =>{
            if(!/No se han encontrado resultados/.test(html))
            {
                this.elements.removeBtn().click()
                this.elements.yesBtn().click()
                this.elements.acceptBtn().click()
            }
        })
    }

    searchCenter(code, name, actions)
    {
        actions.click_center = (actions.click_center==undefined) ? false : actions.click_center
        actions.click_tab = (actions.click_tab == undefined) ? false : actions.click_tab
        
        if(actions.click_tab){ this.elements.tab().click() }
        this.elements.centerCodeInput().type('{selectAll}'+code)
        this.elements.centerNameInput().type('{selectAll}'+name)
        this.elements.searchBtn().click()
        if(actions.click_center){ this.elements.teachingCenter_name(name).click() }
    }
}

export default new TeachingCentersPage();