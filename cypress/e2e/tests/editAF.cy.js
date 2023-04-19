import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import NewAFPage from "../pagesObject/NewAFPage";
import AAFFPage from "../pagesObject/AAFFPage";
import EditAFPage from "../pagesObject/EditAFPage";
import editData from "../../fixtures/editAFData.json";

describe("Edit AF", () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.trainingManagementCard.actions().click();
    AAFFPage.elements.buttons.newAF().click();
    cy.url().should("contain", "nueva-accion-formativa");
    NewAFPage.newOnlyRequiredFields();
  });

  it("Edit AF required fields", () => {
    cy.visit("/acciones-formativas");
    AAFFPage.searchOnDB(NewAFPage.code);
    AAFFPage.elements.table.getRowField(NewAFPage.code, 0).click();
    cy.url().should("contain", "editar-accion-formativa");
    EditAFPage.editOnlyRequiredFields();
    cy.visit("/acciones-formativas");
    AAFFPage.searchOnDB(editData.code);
    EditAFPage.assertEditOnlyRequiredFields();
    AAFFPage.deleteRowByCode(editData.code)
  });

  it("Edit all fields", () => {
    cy.visit("/acciones-formativas");
    AAFFPage.searchOnDB(NewAFPage.code);
    AAFFPage.elements.table.getRowField(NewAFPage.code, 0).click();
    cy.url().should("contain", "editar-accion-formativa");
    EditAFPage.editAllFields();
    cy.visit("/acciones-formativas");
    AAFFPage.searchOnDB(editData.code);
    EditAFPage.assertFields();
    AAFFPage.deleteRowByCode(editData.code)
  });
});
