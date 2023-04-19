import user from "../../fixtures/userTypes.json";
import LoginPage from "../pagesObject/LoginPage";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import TeachingCentersPage from "../pagesObject/TeachingCentersPage";
import NewTeachingCenterPage from "../pagesObject/NewTeachingCenterPage";
describe('Edit teaching center form tests', function(){
    before(function(){
        //center data
        this.code = NewTeachingCenterPage.creationData[0].required.cif
        this.name = NewTeachingCenterPage.creationData[0].required.centerName
        this.fieldNames = [].concat(
            Object.keys(NewTeachingCenterPage.creationData[0].required),
            Object.keys(NewTeachingCenterPage.creationData[0].other)
        )

        //go to edition of teaching center page
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()

        //center creation
        TeachingCentersPage.removeCenter(this.code, this.name, false) //remove first if possible
        TeachingCentersPage.elements.newCenterBtn().click()
        NewTeachingCenterPage.fillCreateCenterFormAnd('save')
        NewTeachingCenterPage.elements.succesModalBtn().click()
    })

    beforeEach(function(){
        //go to edition of teaching center page
        LoginPage.login(user.admin.name, user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.configuration.teachingCentersLink().click()
        TeachingCentersPage.searchCenter(this.code, this.name, {click_center:true})
        cy.url().should('be.equal',Cypress.config('baseUrl')+NewTeachingCenterPage.elements.urlEdit)
    })
    
    it('1.Form filled with center info', function(){
        NewTeachingCenterPage.shouldFormBeFilled()
    })

    it('2.Cancel button reinitiate form', function(){
        NewTeachingCenterPage.elements.nameInput().type('{selectall}name_changed')
        NewTeachingCenterPage.elements.cancelBtn().click()
        cy.wait(4000)
        NewTeachingCenterPage.shouldFormBeFilled()
    })

    it('3.Save with no changes show success message', function(){
        NewTeachingCenterPage.elements.saveBtn().click()
        NewTeachingCenterPage.elements.succesModal().should('have.text','Datos guardados correctamente')
    })

    let i = 1
    for(let x in NewTeachingCenterPage.creationData[0].required)
    {
        if(x!=='sepe')
        {
            it(`4.${i}.The system notify when required data(${x}) is missing [${i}/8]`, function(){
                NewTeachingCenterPage.clearField(x)
                NewTeachingCenterPage.elements.saveBtn().click()
                if(x==='cif' || x==='country' || x==='province')
                {
                    cy.alertAssert('Debe informar el campo: '+NewTeachingCenterPage.missingDataMess[x])
                }
                else
                {
                    cy.alertAssert('Falta por rellenar el campo: '+NewTeachingCenterPage.missingDataMess[x])
                }
            })
            i++
        }
    }

    //5.The system notify which field is missing when a required field is empty and exists error in optional field

    it('6.Success message when all required fields are filled BUT not all optional fields', function(){
        NewTeachingCenterPage.clearForm()
        NewTeachingCenterPage.fillOnlyRequiredFields(8,'no_submit')
        NewTeachingCenterPage.elements.contactPersonInput().type('{selectall}Persona1')
        NewTeachingCenterPage.elements.saveBtn().click()
        NewTeachingCenterPage.elements.succesModal().should('have.text','Datos guardados correctamente')
    })

    //7.All required fields correctly filled less one filled with invalid data
    //8.All required fields correctly filled BUT optional field filled with invalid data
    //9.NOT all required fields correctly filled AND optional field filled with invalid data

    it('10.Success message when all fields are correctly filled', function(){
        NewTeachingCenterPage.clearForm()
        NewTeachingCenterPage.fillCreateCenterFormAnd('save')
        NewTeachingCenterPage.elements.succesModal().should('have.text','Datos guardados correctamente')
    })
})