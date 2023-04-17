class ConveningPage
{
    elements = {
        url:'convocatorias',
        exportDetailsBtn:()=> cy.get('#export'),
        newConveningBtn:()=> cy.get('button[title="Nueva convocatoria"]'),
        conveningList:()=> cy.get('#convocatoriasTabla > tr'),
        conveningTitle_name:(name)=> this.elements.conveningList().contains(name),
        conveningTrashBtn_name:(name)=> this.elements.conveningTitle_name(name).parents('tr').get('a[title="Eliminar"]'),
        conveningDefaultBtn_name:(name)=> this.elements.conveningTitle_name(name).parents('tr').get('a[title="Convocatoria predeterminada"]'),
    }
}
export default new ConveningPage()