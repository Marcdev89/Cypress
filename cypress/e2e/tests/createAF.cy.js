import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import NewAFPage from "../pagesObject/NewAFPage";
import AAFFPage from "../pagesObject/AAFFPage";

describe("Create new AF", () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.trainingManagementCard.actions().click();
    AAFFPage.elements.buttons.newAF().click();
    cy.url().should("contain", "nueva-accion-formativa");
  });

  it("New AF without required fields", () => {
    NewAFPage.newWithoutRequiredFieldCode();
    NewAFPage.newWithoutRequiredFieldName();
    NewAFPage.newWithoutRequiredFieldModality();
    AAFFPage.searchIfNotOnDB(NewAFPage.code);
  });

  it("New AF with only required fields", () => {
    NewAFPage.newOnlyRequiredFields();
    AAFFPage.deleteRowByCode(NewAFPage.code);
  });

  it("New AF with all fields", () => {
    NewAFPage.newWithAllFields();
    AAFFPage.deleteRowByCode(NewAFPage.code);
  });
});
