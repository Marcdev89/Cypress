import HeaderPage from "./HeaderPage";

class MyProfilePage {
  // LOCATORS
  elements = {
    additionalHelp: () => cy.contains("Ayuda adicional"),
    profileHover: () => cy.get('[src="lib/octicons/build/svg/info-24.svg"]'), // there's no other option to correctly select this locator as of now
    back: () => cy.contains("#retorno", "Volver"),

    profileSocialLinks: {
      linkedin: () => cy.get(".socials-profile").find('[title="LinkedIn"]'),
      twitter: () => cy.get(".socials-profile").find('[title="Twitter"]'),
      facebook: () => cy.get(".socials-profile").find('[title="Facebook"]'),
      skype: () => cy.get(".socials-profile").find('[title="Skype"]'),
      blog: () => cy.get(".socials-profile").find('[title="Blog"]'),
    },

    form: {
      user: () => cy.get('[title="Usuario"]'),
      name: () => cy.get('[title="Nombre"]'),
      firstSurname: () => cy.get('[title="Apellido 1"]'),
      secondSurname: () => cy.get('[title="Apellido 2"]'),
      email: () => cy.get('[title="Email"]'),
      password: () => cy.get('[title="Contraseña"]'),
      phone: () => cy.get('[title="Teléfono"]'),
      photo: () => cy.get("#p_foto").find("input"),
      documentType: () => cy.get(".selectpickerbtn").eq(0), // there's no other option as of now to get these locators
      documentID: () => cy.get('[title="ID documento"]'),
      birthDate: () => cy.get('[title="F. nacimiento"]'),
      language: () => cy.get(".selectpickerbtn").eq(1),
      gender: () => cy.get(".selectpickerbtn").eq(2),
      education: () => cy.get('[title="Formación"]'),
      company: () => cy.get('[title="Empresa"]'),
      occupation: () => cy.get('[title="Puesto"]'),
      CV: () => cy.get("#p_adjuntarCV").find("input"),
      skype: () => cy.get('[title="Skype"]'),
      facebook: () => cy.get('[title="Facebook"]'),
      twitter: () => cy.get('[title="Twitter"]'),
      linkedin: () => cy.get('[title="LinkedIn"]'),
      blog: () => cy.get('[title="Blog"]'),
      checkboxNoEmails: () => cy.get("#checkbox51"),
      checkboxNotifications: () => cy.get("#checkbox52"),
      checkboxNoGroupListing: () => cy.get("#checkbox53"),
      checkboxAgendaEvents: () => cy.get("#checkbox54"),
      observationsTextArea: () => cy.get("#observacionesPerfil"),
      buttonActualizar: () => cy.get("#guardarPerfil"),
      buttonCancelar: () => cy.get("#cancelarPerfilAlumno"),
    }
  };

  // FUNCTIONS

  // NO SE PUEDE ACCEDER A LA PAGINA '/mi-perfil' DESDE CYPRESS
  // PAGEOBJECT Y ARCHIVO DE TEST 'editProfile.cy.js' HECHO

}

module.exports = new MyProfilePage();
