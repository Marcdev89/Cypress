import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"

describe('Show teaching centers list',function(){

    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        cy.wait(4000)
        DashboardPage.elements.nCampusCard.nCampus().click()
        cy.wait(2500)
        AdminPage.elements.configuration.teachingCentersLink().click()
    })

    it("1. scenario: Name, code fields and list of centers empty.",function(){
        TeachingCentersPage.elements.centerNameInput().invoke('val').should('equal','')
        TeachingCentersPage.elements.centerCodeInput().invoke('val').should('equal','')
        TeachingCentersPage.elements.teachingCentersList().should('have.length',0)
    })

    it('2. scenario: Click "See all"("Ver todo") => show all teaching centers in the list', function(){
        TeachingCentersPage.elements.lookAllBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',5)
    })

    it('3. scenario: Fields empty and click "Search"("Buscar") => show all teaching centers in the list',function(){
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',5)
    })

    it('4. scenario: Not existing code in code field => list of centers empty',function(){
        TeachingCentersPage.elements.centerCodeInput().type('not existing code')
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().eq(0).should('have.text','No se han encontrado resultados')
    })

    it('5. scenario: Not existing name in name field => list of centers empty',function(){
        TeachingCentersPage.elements.centerNameInput().type('not existing name')
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().eq(0).should('have.text','No se han encontrado resultados')
    })
    it('6. scenario: Existing code or part of it => list of concerned centers',function(){
        TeachingCentersPage.elements.centerCodeInput().type('12345689')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)

        TeachingCentersPage.elements.centerCodeInput().clear().type('89')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })

    it('7. scenario: Existing name or part of it => list of concerned centers',function(){
        TeachingCentersPage.elements.centerNameInput().type('mi_nombre')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)

        TeachingCentersPage.elements.centerNameInput().clear().type('nombre')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })

    it('8. scenario: Existing name and code or part of them => list of concerned centers',function(){
        TeachingCentersPage.elements.centerNameInput().type('nombre')
        TeachingCentersPage.elements.centerCodeInput().type('1234567890')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)

        TeachingCentersPage.elements.centerNameInput().clear().type('n')
        TeachingCentersPage.elements.centerCodeInput().clear().type('89')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })
})
        TeachingCentersPage.elements.centerNameInput().clear().type('n')
        TeachingCentersPage.elements.centerCodeInput().clear().type('89')
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })
})