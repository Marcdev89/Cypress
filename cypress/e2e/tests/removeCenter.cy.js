import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"

describe('Remove teaching center / Eliminar centro de impartición', function(){
    beforeEach(function(){
        LoginPage.login('administradorQA', 'W#m0EB3%7Occ')
        cy.wait(4000)
        DashboardPage.clickNcampus()
        cy.wait(2000)
        TeachingCentersPage.goTo()
        cy.wait(2000)
        TeachingCentersPage.clickLookAll()
        TeachingCentersPage.clickTrash()
    })
    it('Cancel the remove action',function(){
        TeachingCentersPage.clickNo()
    })

    it('Confirm the remove action',function(){
        TeachingCentersPage.clickYes()
    })
})