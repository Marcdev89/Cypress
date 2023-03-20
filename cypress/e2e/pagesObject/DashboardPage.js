class DashboardPage{

/* LOCALIZATIONS */

    elements = {

        title: () => cy.get('.title no-margin'),
        infoIcon: () => cy.get('.extra-info'),
        campus: () => cy.get('[title="Campus"]'),
        help: () => cy.contains('Ayuda adicional', { matchCase: false }),
        helpIcon: () => cy.get('.button-help'),
        administrationCard : {

                                titleAdmin: () => cy.contains('Administración', { matchCase: false }),
                                userList: () => cy.get('[title="Listado usuarios"'),
                                profiles: () => cy.get('[title="Perfiles"]'),
                                consumos: () => cy.get('[title="Consumos"]')
                             }, 
        trainingManagementCard : {

                                 //from cursos
                                    actions: () => cy.get('[title="Acciones formativas"]'),
                                    modules: () => cy.get('[title="Módulos formativos"]'),
                                    formuUd: () => cy.get('[title="Unidades formativas"]'),
                                    didacticUd: () => cy.get('[title="Unidades didácticas"]'),
                                    calendar: () => cy.get('[title="Calendario acciones formativas"]'),
    
                                 //from Contenidos
                                    interactiveContent: () => cy.get('[title="Contenidos interactivos"]'),
                                    resources: () => cy.get('[title="Recursos"]'),
                                    quiz: () => cy.get('[title="Encuestas"]'),
                                        questions: () => cy.get('[title="Preguntas de encuestas"]'),
                                    assessmentTests: () => cy.get('[title="Pruebas de evaluacion"]'),
                                    tasks: () => cy.get('[title="Tareas"]')
    
                                  },  
        nCampusCard : {
                                    logo: () => cy.get('[title= "Logo marca"]'),
                                    nCampus: () => cy.contains('NCAMPUS', { matchCase: false })   
                      }
    }

/* FUNCTIONS */
    
    url= () => cy.visit('inicio-dashboard');
    
}

module.exports = new DashboardPage();