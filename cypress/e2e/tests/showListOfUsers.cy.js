import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import userData from "../../fixtures/userData.json";
import DashboardPage from "../pagesObject/DashboardPage";
import ListUsersPage from "../pagesObject/ListUsersPage";

describe("Show list of users on the platform", () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.administrationCard.userList().click();
    cy.url().should("contain", "listado-usuarios-plataforma");
  });

  it("Should show list of users", () => {
    ListUsersPage.viewAllUsers();
    ListUsersPage.elements.usersTable.rows().should('exist');
  });

  it("Should show users matching field", () => {
    // Assertions inside functions, as it asserts and clears the field afterwards
    ListUsersPage.searchUserByName(userData.user1.name);
    ListUsersPage.searchUserByFirstSurname(userData.user1.firstSurname);
    ListUsersPage.searchUserBySecondSurname(userData.user1.secondSurname);
    ListUsersPage.searchUserByUsername(userData.user1.username);
    ListUsersPage.searchUserByProfile(userData.user1.profile);
    ListUsersPage.searchUserByEmail(userData.user1.email);
    ListUsersPage.searchUserByDocumentType(userData.user1.documentType);
    ListUsersPage.searchUserByDocumentNumber(userData.user1.documentNumber);
    ListUsersPage.searchUserByRegistrationDate(userData.user1.registrationDate, userData.user1.registrationDate, userData.user1.registrationDateFormatted);
    ListUsersPage.searchByResignedDate(userData.user1.registrationDate, userData.user1.registrationDate);
    ListUsersPage.searchUserByMarca(userData.user1.marca);
    
  });

  it("Should show users matching ALL fields", () => {
    ListUsersPage.searchUserWithAllInputs();
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posUser).should("contain", userData.user1.username);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posEmail).should("contain", userData.user1.email);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posName).should("contain", userData.user1.name);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posName).should("contain", userData.user1.firstSurname);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posName).should("contain", userData.user1.secondSurname);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posProfile).should("contain", userData.user1.profile);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posDocument).should("contain", userData.user1.documentType);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posDocument).should("contain", userData.user1.documentNumber);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posEmail).should("contain", userData.user1.email);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posRegistrationDate).should("contain", userData.user1.registrationDateFormatted);
    ListUsersPage.elements.usersTable.getRowByUsername(userData.user1.username).find('td').eq(ListUsersPage.elements.usersTable.posMarca).should("contain", userData.user1.marca);
  });
});
