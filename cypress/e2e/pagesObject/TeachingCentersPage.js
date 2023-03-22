class TeachingCentersPage
{
    elements = {
        lookAllBtn: () => cy.contains('Ver todo'),
        searchBtn: () => cy.contains('Buscar'),
        exportDetailsBtn: () => cy.contains('Exportar detalle'),
        newCenterBtn : () => cy.contains('Nuevo centro'),
        removeBtn: (index=0) => cy.get('.icons-tables[alt="Eliminar"]').eq(index),
        yesBtn: () => cy.get('.btn[data-field="si"][title="Sí"]'),
        noBtn: () => cy.get('.btn[data-field="no"][title="No"]'),
        acceptBtn: () => cy.get('#modalExito [title="Aceptar"]', {force:true}),
        teachingCentersList: () => cy.get('#listadoGrupos tr'),
        centerCodeInput: () => cy.get('#codigoCentro'),
        centerNameInput: () => cy.get('#nombreCentro')
    }
}

export default new TeachingCentersPage();