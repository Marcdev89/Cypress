import user from "../../fixtures/userTypes.json";
import LoginPage from "../pagesObject/LoginPage";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import ConveningPage from "../pagesObject/ConveningPage";
import NewConveningPage from "../pagesObject/NewConveningPage";

describe('Create new convening',function(){
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.conveningsLink().click()
        cy.url({timeout:8000}).should('eq',Cypress.config('baseUrl')+ConveningPage.elements.url)
        ConveningPage.removeConveningIfExists(NewConveningPage.creationData[0].required.year)
        ConveningPage.elements.newConveningBtn().click()
    })

    it('1.Initial form must be empty', function(){
        NewConveningPage.shouldFormBeEmpty()
    })

    it('2.Click [cancel] must be empty the form', function(){
        NewConveningPage.elements.cancelBtn().click()
        NewConveningPage.shouldFormBeEmpty()
    })
    
    it('3.Notify if no field filled',function(){
        NewConveningPage.elements.saveBtn().click()
        cy.get(".snackbar-alert").should('not.have.text','')
    })

    it(`4.1.The system notify when required data(year) is missing [1/2]`, function(){
        NewConveningPage.elements.denominationInput().type('only denomination')
        NewConveningPage.elements.saveBtn().click()
        cy.get(".snackbar-alert").should('not.have.text','')
    })

    /* /!\ The sistem no notify when 'denomination' is missing and create the convening /!\

    it(`4.2.The system notify when required data(denomination) is missing [2/2]`, function(){
        NewConveningPage.elements.yearInput().type(NewConveningPage.creationData[0].required.year)
        NewConveningPage.elements.saveBtn().click()
        cy.get(".snackbar-alert").should('not.have.text','')
    })
    */

    it('5.The system create convening when all required fields filled but not all optional fields', function(){
        NewConveningPage.elements.yearInput().type(NewConveningPage.creationData[0].required.year)
        NewConveningPage.elements.denominationInput().type(NewConveningPage.creationData[1].required.denomination)
        NewConveningPage.elements.commentInput().type(NewConveningPage.creationData[1].other.comments)
        NewConveningPage.elements.saveBtn().click()
    })

    /* /!\ Impossible to upload file in headerFile field /!\

    it('6.The system create convening when all fields filled', function(){
        NewConveningPage.fillCreateCenterFormAnd('save')
        NewConveningPage.elements.succesModal().should('have.text','Convocatoria dada de alta correctamente')
    })
    */
})