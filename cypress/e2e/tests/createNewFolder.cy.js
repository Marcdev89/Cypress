import LoginPage from "../pagesObject/LoginPage";
import userTypes from "../../fixtures/userTypes.json";
import TutorHomePage from "../pagesObject/TutorHomePage";
import MailboxPage from "../pagesObject/MailboxPage";
import MyCoursesPage from "../pagesObject/MyCoursesPage";

describe('Create a new Folder as a "Tutor"', () => { 

    beforeEach(() => {
        LoginPage.login(userTypes.tutor.name, userTypes.tutor.pass)
        TutorHomePage.elements.groupCard.menu.mailSpecificGroup().click()
    });
    
    it('create a new Folder', () => {

        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click();
        MailboxPage.elements.menu.createdFolder('Destacados').should('be.visible')
  
    });

    it('Trying to create a folder already exist', () => {

        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click();
       cy.alertAssert('Ya existe una carpeta con ese nombre')

       //deleting folder to be able to repeat the test
        MailboxPage.elements.newFolderModal.cancelBtn().click()
        MailboxPage.elements.menu.manageFolders().click()
        MailboxPage.elements.manageFoldersModal.removeFolderBtn_name('Destacados').click()
        MailboxPage.elements.manageFoldersModal.yesBtn().click()
        
    });

 })

describe('Create a new Folder as a "Alumno"', () => { 

    beforeEach(() => {
        LoginPage.login(userTypes.alumno.name, userTypes.alumno.pass)
        MyCoursesPage.elements.courseCard.selectingCourseByTitle('demo25 - Demo Sprint 25','Correo').click()
    });

    it('create a new Folder', () => {

        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click();
        MailboxPage.elements.menu.createdFolder('Destacados').should('be.visible')
  
    });

    it('Trying to create a folder already exist', () => {

        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click();
       cy.alertAssert('Ya existe una carpeta con ese nombre')

       //deleting folder to be able to repeat the test
        MailboxPage.elements.newFolderModal.cancelBtn().click()
        MailboxPage.elements.menu.manageFolders().click()
        MailboxPage.elements.manageFoldersModal.removeFolderBtn_name('Destacados').click()
        MailboxPage.elements.manageFoldersModal.yesBtn().click()
        
    });

 })