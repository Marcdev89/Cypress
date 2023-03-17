class HeaderPage {

   elements = {

    logo : () => cy.get('[title="Logo"]'),
    profileImg : () => cy.get('#img-usr-perfil'),
    date : () => cy.get('#fechaActual'),
    rol : () => cy.get('.date'),
    //Alumno have not tabs
    tab : () => cy.get('.nav-item'),

    dropdown : {    
                    myProfile: () => cy.contains('ul li a', 'Mi Perfil', { matchCase: false }),                  
                    store: () => cy.contains ('ul li a', 'Archivadores', { matchCase: false }),
                    logOutLocalization: () => cy.contains('ul li a', 'Cerrar sesión', { matchCase: false }),
                    modalLogOut: () => cy.get('#formLogout'),
                    btnLogOutYes: () => cy.contains('Sí'),
                    btnLogOutNo: () => cy.get('[title = "No"]'), 
                    //Only Tutor:
                    calls: () => cy.contains('ul', 'Convocatorias', { matchCase: false })
                }

   } 

    logOutFunction(){
        this.elements.profileImg().click()
        this.elements.dropdown.logOutLocalization().click()
        this.elements.dropdown.btnLogOutYes().click()
    }

}



module.exports = new HeaderPage();