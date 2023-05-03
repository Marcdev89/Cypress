import LoginPage from "../pagesObject/LoginPage";
import user from "../../fixtures/userTypes.json";
import DashboardPage from "../pagesObject/DashboardPage";
import AdminPage from "../pagesObject/AdminPage";
import StudentsFollowUpByAdminPage from "../pagesObject/StudentsFollowUpByAdminPage";
import StudentsUsersFollowUpPage from "../pagesObject/StudentsUsersFollowUpPage";

describe('Show Students Follow up by group as a Administrator', () => { 

    beforeEach(() => {
        LoginPage.login(user.admin.name,user.admin.pass)
        DashboardPage.elements.nCampusCard.nCampus().click()
        AdminPage.elements.followup.followUpStudentProgressLink().click()
    });

    it('Pressing "Ver todo"', () => {
        StudentsFollowUpByAdminPage.elements.form.buttons.showAll().click()
        StudentsFollowUpByAdminPage.elements.groupList.usersByGroupName('20198000080667').click()
        StudentsUsersFollowUpPage.elements.userList.listTable().should('be.visible')
    });

 })

 describe('Show Students Follow up as a "Tutor"', () => { 

 })