import DashboardPage from "../pagesObject/DashboardPage";
import LoginPage from "../pagesObject/LoginPage";
import userTypes from "../../fixtures/userTypes.json";
import usersLogin from "../../fixtures/usersLogin.json"

it('as a Administrator, show profile list from dashboard page', () => {
    LoginPage.login(userTypes.admin.name, userTypes.admin.pass)
    DashboardPage.body.administrationCard.profiles().click()
    cy.url().should('include', 'perfiles')
    usersLogin.map((e)=>{
        e.expected === "Superadministrador" ? cy.contains('Superadmin') : cy.contains(e.expected)
    }) 
});