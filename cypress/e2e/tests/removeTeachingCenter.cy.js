import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"

describe('Remove teaching center / Eliminar centro de impartición', function(){
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        cy.wait(4000)
        DashboardPage.elements.nCampusCard.nCampus().click()
        cy.wait(2500)
        AdminPage.elements.configuration.teachingCentersLink().click()
        cy.wait(2500)
        TeachingCentersPage.elements.lookAllBtn().click()
        cy.wait(500)
        TeachingCentersPage.elements.teachingCentersList().its('length')
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