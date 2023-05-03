class StudentsUsersFollowUpPage{

    elements ={
        
       additionalHelp: () => cy.contains("Ayuda adicional"),
       group : {
            code: () => cy.get('#cod_denom_grupo'),
            startDate: () => cy.get('#fecha_inicio'),
            finalDate: () => cy.get('#fecha_fin')
       },
            teacher:{
                name: () => cy.get('#lista-tutores > .canvas > :nth-child(1) > .col-xl-12 > .card-content > [title="Tutor/a"] > .access-text > span'),
                accesses: () => cy.get('#lista-tutores > .canvas > :nth-child(1) > .col-xl-12 > .card-content > [title="Accesos totales"] > .access-text > span'),
                cv: () => cy.get('#lista-tutores > .canvas > :nth-child(1) > .col-xl-12 > .card-content > [title="CV"] > .access-text > img'),
                details: () =>cy.get('#lista-tutores > .canvas > :nth-child(1) > .col-xl-12 > .card-content > [title="Detalles acceso"] > .access-text > img')

            },

            userList : {
                showProgressByName: (name) => cy.contains(name).siblings('.td-actions').find('.btn'),
                listTable: () => cy.get('#listadoUsuarios')

            }
       }
   
       url = () => cy.visit('seguimiento-alumnos-usuarios-admin')
                       
    }

export default new StudentsUsersFollowUpPage();