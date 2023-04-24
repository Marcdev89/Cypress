import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"
import NewTeachingCenterPage from "../pagesObject/NewTeachingCenterPage"

describe('Create required data', ()=>{
    it('Creating data if not exists...', ()=>{
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        for(let i = 0; i<2; i++)
        {
            TeachingCentersPage.elements.lookAllBtn().click()
            TeachingCentersPage.createCenterIfNotexists( AdminPage, NewTeachingCenterPage, i )
        }
    })
})

describe('Show teaching centers list',function(){
    
    beforeEach(function(){
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
    })

    it("1.Name, code fields and list of centers empty.",function(){
        TeachingCentersPage.elements.centerNameInput().invoke('val').should('equal','')
        TeachingCentersPage.elements.centerCodeInput().invoke('val').should('equal','')
        TeachingCentersPage.elements.teachingCentersList()
        .should('be.visible').and('have.attr','class','no-records-found')
    })

    it('2.Click "See all"("Ver todo") => show all teaching centers in the list', function(){
        TeachingCentersPage.elements.lookAllBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',4)
    })

    it('3.Fields empty and click "Search"("Buscar") => show all teaching centers in the list', function(){
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().should('have.length',4)
    })

    it('4.Not existing code in code field => list of centers empty', function(){
        TeachingCentersPage.elements.centerCodeInput().type('not existing code')
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().eq(0).should('have.text','No se han encontrado resultados')
    })

    it('5.Not existing name in name field => list of centers empty', function(){
        TeachingCentersPage.elements.centerNameInput().type('not existing name')
        TeachingCentersPage.elements.searchBtn().click()

        TeachingCentersPage.elements.teachingCentersList().eq(0).should('have.text','No se han encontrado resultados')
    })
    it('6.Existing code or part of it => list of concerned centers', function(){
        TeachingCentersPage.elements.centerCodeInput()
        .type(NewTeachingCenterPage.creationData[0].required.cif)
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)

        TeachingCentersPage.elements.centerCodeInput().clear()
        .type( NewTeachingCenterPage.creationData[0].required.cif[0] )
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })

    it('7.Existing name or part of it => list of concerned centers', function(){
        TeachingCentersPage.elements.centerNameInput()
        .type( NewTeachingCenterPage.creationData[0].required.centerName )
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)

        TeachingCentersPage.elements.centerNameInput().clear()
        .type( NewTeachingCenterPage.creationData[0].required.centerName.split(' ')[1] )
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })

    it('8.Existing name and code or part of them => list of concerned centers', function(){
        TeachingCentersPage.elements.centerNameInput()
        .type( NewTeachingCenterPage.creationData[0].required.centerName )
        TeachingCentersPage.elements.centerCodeInput()
        .type(NewTeachingCenterPage.creationData[0].required.cif)
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',1)
        
        TeachingCentersPage.elements.centerNameInput().clear()
        .type( NewTeachingCenterPage.creationData[0].required.centerName.split(' ')[1] )
        TeachingCentersPage.elements.centerCodeInput().clear()
        .type( NewTeachingCenterPage.creationData[0].required.cif[0] )
        TeachingCentersPage.elements.searchBtn().click()
        TeachingCentersPage.elements.teachingCentersList().should('have.length',2)
    })
})