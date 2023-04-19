import usersLogin from '../../fixtures/usersLogin.json';
import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";

describe('Login with different roles', () => { 

        usersLogin.map((e)=>{     
            //sadmin and auditor are not created yet
          if (e.username !== 'sadminCampus' && e.username !=='auditorCampus'){
            it(`'Login as a ${e.type} rol`, () => {
                LoginPage.login(e.username,e.password)
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(2000) //needed to charge new url path
                e.username === 'alumnoCampus' 
                ? 
                               cy.url().then(url => {
                                url.includes('mis-cursos') ? e.path = 'mis-cursos' 
                                :                          
                                url.includes('informacion-general') ? e.path = 'informacion-general' 
                                :                             
                                cy.url().should('include', e.path)
                                })                          
                : 
                            cy.url().should('include', e.path)
                cy.contains(e.expected, { matchCase: false })              
            })
         
          }
        });
})   

describe('Login fails', ()=>{

    it('Incorrect user: should show the user does not exist alert', () => {
        LoginPage.login('ad','min')
        LoginPage.elements.errorAlert().should('have.text', 'El usuario no existe')
    });

    it('Incorrect password: should show the password is incorrect alert', () => {
        LoginPage.login(user.admin.name,'min')
        LoginPage.elements.errorAlert().should('have.text', 'La contraseña no es correcta')     
    });

    it('Empty fields: should show requieres fields alert', ()=>{   
        LoginPage.login('{del}','{del}')
        LoginPage.elements.errorAlert().should('have.text', 'Faltan datos obligatorios')
    })

})