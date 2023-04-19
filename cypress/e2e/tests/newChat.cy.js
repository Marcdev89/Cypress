import chatData from "../../fixtures/newChatData.json";
import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import ChatManagementPage from "../pagesObject/ChatManagementPage";
import NewChatPage from "../pagesObject/NewChatPage";

describe('"Administrador" New Chat tests', () => {
  beforeEach(() => {
    LoginPage.login(user.admin.name, user.admin.pass);
    DashboardPage.elements.nCampusCard.nCampus().click();
    cy.contains("Secciones").should("be.visible");
    AdminPage.elements.communications.chatsLink().click({ force: true });
    ChatManagementPage.elements.buttons.newChat().should("be.visible");
    ChatManagementPage.elements.buttons.newChat().click({ force: true });
    cy.url().should("contain", "nuevo-chat");
  });

  it("Create New Chat", () => {
    NewChatPage.createNewChat(chatData.code, chatData.name);
    cy.visit('/gestion-chat')
    ChatManagementPage.search(chatData.code, chatData.name)
  });

  it("Should not create chat without code field", () => {
    NewChatPage.createNewChatWithoutCode(chatData.name);
  });

  it("Should not create chat without name field", () => {
    NewChatPage.createNewChatWithoutName(chatData.code);
  });

  it("Should not create chat without any fields", () => {
    NewChatPage.createNewChatWithoutAnyFields();
  });
});
