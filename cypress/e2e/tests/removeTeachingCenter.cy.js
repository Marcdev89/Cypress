import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"

describe('Remove teaching center / Eliminar centro de impartición', function(){
    beforeEach(function(){
        this.centerName = 'Centro Imparticion'
        this.notAsignedCenterCode = '2'
        this.asignedCenterCode = '1'
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.elements.lookAllBtn().click()
        TeachingCentersPage.elements.teachingCentersList().children()
        .should('not.have.length',1)
    })

    it('1.Cancel the remove action',function(){
        
        TeachingCentersPage.searchCenter(this.notAsignedCenterCode,this.centerName+this.notAsignedCenterCode)
        TeachingCentersPage.elements.removeBtn(0).click()
        TeachingCentersPage.elements.noBtn().click()

        cy.contains(this.centerName+this.notAsignedCenterCode).should('be.visible')
    })

    it('2.Confirm the remove action',function(){
        TeachingCentersPage.removeCenter(this.notAsignedCenterCode,this.centerName+this.notAsignedCenterCode, false)

        cy.contains(this.centerName+this.notAsignedCenterCode).should('not.exist')
    })

    it('3.Try to remove teaching center associated to group',function(){
        TeachingCentersPage.removeCenter(this.asignedCenterCode,this.centerName+this.asignedCenterCode, false, false)

        cy.contains(this.centerName+this.asignedCenterCode).should('exist')
        TeachingCentersPage.elements.successModalText().should('have.text','No se puede eliminar el centro. Existen grupos asociados.')
    })
})