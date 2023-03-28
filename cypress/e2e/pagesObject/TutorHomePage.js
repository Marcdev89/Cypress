class TutorHomePage {

    /* LOCATORS */

    elements = {

        events : () => cy.get('.avisos-box'),

        groupSearching : {
    
                         code: () => cy.get('#codigoGrupo'),
                         name: () => cy.get('#nombreGrupo'),
                         startDate: () => cy.get('#fechaInicio'),
                         finalDate: () => cy.get('#fechaFin'),
                         starred: () => cy.get('[title="Ver destacados"]'),
                         showAll: () => cy.get('[title="Ver todo"]'),
                         search: () => cy.get('[title="Buscar"]'),       
        },
    
        groupView : {
                        viewList: () => cy.get('#listView'),
                        viewGrid: () => cy.get('#gridView'),
        },
    
        groupCard : {
                        groupName: () => cy.get('[data-field="nombreGrupo"]'),
                        bookmark: () => cy.get('[title="Marcar Favoritos"]'),
    
                        menu : {
                                communications : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(1) > img'),
                                content : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(2) > img'),
                                followUp : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(3) > img'),
                                tutorials : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(4) > img'),
                                calendar : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(5) > img'),
                                mail : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(6) > img'),
                                notifications : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(7) > img'),
                                participants : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(8) > img'),
                                classRoom : () => cy.get('#zonaGrid > .col-xl-4 > .card > .botonera-container > :nth-child(9) > img')
                        }
        }
    }

    /* FUNCTIONS */
    
    url= () => cy.visit('inicio-tutor');

}

export default new TutorHomePage();