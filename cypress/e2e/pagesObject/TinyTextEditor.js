export default class TinyTextEditor
{
    constructor(locator)
    {
        this.locator = locator
    }

    //option_nb: (nb)=> cy.get(`.tox-silver-sink .tox-collection__group > div`).eq(nb)

    previewWindow={
        xBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__header button[title="Cerrar"]'),
        closeBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__footer button[title="Cerrar"]')
    }

    insertEditLinkWindow={ //DESHABILITADO only import file allowed
        xBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__header button[title="Cerrar"]'),
        urlInput: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-form input.tox-textfield[type="url"]'),
        urlBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-form button[title="URL"]'),
        urlTextInput: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-form label').contains('Texto que mostrar').siblings('input'),
        urlTitleInput: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-form label').contains('Título').siblings('input'),
        urlOpenType:{
            openChoicesBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-form [aria-label="Abrir enlace en..."]'),
            option_name: (name)=> cy.get(`.tox-silver-sink .tox-tiered-menu .tox-collection__group > [title="${name}"`)
            //name: 'Ventana actual' or 'Nueva ventana'
        },
        cancelBtn: ()=> cy.get(`.tox-silver-sink .tox-dialog__footer [title="Cancelar"]`),
        saveBtn: ()=> cy.get(`.tox-silver-sink .tox-dialog__footer [title="Guardar"]`),
    }
    insertEditMediaWindow={} //DESHABILITADO
    specialCharWindow={ 
        searchInput: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-dialog__body-content > .tox-form input[type="text"]'),//DESHABILITADO
        category_name: (name)=> cy.get(`.tox-silver-sink .tox-dialog .tox-dialog__body > .tox-dialog__body-nav`).contains(name),
        char_name: (name)=> cy.get(`.tox-silver-sink .tox-dialog .tox-dialog__body .tox-form .tox-collection__group [title="${name}"]`),
        xBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__header button[title="Cerrar"]'),
        closeBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__footer button[title="Cerrar"]')
    }
    emojisWindow={
        searchInput: ()=> cy.get('.tox-silver-sink .tox-dialog__body .tox-dialog__body-content > .tox-form input[type="text"]'),//DESHABILITADO
        category_name: (name)=> cy.get(`.tox-silver-sink .tox-dialog .tox-dialog__body > .tox-dialog__body-nav`).contains(name),
        char_name: (name)=> cy.get(`.tox-silver-sink .tox-dialog .tox-dialog__body .tox-form .tox-collection__group [title="${name}"]`),
        xBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__header button[title="Cerrar"]'),
        closeBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__footer button[title="Cerrar"]')
    }
    helpWindow={
        category_name: (name)=> cy.get(`.tox-silver-sink .tox-dialog .tox-dialog__body > .tox-dialog__body-nav`).contains(name),
        addonsLink_name: (name)=> cy.get(`.tox-silver-sink .tox-form__group a`).contains(name),
        xBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__header button[title="Cerrar"]'),
        closeBtn: ()=> cy.get('.tox-silver-sink .tox-dialog__footer button[title="Cerrar"]')
    }
    insertTableWindow={} //TODO or not?
    uploadImageWindow={} //TODO or not?
    customColorWindow={} //TODO or not?

    previewBtn = ()=> cy.get(`${this.locator} [aria-label="Previsualizar"]`)
    undoBtn = ()=> cy.get(`${this.locator} [aria-label="Deshacer"]`)
    redoBtn = ()=> cy.get(`${this.locator} [aria-label="Rehacer"]`)
    cutBtn = ()=> cy.get(`${this.locator} [aria-label="Cortar"]`)
    copyBtn = ()=> cy.get(`${this.locator} [aria-label="Copiar"]`)
    pasteBtn = ()=> cy.get(`${this.locator} [aria-label="Pegar"]`)
    selectAllBtn = ()=> cy.get(`${this.locator} [aria-label="Seleccionar todo"]`)
    uploadImageBtn = ()=> cy.get(`${this.locator} [aria-label="Upload Image"]`)
    insertEditLinkBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar/editar enlace"]`) 
    insertEditMediaBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar/editar medio"]`)
    specialCharBtn = ()=> cy.get(`${this.locator} [aria-label="Carácter especial"]`)
    emojisBtn = ()=> cy.get(`${this.locator} [aria-label="Emojis"]`)
    horizontalLineBtn = ()=> cy.get(`${this.locator} [aria-label="Línea horizontal"]`)
    dateTime = { //checked
        insertBtn: ()=> cy.get(`${this.locator} [aria-label="Insertar fecha/hora"] > .tox-tbtn`).eq(0),
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Insertar fecha/hora"] > span.tox-tbtn`).eq(1),
        option_nb: (nb)=> cy.get(`.tox-silver-sink .tox-collection__group > div`).eq(nb),
        option_name: (name)=>{
            const formats = ['hh:mm:ss','YYYY-MM-DD','h:mm:ss','DD/MM/YYYY']
            return this.dateTime.option_nb(formats.indexOf(name))
        } 
    }
    pageBreakBtn = ()=> cy.get(`${this.locator} [aria-label="Salto de página"]`)
    helpBtn = ()=> cy.get(`${this.locator} [aria-label="Ayuda"]`)
    boldBtn = ()=> cy.get(`${this.locator} [aria-label="Negrita"]`)
    italicBtn = ()=> cy.get(`${this.locator} [aria-label="Cursiva"]`)
    underlineBtn = ()=> cy.get(`${this.locator} [aria-label="Subrayado"]`)
    lineThroughBtn = ()=> cy.get(`${this.locator} [aria-label="Tachado"]`)
    superscriptBtn = ()=> cy.get(`${this.locator} [aria-label="Superíndice"]`)
    subscriptBtn = ()=> cy.get(`${this.locator} [aria-label="Subíndice"]`)
    lineHeight = { //checked
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Altura de línea"]`),
        option_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`)
    }
    fontFamily = { //checked
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Fuentes"]`),
        option_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`)
    }
    fontSize = { //checked
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Tamaños de fuente"]`),
        option_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`)
    }
    paragraphStyle = { //checked
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Bloques"]`),
        option_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`)
    }
    /*
        possible values of color:
        'Verde claro', 'Amarillo claro', 'Rojo claro', 'Morado claro', 'Azul claro'
        'Verde', 'Amarillo', 'Rojo', 'Púrpura', 'Azul'
        'Turquesa oscuro', 'Naranja', 'Rojo oscuro', 'Morado oscuro', 'Azul oscuro'
        'Gris claro', 'Gris medio', 'Gris', 'Gris oscuro', 'Azul marino'
        'Negro', 'Blanco', 'Quitar color', 'Color personalizado'
    */
    fontColor = { //checked
        applyBtn: ()=> cy.get(`${this.locator} [aria-label="Color del texto"] > .tox-tbtn`).eq(0),
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Color del texto"] > span.tox-tbtn`).eq(1),
        option_name: (color)=> cy.get(`.tox-silver-sink .tox-swatches > .tox-swatches__row > [title="${color}"]`),
        customColorBtn: ()=> cy.get(`.tox-silver-sink .tox-swatches > .tox-swatches__row > [title="Color personalizado"]`)
    }
    backgroundColor = { //checked
        applyBtn: ()=> cy.get(`${this.locator} [aria-label="Color de fondo"] > .tox-tbtn`).eq(0),
        openChoicesBtn: ()=> cy.get(`${this.locator} [aria-label="Color de fondo"] > span.tox-tbtn`).eq(1),
        option_name: (color)=> cy.get(`.tox-silver-sink .tox-swatches > .tox-swatches__row > [title="${color}"]`),
        customColorBtn: ()=> cy.get(`.tox-silver-sink .tox-swatches > .tox-swatches__row > [title="Color personalizado"]`)
    }
    clearFormatBtn = ()=> cy.get(`${this.locator} [aria-label="Limpiar formato"]`)
    sourceCodeBtn = ()=> cy.get(`${this.locator} [aria-label="Código fuente"]`)
    alignLeftBtn = ()=> cy.get(`${this.locator} [aria-label="Alinear a la izquierda"]`)
    alignCenterBtn = ()=> cy.get(`${this.locator} [aria-label="Alinear al centro"]`)
    alignRightBtn = ()=> cy.get(`${this.locator} [aria-label="Alinear a la derecha"]`)
    justifyBtn = ()=> cy.get(`${this.locator} [aria-label="Justificar"]`)

    /*
        possible values of name:
        'Por defecto', 'Círculo', 'Cuadrado'
    */
    bulletList = { // to check
        applyBtn: ()=> cy.get(`${this.locator} [aria-label="Lista de viñetas"] > .tox-tbtn`).eq(0),
        openChoices: ()=> cy.get(`${this.locator} [aria-label="Lista de viñetas"] > span.tox-tbtn`).eq(1),
        chooseAndapply_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`),
    }

    /*
        possible values of name:
        'Por defecto', 'Letras minúsculas', 'Griego en minúsculas'
        'Romano en minúsculas', 'Letras mayúsculas', 'Romano en mayúsculas'
    */
    numberedList = { // to check
        applyBtn: ()=> cy.get(`${this.locator} [aria-label="Lista numerada"] > .tox-tbtn`).eq(0),
        openChoices: ()=> cy.get(`${this.locator} [aria-label="Lista numerada"] > span.tox-tbtn`).eq(1),
        chooseAndapply_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`),
    }

    decreaseIndentBtn = ()=> cy.get(`${this.locator} [aria-label="Disminuir sangría"]`)
    increaseIndentBtn = ()=> cy.get(`${this.locator} [aria-label="Incrementar sangría"]`)
    insertTableBtn = ()=> cy.get(`${this.locator} [aria-label="Tabla"]`)
    removeTableBtn = ()=> cy.get(`${this.locator} [aria-label="Eliminar tabla"]`)
    tablePropertiesBtn = ()=> cy.get(`${this.locator} [aria-label="Propiedades de la tabla"]`)
    rowPropertiesBtn = ()=> cy.get(`${this.locator} [aria-label="Propiedades de la fila"]`)
    cellPropertiesBtn = ()=> cy.get(`${this.locator} [aria-label="Propiedades de la celda"]`)
    insertRowBeforeBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar fila antes"]`)
    insertRowAfterBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar fila después"]`)
    removeRowBtn = ()=> cy.get(`${this.locator} [aria-label="Eliminar fila"]`)
    insertColBeforeBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar columna antes"]`)
    insertColAfteBtn = ()=> cy.get(`${this.locator} [aria-label="Insertar columna después"]`)
    removeColBtn = ()=> cy.get(`${this.locator} [aria-label="Eliminar columna"]`)
    textArea = ()=> cy.getIframeBody(`${this.locator} .tox-edit-area > iframe`).find(`p`)
    formatPath = ()=> cy.get(`${this.locator} .tox-statusbar__path`)
    wordCharacterBtn = ()=> cy.get(`${this.locator} .tox-statusbar__wordcount`)
}