class StudentTrainingPage
{
    elements = {
        resources:  {  
            
            progressBar: () => cy.get('#wrapper_progress_bar'),
            logoVertice: () => cy.get('.large-image'),
            aditionalHelp: () => cy.get('.help-margin'),
            cau: () => cy.get('.copyright > .pull-right > .link'),

            buttons: {
                btnsPanel: () => cy.get('.botonera-container'),
                btnFormation: () => cy.get('#btn-formacion'),
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

        training: {
            assignatedGroupTNG: () => cy.get('.col-xl-12.no-padding-left > .col-xl-12 > .units-cards-uuff > .card-content > .row > .col-xl-10 > .list-group-name > span')
        },

        sideBar: {
            assignatedGroupSB: () => cy.get('#bl-grupo-seleccionado'),
            trainingSB: () => cy.get('.sidebar-groups-highlight')
        },

        personalInformation: {
            timer: () => cy.get('#fechaActual'),
            photo: () => cy.get('#img-usr-perfil'),
            imgUser: () => cy.get('#img-usr-perfil')
        },

        timer: {
            startDate: () => cy.get('#fecha_inicio_reloj'),
            finishDate: () => cy.get('#fecha_fin_reloj')
        }
       
    }
}

export default new StudentTrainingPage();