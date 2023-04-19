import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import NewAFPage from "../pagesObject/NewAFPage";
import AAFFPage from "../pagesObject/AAFFPage";

describe('Show AF List as Administrator', () => { 

    beforeEach(() => {
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.trainingManagementCard.actions().click()
        //Creating a AFTest
        AAFFPage.elements.buttons.newAF().click();
        cy.url().should("contain", "nueva-accion-formativa");
        NewAFPage.newOnlyRequiredFields()
        AAFFPage.url()

    });

    it('Show full list pressing "Ver Todo" button ', () => {
        AAFFPage.elements.buttons.viewAll().click()
        AAFFPage.elements.table.body().should('be.exist')
        AAFFPage.elements.table.rows().should('be.exist')
        //Deleting AFtest
        cy.contains(NewAFPage.name).siblings('.td-actions').find('[title="Eliminar"]').click()
        AAFFPage.elements.alerts.modalDeleteYesButton().click()
        AAFFPage.elements.alerts.modalAcceptButton().click()    
    });

    it.only('Show filtered list pressing "Buscar" button ', () => {
        cy.textfield(AAFFPage.elements.form.code(), NewAFPage.code)
        cy.textfield(AAFFPage.elements.form.name(), NewAFPage.name)
        cy.pickOnSelect(AAFFPage.elements.form.modality(), AAFFPage.elements.form.modalityDropdown(),3)
        AAFFPage.elements.buttons.search().click()
        AAFFPage.elements.table.body().should('be.exist')
        AAFFPage.elements.table.rows().should('be.exist')
        //Deleting AFtest
        cy.contains(NewAFPage.name).siblings('.td-actions').find('[title="Eliminar"]').click()
        AAFFPage.elements.alerts.modalDeleteYesButton().click()
        AAFFPage.elements.alerts.modalAcceptButton().click()
    });
 })