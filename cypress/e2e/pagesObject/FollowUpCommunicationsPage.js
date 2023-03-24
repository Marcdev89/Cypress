class FollowUpCommunicationsPage{

    elements = {

        title: () => cy.get('[title="Seguimiento comunicaciones"]'),
        infoIcon: () => cy.get('.extra-info'),
        help: () => cy.contains('Ayuda adicional', { matchCase: false }),
        helpIcon: () => cy.get('.button-help'),

        searchCard : {
                        codeAF: () => cy.get('#codigo_aaff'),
                        nameAF: () => cy.get('#nombre_aaff'),
                        codeGroup: () => cy.get('#codigo_grupo'),
                        nameGroup: () => cy.get('#nombre_grupo'),
                        name: () => cy.get('#nombre'),
                        firstSurname: () => cy.get('#apellido1'),
                        secondSurname: () => cy.get('#apellido2'),
                        documentNumber: () => cy.get('#numeroDocumento'),
                        sinceDate: () => cy.get('#fechaDesde'),
                        toDate: () => cy.get('#fechaHasta'),                   
                        showAllButton: () => cy.get('[title="Ver todo"]'),
                        searchButton: () => cy.get('[title="Buscar"]'),  
        },
        communicationsList : {
                        exportDetailButton: () => cy.get('#export'),
                        tbodyList: () => cy.get('#listadoComunicaciones'),
                        profileLink: () => cy.get('td a')
        }
    }

}

module.exports = new FollowUpCommunicationsPage();