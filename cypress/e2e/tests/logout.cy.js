import usersLogin from '../../fixtures/usersLogin.json';
import HeaderPage from '../pagesObject/HeaderPage';
import LoginPage from "../pagesObject/LoginPage";

describe('Login and logout with different roles', () => { 

        usersLogin.map((e)=>{
            it(`'Login and Logout as a ${e.type} rol`, () => {
                LoginPage.login(e.username,e.password)           
                cy.contains(e.expected, { matchCase: false })  
                HeaderPage.logOutFunction()
                LoginPage.elements.loginBtn().should('have.text', 'Acceder')
            });
        })
    })

