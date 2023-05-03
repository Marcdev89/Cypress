class AdminPage
{
    elements = {

        courses:{
            formativeActionsLink: ()=>{ return cy.contains('Acciones formativas') },
            formativeModulesLink: ()=>{ return cy.contains('Módulos formativos') },
            formativeUnitsLink: ()=>{ return cy.contains('Unidades formativas') },
            didacticUnitsLink: ()=>{ return cy.contains('Unidades didácticas') },
            formativeActionsCalendarLink: ()=>{ return cy.contains('Calendario acciones formativas') }
        },

        contents:{
            interactiveContentsLink: ()=>{ return cy.contains('Contenidos interactivos') },
            resourcesLink: ()=>{ return cy.contains('Recursos') },
            surveysLink: ()=>{ return cy.contains('Encuestas') },
            surveysQuestionsLink: ()=>{ return cy.contains('Preg. encuestas') },
            evaluationTestsLink:()=>{ return cy.contains('Pruebas de evaluación') },
            evaluationTestsQuestionsLink:()=>{ return cy.contains('Preg. pruebas de evaluación') },
            tasksLink:()=>{ return cy.contains('Tareas') }
        },

        groups:{
            groupsLink: ()=>{ return cy.get('#list-grupos [title="Grupos"]') },
            workGroupsLink: ()=>{ return cy.contains('Grupos de trabajo') },
            dumpGroupsLink: ()=>{ return cy.contains('Volcado de grupos') },
            usersListLink: ()=>{ return cy.contains('Listado usuarios') },
            profilesLink: ()=>{ return cy.contains('Perfiles') }
        },

        communications:{
            tutorialsLink: ()=>{ return cy.contains('Tutorías') },
            faceToFaceDumpTutorialsLink: ()=>{ return cy.contains('Volcado tutorías presenciales') },
            popUpMessagesLink: ()=>{ return cy.contains('Mensajes emergentes') },
            forumsLink: ()=>{ return cy.contains('Foros') },
            chatsLink: ()=>{ return cy.contains('Chats') },
            followUpCommunicationsLink: ()=>{ return cy.contains('Seguimiento comunicaciones') }
        },

        followup:{
            followUpStudentProgressLink: ()=>cy.get('#seg-prog-alumnos'),
            followUpTasksLink: ()=>{ return cy.contains('Seguimiento de tareas') },
            followUpSurveysLink: ()=>{ return cy.contains('Seguimiento de encuestas') },
            evaluationQuestionnaireBonusLink: ()=>{ return cy.contains('Cuestionario de evaluación (Bonificado)') },
            evaluationsLink: ()=>{ return cy.contains('Evaluaciones') },
            deliveryOfCaseStudiesLink: ()=>{ return cy.contains('Entrega de casos prácticos') }
        },

        configuration:{
            teachingCentersLink : () => cy.get('#list-centros > .subtitle-dashboard'),
            conveningsLink: ()=> cy.get('#list-convocatorias > .subtitle-dashboard'),
            gdprClauseLink: ()=> cy.contains('Cláusula GDPR'),
            cauClauseLink: ()=> cy.contains('Consultas CAU'),
            followUpStudentConfigLink: ()=> cy.contains('Config. seguimiento alumnos')
        },
        icons:{

            mailLink: ()=>{ return cy.get('[data-original-title="Correo"]') },
            calendarLink: ()=>{ return cy.get('[data-original-title="Calendario"]') },
            ayudaLink: ()=>{ return cy.get('[data-original-title="Ayuda adicional"]') }
        }
    }
}

export default new AdminPage()