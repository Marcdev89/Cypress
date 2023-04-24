class MyCoursesPage{

    elements = {
            
            additionalHelp: () => cy.contains("Ayuda adicional"),
            additionalHelpLink: () => cy.contains("ayuda adicional"),
            url: () => cy.visit('mis-cursos'),

            courseCard: {

                selectingOptionByPosition: (cardPosition, optionNumber) =>  cy.get(`:nth-child(${cardPosition}) > .card > .botonera-container > :nth-child(${optionNumber}) > img`),
              /* OPTIONS
                        1-formation
                        2-chat
                        3-progress 
                        4-calendar
                        5-mail
                        6-notifications
                        7-contacts
                        8-generalInfo
                        9-diploma
                */
                selectingCourseByTitle: (courseTitle, optionTitle) => cy.get(`[title="${courseTitle}"]`)
                                                                    .parents('.card-content')
                                                                    .siblings('.botonera-container')
                                                                    .find(`[title="${optionTitle}"]`)
                                                            
                /* Options by title -> Formación | Chat | Progresos | Calendario | Correo | Notificaciones | Contactos | Información General | Diploma */
                                                                         
            }  

    }

}

export default new MyCoursesPage();