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
    
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeAF(),'afdemo')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameAF(),'Tutorización')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeGroup(),'demo')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameGroup(),'Demo')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible') 

});

it('Show filtered list by Personal Data', () => {
    
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Pepe')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Fernández')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Díaz')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'74863914H')

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

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeAF(),'afdemo')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameAF(),'Tutorización')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.codeGroup(),'demo')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.nameGroup(),'Demo')

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Pepe')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Fernández')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Díaz')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'74863914H')

    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
    cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2099-04-09')

    FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
    FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible') 

});

})

describe('Show communications list as a Tutor', () => { 

    beforeEach(() => {
        LoginPage.login(userTypes.tutor.name, userTypes.tutor.pass)
        TutorHomePage.elements.groupCard.menu.communications().click()
        TutorCommunicationsPage.elements.lastCommunications.showAllBtn().click()
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(2000)
    });

    it('Show full communications list pressing "Ver Todo" button', () => {
    
        FollowUpCommunicationsPage.elements.searchCard.showAllButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().should('be.visible')
       
    });

    it('Show filtered list by Personal Data', () => {
    
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Pepe')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Fernández')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Díaz')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'74863914H')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
       
    });

    it('Show filtered list by Date', () => {
    
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2099-04-09')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
    
    });

    it('Show full filtered list pressing "Buscar" button', () => {

        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.name(),'Pepe')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.firstSurname(),'Fernández')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.secondSurname(),'Díaz')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.documentNumber(),'74863914H')

        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.sinceDate(),'2023-03-09')
        cy.textfield(FollowUpCommunicationsPage.elements.searchCard.toDate(), '2023-04-09')
    
        FollowUpCommunicationsPage.elements.searchCard.searchButton().click()
        FollowUpCommunicationsPage.elements.communicationsList.profileLink().eq(0).should('be.visible')
        
    });
    
})