import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import ListUsersPage from "../pagesObject/ListUsersPage";
import NewUserPage from "../pagesObject/NewUserPage";
import userData from "../../fixtures/newUserData.json";

beforeEach(() => {
  LoginPage.login(user.admin.name, user.admin.pass);
  DashboardPage.elements.administrationCard.userList().click();
  ListUsersPage.elements.buttons.buttonNewUser().click();
  cy.url().should("contain", "nuevo-usuario-plataforma");
});

describe('Create "Alumno" tests', () => {
  it('Create new "Alumno"', () => {
    NewUserPage.createNewAlumno(
      userData.alumno.username,
      userData.alumno.email
    );
    NewUserPage.assertSuccesful();
  });

  it('Should not be able to create a new "Alumno" with already registered e-mail', () => {
    NewUserPage.createNewAlumno("ANKRJBHAELURGS", userData.alumno.email);
    NewUserPage.assertAlreadyRegisteredEmail();
  });

  it('Should not be able to create a new "Alumno" with already registered username', () => {
    NewUserPage.createNewAlumno(
      userData.alumno.username,
      "randomemail@email.com"
    );
    NewUserPage.assertAlreadyRegisteredUsername();
  });
}),
  describe('Create "Tutor" tests', () => {
    it('Create new "Tutor"', () => {
      NewUserPage.createNewTutor(userData.tutor.username, userData.tutor.email);
      NewUserPage.assertSuccesful();
    });

    it('Should not be able to create a new "Tutor" with already registered e-mail', () => {
      NewUserPage.createNewTutor("ANKRJBHAELURGS", userData.tutor.email);
      NewUserPage.assertAlreadyRegisteredEmail();
    });

    it('Should not be able to create a new "Tutor" with already registered username', () => {
      NewUserPage.createNewTutor(
        userData.tutor.username,
        "randomemail@email.com"
      );
      NewUserPage.assertAlreadyRegisteredUsername();
    });
  });

describe('Create "Administrador" tests', () => {
  it('Create new "Administrador"', () => {
    NewUserPage.createNewAdmin(userData.admin.username, userData.admin.email);
    NewUserPage.assertSuccesful();
  });

  it('Should not be able to create a new "Administrador" with already registered e-mail', () => {
    NewUserPage.createNewAdmin("ANKRJBHAELURGS", userData.admin.email);
    NewUserPage.assertAlreadyRegisteredEmail();
  });

  it('Should not be able to create a new "Administrador" with already registered username', () => {
    NewUserPage.createNewAdmin(
      userData.admin.username,
      "randomemail@email.com"
    );
    NewUserPage.assertAlreadyRegisteredUsername();
  });
});

describe('Create "Auditor" tests', () => {
  it('Create new "Auditor"', () => {
    NewUserPage.createNewAuditor(
      userData.auditor.username,
      userData.auditor.email
    );
    NewUserPage.assertSuccesful();
  });

  it('Should not be able to create a new "Auditor" with already registered e-mail', () => {
    NewUserPage.createNewAuditor("ANKRJBHAELURGS", userData.auditor.email);
    NewUserPage.assertAlreadyRegisteredEmail();
  });

  it('Should not be able to create a new "Auditor" with already registered username', () => {
    NewUserPage.createNewAuditor(
      userData.auditor.username,
      "randomemail@email.com"
    );
    NewUserPage.assertAlreadyRegisteredUsername();
  });
});
