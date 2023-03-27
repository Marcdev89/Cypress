import LoginPage from "../pagesObject/LoginPage";
import userTypes from "../../fixtures/userTypes.json"
import AdminPage from "../pagesObject/AdminPage";
import DashboardPage from "../pagesObject/DashboardPage";
import FollowUpCommunicationsPage from "../pagesObject/FollowUpCommunicationsPage";
import TutorHomePage from "../pagesObject/TutorHomePage";
import TutorCommunicationsPage from "../pagesObject/TutorCommunicationsPage";

describe('Show communications list as a Administrator', () => { 

    beforeEach(() => {
        LoginPage.login(userTypes.admin.name, userTypes.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.communications.followUpCommunicationsLink().click({force: true})

    }); 

it('Show full communications list pressing "Ver Todo" button', () => {
    
    FollowUpCommunicationsPage.elements.searchCard.showAllButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().should('be.visible')
   
});

it('Show filtered list by AF', () => {
    
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeAF(),'002')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameAF(),'Accion Formativa 2: English')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeGroup(),'002')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameGroup(),'English group')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible') 

});

it('Show filtered list by Personal Data', () => {
    
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Kevin')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Alumno')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Regular')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'89720897J')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
   
});

it('Show filtered list by Date', () => {
    
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2023-04-09')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')

});

it('Show full filtered list pressing "Buscar" button', () => {
    
    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeAF(),'002')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameAF(),'Accion Formativa 2: English')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeGroup(),'002')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameGroup(),'English group')

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Kevin')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Alumno')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Regular')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'89720897J')

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2023-04-09')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible') 

});

})

describe('Show communications list as a Tutor', () => { 

    beforeEach(() => {
        LoginPage.login(userTypes.tutor.name, userTypes.tutor.pass)
        TutorHomePage.elements.groupCard.menu.communications().click()
        TutorCommunicationsPage.elements.lastCommunications.showAllBtn().click()
        cy.wait(2000)
    });

    it('Show full communications list pressing "Ver Todo" button', () => {
    
        FollowUpCommunicationsPage.elements.searchCard.showAllButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().should('be.visible')
       
    });

    it('Show filtered list by Personal Data', () => {
    
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Kevin')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Alumno')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Regular')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'89720897J')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
       
    });

    it('Show filtered list by Date', () => {
    
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2023-04-09')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
    
    });

    it('Show full filtered list pressing "Buscar" button', () => {

        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Kevin')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Alumno')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Regular')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'89720897J')

        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2023-04-09')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
        
    });
    
})