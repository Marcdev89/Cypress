class StudentTrainingPage
{
    elements = {
        resources:  {       
            buttons: {
                btnsPanel: () => cy.get('.botonera-container'),
                //formación?
                btnChat: () => cy.get('#btn-chat'),
                btnProgress: () => cy.get('#btn-progresos'),
                btnCalendar: () => cy.get('#btn-calendario'),
                btnMail: () => cy.get('#btn-correo'),
                btnNotification: () => cy.get('#btn-notificaciones'),
                btnContacts: () => cy.get('#btn-contactos'),
                btnInformation: () => cy.get('#btn-contactos'),
                btnCertificate: () => cy.get('#btn-diploma')
            },
            
        },

        progress: {
            progressBar: () => cy.get('#wrapper_progress_bar')
        },

        training: {
            assignatedGroupTNG: () => cy.get('.col-xl-12.no-padding-left > .col-xl-12 > .units-cards-uuff > .card-content > .row > .col-xl-10 > .list-group-name > span')
        },

        sideBar: {
            assignatedGroupSB: () => cy.get('#bl-grupo-seleccionado'),
            trainingSB: () => cy.get('.sidebar-groups-highlight')
        },

        personalInformation: {
            //usuario??
            timer: () => cy.get('#fechaActual'),
            photo: () => cy.get('#img-usr-perfil')
        }



        
    }
}

export default new StudentTrainingPage();