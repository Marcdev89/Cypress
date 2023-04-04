import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import TeachingCentersPage from "../pagesObject/TeachingCentersPage";

describe('Creation of teaching center',()=>{
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.elements.lookAllBtn().click()
        TeachingCentersPage.elements.teachingCentersList().its('length')
        .then( (completeListLength) => {
            this.completeListLength = completeListLength
            cy.log(completeListLength)
        })
        TeachingCentersPage.elements.newCenterBtn().click()
    })

    it('nothing', function(){

    })
})