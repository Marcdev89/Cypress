import user from "../../fixtures/userTypes.json";
import LoginPage from "../pagesObject/LoginPage";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import TeachingCentersPage from "../pagesObject/TeachingCentersPage";
import NewTeachingCenterPage from "../pagesObject/NewTeachingCenterPage";
describe('describe', function(){
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
        TeachingCentersPage.elements.centerCodeInput().type( NewTeachingCenterPage.creationData[0].required.cif )
        TeachingCentersPage.elements.centerNameInput().type( NewTeachingCenterPage.creationData[0].required.centerName )
    })
})