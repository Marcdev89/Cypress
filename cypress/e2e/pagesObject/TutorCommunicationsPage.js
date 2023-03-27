class TutorCommunicationsPage{

    elements = {

        title: () => cy.get('[title="Comunicaciones"]'),
        help: () => cy.contains('Ayuda adicional', { matchCase: false }),
        helpIcon: () => cy.get('.button-help'),
        chat: {
            chatList: () => cy.get('#listadoChats'),
            showAllBtn: () => cy.get('#btn-gest-com-chat')
        },
        forums: {
            forumList: () => cy.get('#listadoForos'),
            showAllBtn: () => cy.get('#btn-gest-com-foros')
        },
        lastPopupMessages: {
            showAllBtn: () => cy.get('[name="boton-ver-mensajes"]').eq(1)
        },
        lastCommunications: {
            lastCommunicationsList: () => cy.get('#listadoComunicaciones'),
            showAllBtn: () => cy.get('[name="boton-ver-comms"]')
        }

    }

}

module.exports = new TutorCommunicationsPage();