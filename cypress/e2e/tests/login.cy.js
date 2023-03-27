import usersLogin from '../../fixtures/usersLogin.json';
import LoginPage from "../pagesObject/LoginPage";

describe('Login with different roles', () => { 

        usersLogin.map((e)=>{         
            it(`'Login as a ${e.type} rol`, () => {
                LoginPage.login(e.username,e.password)
                e.username === 'alumna' 
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
         
            });
        })   

describe('Login fails', ()=>{

    it('Incorrect user: should show the user does not exist alert', () => {
        LoginPage.login('ad','min')
        LoginPage.elements.errorAlert().should('have.text', 'El usuario no existe')
    });

    it('Incorrect password: should show the password is incorrect alert', () => {
        LoginPage.login('AdministradorQA','min')
        LoginPage.elements.errorAlert().should('have.text', 'La contraseña no es correcta')
        
    });

    it('Empty fields: should show requieres fields alert', ()=>{   
        LoginPage.login('{del}','{del}')
        LoginPage.elements.errorAlert().should('have.text', 'Faltan datos obligatorios')
    })

})