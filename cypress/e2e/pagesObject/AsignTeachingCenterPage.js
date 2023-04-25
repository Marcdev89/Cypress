class AsignTeachingCenterPage
{
    creationData=[{
        required:{
            centerType:'Centro Presencial de Tutorías',
            initDate:'2023-04-25',
            endDate:'2023-05-24'
        }
    }]

    elements={
        url:'asignar-centro',
        btn:{
            seeAll:()=>cy.get('[title="Ver todo"]'),
            search:()=>cy.get('[title="Buscar"]'),
            asign:()=>cy.get('[title="Asignar"]')
        },
        input:{
            initDate:()=> cy.get('[name="ac_tut_fechaInicio"]'),
            endDate:()=> cy.get('[name="ac_tut_fechaFin"]')
        },
        centerTypeSelect:(option)=>cy.clickSelectOption(
            ()=>{ return cy.get('[data-id="tipoAsigCentro"]') },
            ()=>{ return cy.get('[data-id="tipoAsigCentro"]').siblings('div').find('ul') },
            option
        ),
        centerList:()=> cy.get('#listadoGrupos tr'),
        findCenter:(name)=> this.elements.centerList().contains(name).parents('tr'),
        center:{
            checkBox:(name)=> this.elements.findCenter(name).find('[name="btSelectItem"]')
        }
    }

    isAsignableCenter(name)
    {
        return cy.get('#listadoGrupos').should('be.visible').invoke('html').then((html_code)=>{
            if(new RegExp('>'+name+'</td>').test(html_code))
            {
                return false
            }
            return true
        })
    }
}

export default new AsignTeachingCenterPage()