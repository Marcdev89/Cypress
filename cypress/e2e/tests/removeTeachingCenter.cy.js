import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"

describe('Remove teaching center / Eliminar centro de impartición', function(){
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.elements.lookAllBtn().click()
        TeachingCentersPage.elements.teachingCentersList().its('length').should('be.gte',1)
        .then( (completeListLength) => {
            this.completeListLength = completeListLength
        })
    })

    it('Cancel the remove action',function(){
        
        TeachingCentersPage.elements.removeBtn(1).click()
        TeachingCentersPage.elements.noBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',this.completeListLength)
        cy.contains('mi_nombre').should('be.visible')
    })

    it('Confirm the remove action',function(){
        TeachingCentersPage.elements.removeBtn(3).click()
        TeachingCentersPage.elements.yesBtn().click()
        TeachingCentersPage.elements.acceptBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',this.completeListLength-1)
        cy.contains('CentroMagico').should('not.exist')
    })

    it('Try to remove teaching center associated to group',function(){
        TeachingCentersPage.elements.removeBtn(0).click()
        TeachingCentersPage.elements.yesBtn().click()
        TeachingCentersPage.elements.acceptBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',this.completeListLength)
        cy.contains('Lo Principal').should('be.visible')
    })
})