import LoginPage from "../pagesObject/LoginPage";
import userTypes from "../../fixtures/userTypes.json";
import TutorHomePage from "../pagesObject/TutorHomePage";
import MailboxPage from "../pagesObject/MailboxPage";

describe('Delete Folder from Mail Menu as a "Tutor"', () => { 

    before(()=>{
        //create a folder to be able to delete it
        LoginPage.login(userTypes.tutor.name, userTypes.tutor.pass)
        TutorHomePage.elements.groupCard.menu.mail().click()
        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click()
    })
    

    it('Delete the created folder', () => {

        MailboxPage.elements.newFolderModal.cancelBtn().click()
        MailboxPage.elements.menu.manageFolders().click()
        MailboxPage.elements.manageFoldersModal.removeFolderBtn_name('Destacados').click()
        MailboxPage.elements.manageFoldersModal.yesBtn().click()
        MailboxPage.elements.menu.createdFolder('Destacados').should('not.exist')
        
    });

 })

 describe('Delete Folder from Mail Menu as a "Alumno"', () => { 

    before(()=>{
        //create a folder to be able to delete it
        LoginPage.login(userTypes.alumno.name, userTypes.alumno.pass)
        //need a locator from 'mis-cursos' PageObject
        cy.get('[title="Correo"]').click()
        MailboxPage.elements.menu.newFolder().click()
        MailboxPage.elements.newFolderModal.nameInput().type('Destacados')    
        MailboxPage.elements.newFolderModal.saveBtn().click();
    })
    

    it('Delete the created folder', () => {

        MailboxPage.elements.newFolderModal.cancelBtn().click()
        MailboxPage.elements.menu.manageFolders().click()
        MailboxPage.elements.manageFoldersModal.removeFolderBtn_name('Destacados').click()
        MailboxPage.elements.manageFoldersModal.yesBtn().click()
        MailboxPage.elements.menu.createdFolder('Destacados').should('not.exist')
        
    });

 })