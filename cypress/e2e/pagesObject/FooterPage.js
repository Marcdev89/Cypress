class FooterPage {

cau = ()=> cy.contains('Centro de Ayuda al Usuario (CAU)',  { matchCase: false });
powered = () => cy.contains('Powered by Vértice',  { matchCase: false });

}

module.exports = new FooterPage();