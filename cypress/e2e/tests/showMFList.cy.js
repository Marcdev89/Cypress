import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json"
import DashboardPage from "../pagesObject/DashboardPage";
import MMFFPage from "../pagesObject/MMFFPage";
import NewMFPage from "../pagesObject/NewMFPage";

describe('Show MF List as a Administrator', () => { 

    beforeEach(() => {
        LoginPage.login(user.admin.name,user.admin.pass)
        DashboardPage.elements.trainingManagementCard.modules().click()
        cy.url().should('include', 'modulos-formativos')
    });

    it('Show full list pressing "Ver todo" button', () => {
        MMFFPage.elements.searchCard.btnShowAll().click()
        MMFFPage.elements.tableList(0,1).should('be.visible')     
    });

    it('Show a filtered list pressing "Buscar" button', () => {
        //creating a MF first of all
        MMFFPage.elements.buttons.newMF().click()
        cy.url().should('include','nuevo-modulo-formativo')
        NewMFPage.createNewMF('123test','Required',3)
        cy.alertAssert('Módulo guardado correctamente')
        //Searching the new MF
        MMFFPage.url()
        cy.textfield(MMFFPage.elements.searchCard.code(), '123test')
        cy.textfield(MMFFPage.elements.searchCard.name(), 'Required')
        MMFFPage.elements.searchCard.btnSearch().click()
        MMFFPage.elements.tableList(0,1).should('be.visible')
        //Deleting the MF
        MMFFPage.deleteMF(0)
        
    });

 })