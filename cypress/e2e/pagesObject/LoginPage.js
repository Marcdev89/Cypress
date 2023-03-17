class LoginPage{

    elements = {
        url: () => cy.visit('/'),
        usernameInput: () => cy.get('#input-user'),
        passwordInput: () => cy.get('#input-password'),
        loginBtn: () => cy.get('#button_login'),
        errorMessage: () => cy.contains('El usuario no existe'),
        errorAlert: ()=> cy.get(".snackbar-alert"),
        forgotpass: () => cy.get('#recuperarContrasena'),
        formLogin: () => cy.get('#form_login')
    }

    firstTime = {

        checkBox1: () => cy.get('#aceptarAviso') ,
        checkBox2: () => cy.get('#aceptarPrivacidad'),
        accept: () => cy.get('#aceptarCondiciones'),
        vamos: () => cy.get('#btn-tour-ini'),
        noThx: () => cy.get('[title="No, gracias"]')

    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    submitLogin(){
        this.elements.formLogin().submit();
    }

    login(username, password){
        cy.intercept({
            url:'*', method: 'POST'},(req)=>{
                if(req.headers['authorization']!==undefined)
                {
                    req.headers['Authorization']=req.headers['authorization']
                }                  
            }).as('all')
        this.elements.url();
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password)
        this.elements.loginBtn().click();
    }

    acceptTerms(){

        this.firstTime.checkBox1().check()
        this.firstTime.checkBox2().check()
        this.firstTime.accept().click()
        this.firstTime.vamos().click()
    }
}

module.exports = new LoginPage();