// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//// const users = require('../fixtures/usersLogin.json')

// users.forEach(user => {
//     it(user.testname, () => {
//         cy.login(user.username,user.password,user.expected)
//     });

    
// });
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// import LocatorsLoginPage from '../e2e/LocatorsLoginPage'
// import LocatorsMyInfoPage from '../e2e/LocatorsMyInfoPage'


// Cypress.Commands.add('login', (Username, password, title) => { 
    
//     const locators = new LocatorsLoginPage()
//     locators.url()
//     locators.fillUsername().type(Username)
//     locators.fillPassword().type(password)
//     locators.btnLogin().click()
//     cy.contains(title)
//  })

//  Cypress.Commands.add('fullname', (name, surname1, surname2, nickname) =>{
//     const field = new LocatorsMyInfoPage()
//     field.name().clear().type(name)
//     field.surname1().clear().type(surname1)
//     field.surname2().clear().type(surname2)
//     field.nickname().clear().type(nickname)
//     //cy.get(oldtext).should('have.text', newtext)
//  })

 Cypress.Commands.add('textfield', (field, newtext)=>{
    cy.get(field).clear().type(newtext)
 })