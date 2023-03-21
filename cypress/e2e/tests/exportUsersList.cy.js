import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import ListUsersPage, {
  formatDownloadFileName,
} from "../pagesObject/ListUsersPage";

describe("Exports users list", () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.administrationCard.userList().click();
  });

  it("Export users list and verify it's downloaded", () => {
    ListUsersPage.exportAllUsers();
    const formattedFileName = ListUsersPage.formatDownloadFileName("EXP-listadoUsuarios", ".xls");
    cy.readFile(`cypress/downloads/` + formattedFileName).should("exist");
  });
});
