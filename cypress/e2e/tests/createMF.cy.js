import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json"
import DashboardPage from "../pagesObject/DashboardPage";
import MMFFPage from "../pagesObject/MMFFPage";
import NewMFPage from "../pagesObject/NewMFPage";

describe('Creating a new formative module', () => { 

    beforeEach(() => {
        LoginPage.login(user.admin.name,user.admin.pass)
        DashboardPage.elements.trainingManagementCard.modules().click()
        MMFFPage.elements.buttons.newMF().click()
        cy.url().should('include', 'nuevo-modulo-formativo')
    });
    
    it('Create a new module (all fields)', () => {
       
        cy.textfield(NewMFPage.elements.form.code(),'123test')
        cy.textfield(NewMFPage.elements.form.name(),'Módulo formativo test')
        NewMFPage.modalitySelect(1,2);
        NewMFPage.modalitySelect(2,4);
        cy.textfield(NewMFPage.elements.form.days(), 2000)
        cy.textfield(NewMFPage.elements.form.hours(), 2000)
        cy.textfield(NewMFPage.elements.form.hoursTeleform(), 2000)
        cy.textfield(NewMFPage.elements.form.hoursFaceToFace(), 2000)
        cy.textfield(NewMFPage.elements.form.hoursEvaluation(), 2000)
        cy.typeOnIframe(NewMFPage.elements.form.tinyIFrame(),'Typing on Iframe')
        NewMFPage.elements.form.buttonSave().click()
        cy.alertAssert('Módulo guardado correctamente')
        MMFFPage.url()
        MMFFPage.elements.tableList(0,1).should('contain.text','123test')
        MMFFPage.deleteMF(0)
       
    });

    // Happy path --> Currently, we can create >1 MF with same data
    // it('Trying to create a new module that already exist', () => {
    //     NewMFPage.createNewMF('123','Módulo formativo test',2)
    //     cy.alertAssert('El código y/o nombre del módulo ya existe')       
    // })

    it('Create a new module with only required fields', () => {
        NewMFPage.createNewMF('123test','Required',3)
        cy.alertAssert('Módulo guardado correctamente')
        MMFFPage.url()
        MMFFPage.elements.tableList(0,1).should('contain.text','123test')
        MMFFPage.deleteMF(0)
    });

    it('Trying to create module with no code', () => {
        NewMFPage.createNewMF('{del}','M',2)
        cy.alertAssert('Debe informar el campo: Código')
    });

    it('Trying to create module with no name', () => {
        NewMFPage.createNewMF('123','{del}',2)
        cy.alertAssert('Debe informar el campo: Denominación')
    });

    it('Trying to create module with no modality', () => {
        NewMFPage.createNewMF('123','M',1)
        cy.alertAssert('Debe informar el campo: Modalidad')
    });

 })