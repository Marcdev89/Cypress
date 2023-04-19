class MMFFPage{

    /* LOCATORS */

    elements ={

    additionalHelp: () => cy.contains("Ayuda adicional"),

    searchCard:{
        code: () => cy.get('#codigoMMFF'),
        name: () => cy.get('#nombreMMFF'),
        btnShowAll: () => cy.get('[title="Ver todo"]'),
        btnSearch: () => cy.get('[title="Buscar"]')
    },

    buttons: {
        export: () => cy.get('#export'),
        newMF: () => cy.get('.button-large')
    },
    
    tableList: (row,col) => cy.get(`[data-index="${row}"] > :nth-child(${col})`),
    tableActions: (row,action) => cy.get(`[data-index="${row}"] > .td-actions > .bta${action} > .icons-tables`),
              /** 
             * Action:
             * 0 --> add/remove UUFF
             * 1 --> Copy
             * 2 --> Delete
            **/ 
    modalConfirm:{
        btnYes: () => cy.get('.modal-body > .card > .card-footer-modal > [title="Sí"]'),
        btnNo: () => cy.get('[title="No"]'),
        btnAccept: () => cy.get('#modalExito > .modal-dialog > .modal-content > .modal-body > form > .card > .card-footer-modal > .btn')
    }
    
    }

    /* FUNCTIONS */

    deleteMF(row){
        this.elements.tableActions(row,2).click();
        this.elements.modalConfirm.btnYes().click()
        this.elements.modalConfirm.btnAccept().click()
    }

    url = () => cy.visit('modulos-formativos')

}

export default new MMFFPage();