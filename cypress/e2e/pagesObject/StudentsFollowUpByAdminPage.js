class StudentsFollowUpByAdminPage{

    elements ={
        
       additionalHelp: () => cy.contains("Ayuda adicional"),
       form : {
            code: () => cy.get('#codigoGrupo'),
            name: () => cy.get('#nombreGrupo'),
            startDate: () => cy.get('#fechaInicio'),
            finalDate: () => cy.get('#fechaFin'),
            starred: () => cy.get('[title="Ver destacados"]'),
            showAll: () => cy.get('[title="Ver todo"]'),
            search: () => cy.get('[title="Buscar"]'), 

            buttons : {
                showAll: () => cy.get('[title="Ver todo"]'),
                search: () => cy.get('[title="Buscar"]')
            }
       },
       groupList : {
        group : () => cy.get('[data-index="${row}"] > :nth-child(${col})'),
        usersByGroupName: (group) => cy.contains(group).siblings('.td-actions').find('.btn')
       }

                       
    }

    url = () => cy.visit('seguimiento-alumnos-admin')
}

export default new StudentsFollowUpByAdminPage();