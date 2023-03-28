class MailboxPage
{
    elements = {
        breadCrumb: {
            home:()=>cy.get('.breadcrumb > :nth-child(1) > .link'),
            group:()=>cy.get('#grupo'),
            active:()=>cy.get('.breadcrumb > .active')
        },
        menu:{
            compose: ()=> cy.get('.sidebar-email-first-block'),
            inbox: ()=> cy.get('#carpetas').eq(0),
            sent: ()=> cy.get('#carpetas').eq(1),
            trash: ()=> cy.get('#carpetas').eq(2),
            newFolder: ()=> cy.get('.row > [title="Nueva carpeta"]'),
            manageFolders: ()=> cy.get('.row > [title="Gestionar carpetas"]'),
            createdFolder: (name)=>cy.get(`#carpetas img[title="${name}"]`).parent()
        },
        searchInput: ()=> cy.get('#buscarCorreo'),
        searchBtn: ()=> cy.get('#fBusquedaCorreo button'),
        refreshIcon: ()=> cy.get('[title="Recargar"]'),
        moveAtIcon: ()=> cy.get('.row > :nth-child(1) > [title="Mover a..."]'),
        trashIcon: ()=> cy.get(':nth-child(1) > [title="Eliminar"]'),
        markAsReadIcon: ()=> cy.get('[title="Marcar como leído"]'),
        markAsUnreadIcon: ()=> cy.get('[title="Marcar como no leído"]'),
        selectAllCheckbox: ()=> cy.get('#table [name="btSelectAll"]'),
        mailList:{
            checkbox_nb: (nb)=>{ return cy.get('#table > tbody > tr').eq(nb).find('.bs-checkbox > input') },
            mail_nb: (nb)=>{ return cy.get('#table > tbody > tr').eq(nb) }
        },
        newFolderModal:{
            nameInput: ()=> cy.get('#newFolder .modal-body input',{timeout:8000}),
            saveBtn: ()=> cy.get('#guardar'),
            cancelBtn: ()=> cy.get('#newFolder',{timeout:8000}).contains('Cancelar')
        }
        //TODO Modals => 'REDACTAR', 'NUEVA_CARPETA', 'GESTIONAR_CARPETAS'
    }
}
export default new MailboxPage;