class GroupsPage
{
    elements = {
        btn:{
            seeAll:()=> cy.get('[title="Ver todo"]')
        },
        groupsList:()=> cy.get('#listadoGrupos tr'),
        findGroup:(code)=> this.elements.groupsList().contains(new RegExp(code+' -.*')).parents('tr'),
        group:{
            btn:{
                asignCenter:(code)=> this.elements.findGroup(code).find('[title="Asignar centro"]')
            }
        }
    }
}

export default new GroupsPage()