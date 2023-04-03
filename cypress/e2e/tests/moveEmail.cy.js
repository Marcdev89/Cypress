import users from "../../fixtures/userTypes.json"
import LoginPage from "../pagesObject/LoginPage"
import DashboardPage from "../pagesObject/DashboardPage"
import AdminPage from "../pagesObject/AdminPage"
import TutorHomePage from "../pagesObject/TutorHomePage"
import MailboxPage from "../pagesObject/MailboxPage"

//TODO WHEN CREATED TEST => CREATION OF AF, CONVOCATORIA, GRUPO and MATRICULA
describe(`Move email to other directory`, function(){
    new Map(Object.entries(users)).forEach((user, profile)=>{
        it(`Moved email in directory 'newDirectory' of ${profile}`, function(){
            LoginPage.login(user.name, user.pass)
            switch(profile)
            {
                case 'admin':
                    DashboardPage.elements.nCampusCard.nCampus().click()
                    AdminPage.elements.icons.mailLink().click()
                    break;

                case 'tutor':
                    TutorHomePage.elements.groupCard.menu.mail().eq(0).click()
                    MailboxPage.elements.mailList.self().should('be.visible').then(()=>{
                        MailboxPage.elements.mailList.mail_infos('','QA qa qa','').click()
                    })
                    
                    
                    cy.pause()
                    break;
                
                case 'alumno':
                    break;
                /*
                case 'auditor':
                    break;*/
            }
        })
    })
})