class TutorHomePage {

    /* LOCALIZATIONS */

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
                                announcements : () => cy.get('[title="Comunicaciones"]'),
                                content : () => cy.get('[title="Contenidos"]'),
                                followUp : () => cy.get('[title="Seguimiento de alumnos"]'),
                                tutorials : () => cy.get('[title="Tutorías"]'),
                                calendar : () => cy.get('[title="Calendario"]'),
                                mail : () => cy.get('[title="Correo"]'),
                                notifications : () => cy.get('[title="Notificaciones"]'),
                                participants : () => cy.get('[title="Participantes"]'),
                                classRoom : () => cy.get('[title="Aula"]')
                        }
        }
    }

    /* FUNCTIONS */
    
    url= () => cy.visit('inicio-tutor');

}

module.exports = new TutorHomePage();