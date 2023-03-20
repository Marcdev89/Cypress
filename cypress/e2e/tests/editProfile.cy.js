import user from "../../fixtures/userTypes.json";
import LoginPage from "../pagesObject/LoginPage";
import MyProfilePage from "../pagesObject/MyProfilePage";

describe("Edit profiles with different roles", () => {
  it("login", () => {
    LoginPage.login(user.alumno.name, user.alumno.pass);
  });
});
