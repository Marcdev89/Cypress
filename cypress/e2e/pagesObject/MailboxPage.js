import TinyTextEditor from "../pagesObject/TinyTextEditor"

class MailboxPage
{
    elements = {
        textEditor: new TinyTextEditor('#enviarCorreo'),
        breadCrumb: {
            home:()=> cy.get('.breadcrumb > :nth-child(1) > .link'),
            group:()=> cy.get('#grupo'),
            active:()=> cy.get('.breadcrumb > .active')
        },
        menu:{
            compose: ()=> cy.get('.sidebar-email-first-block'),
            inbox: ()=> cy.get('#carpetas').eq(0),
            sent: ()=> cy.get('#carpetas').eq(1),
            trash: ()=> cy.get('#carpetas').eq(2),
            newFolder: ()=> cy.get('.row > [title="Nueva carpeta"]'),
            manageFolders: ()=> cy.get('.row > [title="Gestionar carpetas"]'),
            createdFolder: (name)=>cy.get(`#carpetas img[title="${name}"]`)//.parent()
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
            checkbox_nb: (nb)=> cy.get('#table > tbody > tr').eq(nb).find('.bs-checkbox > input'),
            mail_nb: (nb)=> cy.get('#table > tbody > tr').eq(nb)
        },
        newFolderModal:{
            nameInput: ()=> cy.get('#newFolder .modal-body input',{timeout:8000}),
            saveBtn: ()=> cy.get('#guardar'),
            cancelBtn: ()=> cy.get('#newFolder',{timeout:8000}).contains('Cancelar')
        },
        manageFoldersModal:{ //checked
            cancelBtn: ()=> cy.get(''),
            removeFolderBtn_nb: (nb)=> cy.get('#listadoCarpetas > .folder-first-text > [alt="Eliminar"]').eq(nb),
            removeFolderBtn_name: (name)=> cy.get(`#listadoCarpetas > .folder-first-text [title="${name}"]`).siblings('[alt="Eliminar"]'),
            yesBtn: ()=> cy.get('#modalConfirmar .modal-body [data-field="si"]'),
            noBtn: ()=> cy.get('#modalConfirmar .modal-body [data-field="no"]'),
            closeBtn: ()=> cy.get('#modalConfirmar [aria-label="Close"]')
        },
        composeModal:{
            recipientsField:{ //checked
                toggleDropdownBtn: ()=> cy.get('[data-id="destinatario"]'),
                markAllBtn: ()=> cy.get('[data-id="destinatario"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="destinatario"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            ccField:{ //checked
                toggleDropdownBtn: ()=> cy.get('[data-id="cc"]'),
                markAllBtn: ()=> cy.get('[data-id="cc"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="cc"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="cc"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="cc"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="cc"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            ccoField:{ //to check
                toggleDropdownBtn: ()=> cy.get('[data-id="cco"]'),
                markAllBtn: ()=> cy.get('[data-id="cco"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="cco"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="cco"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="cco"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="cco"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            subjectField: ()=> cy.get("#asunto"), //to check
            attachmentField: ()=> cy.get('input[type="file"]'), //to check
            priorityField:{ //to check
                toggleDropdownBtn: ()=> cy.get('[data-id="prioridad"]'),
                allOptions: ()=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            externCopyCheckbox: ()=> cy.get('#copiaExterna'), //to check
            receiptAcknowledgmentCheckBox: ()=> cy.get('#acuseRecibo'), //to check
            cancelBtn: ()=> cy.get('#enviar').siblings('[title="Cancelar"]'), //to check
            sendBtn: ()=> cy.get('#enviar') //to check
        }
    }
}
export default new MailboxPage;