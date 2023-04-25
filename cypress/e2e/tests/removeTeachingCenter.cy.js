import user from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import TeachingCentersPage from "../pagesObject/TeachingCentersPage"
import AdminPage from "../pagesObject/AdminPage"
import NewTeachingCenterPage from "../pagesObject/NewTeachingCenterPage"
import GroupsPage from "../pagesObject/GroupsPage"
import AsignTeachingCenterPage from "../pagesObject/AsignTeachingCenterPage"

describe('Create asigned group', function(){
    beforeEach(function(){
        this.isCreatedCenter = undefined;
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
    })

    it('Creating center if not exists',function(){
        AdminPage.elements.configuration.teachingCentersLink().click()
        for(let i = 0; i<2; i++)
        {
            TeachingCentersPage.elements.lookAllBtn().click()
            TeachingCentersPage.createCenterIfNotexists( AdminPage, NewTeachingCenterPage, i )
        }
    })

    
    it('Asign center to group if not asigned', function(){
        AdminPage.elements.groups.groupsLink().click()
        GroupsPage.elements.btn.seeAll().click()
        GroupsPage.elements.group.btn.asignCenter('20198000080667').click()
        cy.url().should('be.eq',Cypress.config('baseUrl')+AsignTeachingCenterPage.elements.url)
        AsignTeachingCenterPage.isAsignableCenter(NewTeachingCenterPage.creationData[0].required.centerName)
        .then((isAsigned)=>{
            cy.log('ASIGNED?:'+isAsigned)
            if(!isAsigned)
            {
                AsignTeachingCenterPage.elements.center
                .checkBox(NewTeachingCenterPage.creationData[0].required.centerName).click()
                AsignTeachingCenterPage.elements
                .centerTypeSelect(AsignTeachingCenterPage.creationData[0].required.centerType)
                AsignTeachingCenterPage.elements.input.initDate()
                .type(AsignTeachingCenterPage.creationData[0].required.initDate)
                AsignTeachingCenterPage.elements.input.endDate()
                .type(AsignTeachingCenterPage.creationData[0].required.endDate)
                AsignTeachingCenterPage.elements.btn.asign().click()
            }
        })
    })
})

describe('Remove teaching center', function(){
    beforeEach(function(){
        this.asignedCenterName = NewTeachingCenterPage.creationData[0].required.centerName
        this.notAsignedCenterName = NewTeachingCenterPage.creationData[1].required.centerName
        this.asignedCenterCode = NewTeachingCenterPage.creationData[0].required.cif
        this.notAsignedCenterCode = NewTeachingCenterPage.creationData[1].required.cif
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.elements.lookAllBtn().click()
        TeachingCentersPage.elements.teachingCentersList().children()
        .should('not.have.length',1)
    })

    it('1.Cancel the remove action',function(){
        
        TeachingCentersPage.searchCenter(this.notAsignedCenterCode,this.notAsignedCenterName)
        TeachingCentersPage.elements.removeBtn(0).click()
        TeachingCentersPage.elements.noBtn().click()

        cy.contains(this.notAsignedCenterName).should('be.visible')
    })

    it('2.Confirm the remove action',function(){
        TeachingCentersPage.removeCenter(this.notAsignedCenterCode,this.notAsignedCenterName, false)

        cy.contains(this.notAsignedCenterName).should('not.exist')
    })

    it('3.Try to remove teaching center associated to group',function(){
        TeachingCentersPage.removeCenter(
            NewTeachingCenterPage.creationData[0].required.cif,
            NewTeachingCenterPage.creationData[0].required.centerName,
            false, false
        )

        cy.contains(NewTeachingCenterPage.creationData[0].required.centerName).should('exist')
        TeachingCentersPage.elements.successModalText().should('have.text','No se puede eliminar el centro. Existen grupos asociados.')
    })
})