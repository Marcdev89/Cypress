import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"

describe('Remove teaching center / Eliminar centro de impartición', function(){
    beforeEach(function(){
        LoginPage.login('administradorQA', 'W#m0EB3%7Occ')
        cy.wait(4000)
        DashboardPage.elements.nCampusCard.nCampus().click()
        cy.wait(2500)
        AdminPage.elements.configuration.teachingCentersLink().click()
        cy.wait(2500)
        TeachingCentersPage.elements.lookAllBtn().click()
    })
    it('Cancel the remove action',function(){
        TeachingCentersPage.elements.removeBtn(0).click()
        TeachingCentersPage.elements.noBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',5)
        cy.contains('mi_nombre').should('be.visible')
    })

    it('Confirm the remove action',function(){
        TeachingCentersPage.elements.removeBtn(0).click()
        TeachingCentersPage.elements.yesBtn().click()
        TeachingCentersPage.elements.acceptBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',4)
        cy.contains('mi_nombre').should('not.exist')
    })

    it('Try to remove teaching center associated to group',function(){
        TeachingCentersPage.elements.removeBtn(3).click()
        TeachingCentersPage.elements.yesBtn().click()
        TeachingCentersPage.elements.acceptBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',4)
        cy.contains('Lo Principal').should('be.visible')
    })
})