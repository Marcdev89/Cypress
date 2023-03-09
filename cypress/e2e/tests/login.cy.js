import usersLogin from '../../fixtures/usersLogin.json';
import LoginPage from "../pagesObject/LoginPage";

//alumno first time /informacion-general -- since next --> /formacion  (before belong a group: /mis-cursos)

describe('Login with different roles', () => { 

        usersLogin.map((e)=>{
            it(`'Login as a ${e.type} rol`, () => {
                LoginPage.login(e.username,e.password)           
                cy.url().should('include', e.path)
                cy.contains(e.expected, { matchCase: false })              
            });
        })
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

