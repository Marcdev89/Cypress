import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json"
import DashboardPage from "../pagesObject/DashboardPage";
import MMFFPage from "../pagesObject/MMFFPage";
import NewMFPage from "../pagesObject/NewMFPage";

    beforeEach(() => {
        LoginPage.login(user.admin.name,user.admin.pass)
        DashboardPage.elements.trainingManagementCard.modules().click()       
    });

it('Deleting a MF as a Administrator', () => {
    //creating a MF first of all
   MMFFPage.elements.buttons.newMF().click()
   cy.url().should('include','nuevo-modulo-formativo')
   NewMFPage.createNewMF('123test','Required',3)
   cy.alertAssert('Módulo guardado correctamente')
   //Searching and deleting the MF
   MMFFPage.url()
   MMFFPage.deleteMF(0)
   MMFFPage.elements.tableList(0,1).should('not.have.value', '123test')  
});  

it('Trying to delete a MF but it belongs to AF', () => {
    MMFFPage.elements.searchCard.btnShowAll().click()
    cy.contains('MF1018_2 Intervención en la atención sociosanitaria en instituciones').siblings('.td-actions').find('[title="Eliminar"]').click()
    MMFFPage.elements.modalConfirm.btnYes().click()
    cy.get('#cuerpoModal').should('have.text', 'El módulo formativo no puede estar asignado a ninguna acción formativa')
});