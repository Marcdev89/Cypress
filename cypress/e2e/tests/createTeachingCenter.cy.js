import user from "../../fixtures/userTypes.json";
import LoginPage from "../pagesObject/LoginPage";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import TeachingCentersPage from "../pagesObject/TeachingCentersPage";
import NewTeachingCenterPage from "../pagesObject/NewTeachingCenterPage";

describe('Creation of teaching center',()=>{
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.elements.lookAllBtn().click()
        TeachingCentersPage.elements.newCenterBtn().click()
        cy.url().should('eq',Cypress.config().baseUrl+NewTeachingCenterPage.elements.url)
    })

    it('1.The admin do not do anything', function(){
        NewTeachingCenterPage.shouldFormBeEmpty()
    })

    it('2.The admin click on cancel', function(){
        NewTeachingCenterPage.fillCreateCenterFormAnd('cancel')
        NewTeachingCenterPage.shouldFormBeEmpty()
    })

    it('3.The admin do not fill any field and click [save]', function(){
        NewTeachingCenterPage.elements.saveBtn().click()
        cy.alertAssert('Falta por rellenar el campo: Nombre del centro')
    })

    it('4.The admin fill correctly only a part of the required fields', function(){
        cy.wrap(NewTeachingCenterPage.fillOnlyRequiredFields(7)).then((emptyFields)=>{
            cy.alertAssert('Falta por rellenar el campo: Teléfono')
            NewTeachingCenterPage.elements.contactPhoneInput().should('have.text', emptyFields.contactPhone)
        })
    })

    it('5.The admin no fill all no required fields (All required fields correctly filled)', function(){
        NewTeachingCenterPage.fillOnlyRequiredFields(8)
        NewTeachingCenterPage.elements.succesModal().should('have.text','Datos guardados correctamente')
    })

    /* Out of happy path
    it('6.The admin fill a required field with invalid data (All other required fields correctly filled)',function(){
        NewTeachingCenterPage.fillOnlyRequiredFields(7,'no_submit')
        NewTeachingCenterPage.elements.contactPhoneInput().type('<script>alert("Forbidden data")</script>')
        NewTeachingCenterPage.elements.saveBtn().click()
        cy.alertAssert('Falta por rellenar el campo: Teléfono')
    })

    it('7.The admin fill a required field with invalid data (Not all required fields filled)', function(){
        NewTeachingCenterPage.fillOnlyRequiredFields(5,'no_submit')
        NewTeachingCenterPage.elements.contactPhoneInput().type('<script>alert("Forbidden data")</script>')
        NewTeachingCenterPage.elements.saveBtn().click()
        cy.alertAssert('Debe informar el campo: Provincia')
    })

    it('8.The admin fill a no required field with invalid data (All required fields filled)', function(){
        NewTeachingCenterPage.fillOnlyRequiredFields(8,'no_submit')
        NewTeachingCenterPage.elements.businessNameInput().type('<script>alert("Forbidden data")</script>')
        NewTeachingCenterPage.elements.saveBtn().click()
        cy.alertAssert('Debe informar el campo: Razón social')
    })

    it('9.The admin fill a no required field with invalid data (Not all required fields filled)', function(){
        NewTeachingCenterPage.fillOnlyRequiredFields(6,'no_submit')
        NewTeachingCenterPage.elements.businessNameInput().type('<script>alert("Forbidden data")</script>')
        NewTeachingCenterPage.elements.saveBtn().click()
        cy.alertAssert('Falta por rellenar el campo: Email')
    })
    */

    it('10.The admin fill all fields correctly', function(){
        NewTeachingCenterPage.fillCreateCenterFormAnd('save',1)
        NewTeachingCenterPage.elements.succesModal().should('have.text','Datos guardados correctamente')
    })
})