import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import NewAFPage from "../pagesObject/NewAFPage";
import AAFFPage from "../pagesObject/AAFFPage";

describe("Delete AF", () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.trainingManagementCard.actions().click();
    cy.url().should("contain", "acciones-formativas");
  });

  it("Create an AF to test", () => {
    AAFFPage.elements.buttons.newAF().click();
    cy.url().should("contain", "nueva-accion-formativa");
    NewAFPage.newOnlyRequiredFields();
  });

  it("Should be able to cancel delete an AF", () => {
    AAFFPage.deleteRowClickNo(NewAFPage.code);
  });

  it("Should be able to delete an AF", () => {
    AAFFPage.deleteRowByCode(NewAFPage.code);
  });

  it("An AF assigned to a group cannot be deleted", () => {
    AAFFPage.deleteAFWithGroupAssigned(AAFFPage.AFWithGroupAssigned.code);
  });
});
