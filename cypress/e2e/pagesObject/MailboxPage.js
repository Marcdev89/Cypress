class MailboxPage
{
    elements = {
        breadCrumb: {
            home:()=> cy.get('.breadcrumb > :nth-child(1) > .link'),
            group:()=> cy.get('#grupo'),
            active:()=> cy.get('.breadcrumb > .active')
        },
        menu:{
            compose: ()=> cy.get('.sidebar-email-first-block'),
            inbox: ()=> cy.get('#carpetas').eq(0),
            sent: ()=> cy.get('#carpetas').eq(1),
            trash: ()=> cy.get('#carpetas').eq(2),
            newFolder: ()=> cy.get('.row > [title="Nueva carpeta"]'),
            manageFolders: ()=> cy.get('.row > [title="Gestionar carpetas"]'),
            createdFolder: (name)=>cy.get(`#carpetas img[title="${name}"]`)//.parent()
        },
        searchInput: ()=> cy.get('#buscarCorreo'),
        searchBtn: ()=> cy.get('#fBusquedaCorreo button'),
        refreshIcon: ()=> cy.get('[title="Recargar"]'),
        moveAtIcon: ()=> cy.get('.row > :nth-child(1) > [title="Mover a..."]'),
        trashIcon: ()=> cy.get(':nth-child(1) > [title="Eliminar"]'),
        markAsReadIcon: ()=> cy.get('[title="Marcar como leído"]'),
        markAsUnreadIcon: ()=> cy.get('[title="Marcar como no leído"]'),
        selectAllCheckbox: ()=> cy.get('#table [name="btSelectAll"]'),
        mailList:{
            checkbox_nb: (nb)=> cy.get('#table > tbody > tr').eq(nb).find('.bs-checkbox > input'),
            mail_nb: (nb)=> cy.get('#table > tbody > tr').eq(nb)
        },
        newFolderModal:{
            nameInput: ()=> cy.get('#newFolder .modal-body input',{timeout:8000}),
            saveBtn: ()=> cy.get('#guardar'),
            cancelBtn: ()=> cy.get('#newFolder',{timeout:8000}).contains('Cancelar')
        },
        manageFoldersModal:{ //checked
            cancelBtn: ()=> cy.get(''),
            removeFolderBtn_nb: (nb)=> cy.get('#listadoCarpetas > .folder-first-text > [alt="Eliminar"]').eq(nb),
            removeFolderBtn_name: (name)=> cy.get(`#listadoCarpetas > .folder-first-text [title="${name}"]`).siblings('[alt="Eliminar"]'),
            yesBtn: ()=> cy.get('#modalConfirmar .modal-body [data-field="si"]'),
            noBtn: ()=> cy.get('#modalConfirmar .modal-body [data-field="no"]'),
            closeBtn: ()=> cy.get('#modalConfirmar [aria-label="Close"]')
        },
        composeModal:{
            recipientsField:{ //checked
                toggleDropdownBtn: ()=> cy.get('[data-id="destinatario"]'),
                markAllBtn: ()=> cy.get('[data-id="destinatario"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="destinatario"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="destinatario"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            ccField:{ //checked
                toggleDropdownBtn: ()=> cy.get('[data-id="cc"]'),
                markAllBtn: ()=> cy.get('[data-id="cc"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="cc"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="cc"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="cc"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="cc"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            ccoField:{ //to check
                toggleDropdownBtn: ()=> cy.get('[data-id="cco"]'),
                markAllBtn: ()=> cy.get('[data-id="cco"]').parent().find('.bs-actionsbox').contains('Marcar todos'),
                unmarkAllBtn: ()=> cy.get('[data-id="cco"]').parent().find('.bs-actionsbox').contains('Desmarcar todos'),
                allOptions: ()=> cy.get('[data-id="cco"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="cco"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="cco"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            subjectField: ()=> cy.get("#asunto"), //to check
            attachmentField: ()=> cy.get('input[type="file"]'), //to check
            priorityField:{ //to check
                toggleDropdownBtn: ()=> cy.get('[data-id="prioridad"]'),
                allOptions: ()=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a'),
                option_nb: (nb)=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a').eq(nb),
                option_name: (name)=> cy.get('[data-id="prioridad"]').parent().find('ul > li > a > span').contains(name).parent()
            },
            externCopyCheckbox: ()=> cy.get('#copiaExterna'), //to check
            receiptAcknowledgmentCheckBox: ()=> cy.get('#acuseRecibo'), //to check
            textEditor:{
                previewBtn: ()=> cy.get('#enviarCorreo [aria-label="Previsualizar"]'),
                undoBtn: ()=> cy.get('#enviarCorreo [aria-label="Deshacer"]'),
                redoBtn: ()=> cy.get('#enviarCorreo [aria-label="Rehacer"]'),
                cutBtn: ()=> cy.get('#enviarCorreo [aria-label="Cortar"]'),
                copyBtn: ()=> cy.get('#enviarCorreo [aria-label="Copiar"]'),
                pasteBtn: ()=> cy.get('#enviarCorreo [aria-label="Pegar"]'),
                selectAllBtn: ()=> cy.get('#enviarCorreo [aria-label="Seleccionar todo"]'),
                uploadImageBtn: ()=> cy.get('#enviarCorreo [aria-label="Upload Image"]'),
                insertEditLinkBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar/editar enlace"]'), //TODO add its modal locator
                insertEditMediaBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar/editar medio"]'), //TODO add its modal locator
                specialCharBtn: ()=> cy.get('#enviarCorreo [aria-label="Carácter especial"]'), //TODO add its modal locator
                emojisBtn: ()=> cy.get('#enviarCorreo [aria-label="Emojis"]'), // TODO add its modal locator
                horizontalLineBtn: ()=> cy.get('#enviarCorreo [aria-label="Línea horizontal"]'),
                dateTime:{ //checked
                    insertBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar fecha/hora"] > .tox-tbtn').eq(0),
                    openFormatChoice: ()=> cy.get('#enviarCorreo [aria-label="Insertar fecha/hora"] > span.tox-tbtn').eq(1),
                    chooseAndInsertFormat_nb: (nb)=> cy.get('.tox-silver-sink .tox-collection__group > div').eq(nb)
                },
                pageBreakBtn: ()=> cy.get('#enviarCorreo [aria-label="Salto de página"]'),
                helpBtn: ()=> cy.get('#enviarCorreo [aria-label="Ayuda"]'), // TODO add its modal locator
                boldBtn: ()=> cy.get('#enviarCorreo [aria-label="Negrita"]'),
                italicBtn: ()=> cy.get('#enviarCorreo [aria-label="Cursiva"]'),
                underlineBtn: ()=> cy.get('#enviarCorreo [aria-label="Subrayado"]'),
                lineThroughBtn: ()=> cy.get('#enviarCorreo [aria-label="Tachado"]'),
                superscriptBtn: ()=> cy.get('#enviarCorreo [aria-label="Superíndice"]'),
                subscriptBtn: ()=> cy.get('#enviarCorreo [aria-label="Subíndice"]'),
                lineHeight:{
                    openFormatChoice: ()=> cy.get('#enviarCorreo [aria-label="Altura de línea"]'),
                    chooseFormat_nb: (nb)=> cy.get('.tox-silver-sink .tox-collection__group > div').eq(nb)
                },
                fontFamily:{
                    openFormatChoice: ()=> cy.get('#enviarCorreo [aria-label="Fuentes"]'),
                    chooseFormat_nb: (nb)=> cy.get('.tox-silver-sink .tox-collection__group > div').eq(nb)
                },
                fontSize:{
                    openFormatChoice: ()=> cy.get('#enviarCorreo [aria-label="Tamaños de fuente"]'),
                    chooseFormat_nb: (nb)=> cy.get('.tox-silver-sink .tox-collection__group > div').eq(nb)
                },
                paragraphStyle:{ //to check
                    openFormatChoice: ()=> cy.get('#enviarCorreo [aria-label="Bloques"]'),
                    chooseFormat_nb: (nb)=> cy.get('.tox-silver-sink .tox-collection__group > div').eq(nb)
                },
                fontColor:{ // to check
                    applyBtn: ()=> cy.get('#enviarCorreo [aria-label="Color del texto"] > .tox-tbtn').eq(0),
                    openChoices: ()=> cy.get('#enviarCorreo [aria-label="Color del texto"] > span.tox-tbtn').eq(1),
                    chooseAndapply_color: (color)=> cy.get(`.tox-silver-sink > .tox-swatches > .tox-swatches__row > [title="${color}"]`),
                    customColor: ()=> cy.get('.tox-silver-sink > .tox-swatches > .tox-swatches__row > [title="Color personalizado"]')
                    /*
                    possible values of color:
                        'Verde claro', 'Amarillo claro', 'Rojo claro', 'Morado claro', 'Azul claro'
                        'Verde', 'Amarillo', 'Rojo', 'Púrpura', 'Azul'
                        'Turquesa oscuro', 'Naranja', 'Rojo oscuro', 'Morado oscuro', 'Azul oscuro'
                        'Gris claro', 'Gris medio', 'Gris', 'Gris oscuro', 'Azul marino'
                        'Negro', 'Blanco', 'Quitar color', 'Color personalizado'
                    */
                },
                backgroundColor:{ // to check
                    applyBtn: ()=> cy.get('#enviarCorreo [aria-label="Color de fondo"] > .tox-tbtn').eq(0),
                    openChoices: ()=> cy.get('#enviarCorreo [aria-label="Color de fondo"] > span.tox-tbtn').eq(1),
                    chooseAndapply_color: (color)=> cy.get(`.tox-silver-sink > .tox-swatches > .tox-swatches__row > [title="${color}"]`),
                    customColor: ()=> cy.get('.tox-silver-sink > .tox-swatches > .tox-swatches__row > [title="Color personalizado"]')
                    /*
                    possible values of color:
                        'Verde claro', 'Amarillo claro', 'Rojo claro', 'Morado claro', 'Azul claro'
                        'Verde', 'Amarillo', 'Rojo', 'Púrpura', 'Azul'
                        'Turquesa oscuro', 'Naranja', 'Rojo oscuro', 'Morado oscuro', 'Azul oscuro'
                        'Gris claro', 'Gris medio', 'Gris', 'Gris oscuro', 'Azul marino'
                        'Negro', 'Blanco', 'Quitar color', 'Color personalizado'
                    */
                },
                clearFormatBtn: ()=> cy.get('#enviarCorreo [aria-label="Limpiar formato"]'),
                sourceCodeBtn: ()=> cy.get('#enviarCorreo [aria-label="Código fuente"]'),
                alignLeftBtn: ()=> cy.get('#enviarCorreo [aria-label="Alinear a la izquierda"]'),
                alignCenterBtn: ()=> cy.get('#enviarCorreo [aria-label="Alinear al centro"]'),
                alignRightBtn: ()=> cy.get('#enviarCorreo [aria-label="Alinear a la derecha"]'),
                justifyBtn: ()=> cy.get('#enviarCorreo [aria-label="Justificar"]'),
                bulletList:{ // to check
                    applyBtn: ()=> cy.get('#enviarCorreo [aria-label="Lista de viñetas"] > .tox-tbtn').eq(0),
                    openChoices: ()=> cy.get('#enviarCorreo [aria-label="Lista de viñetas"] > span.tox-tbtn').eq(1),
                    chooseAndapply_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`),
                    /*
                    possible values of name:
                        'Por defecto', 'Círculo', 'Cuadrado'
                    */
                },
                numberedList:{ // to check
                    applyBtn: ()=> cy.get('#enviarCorreo [aria-label="Lista numerada"] > .tox-tbtn').eq(0),
                    openChoices: ()=> cy.get('#enviarCorreo [aria-label="Lista numerada"] > span.tox-tbtn').eq(1),
                    chooseAndapply_name: (name)=> cy.get(`.tox-silver-sink .tox-collection__group > [title="${name}"]`),
                    /*
                    possible values of name:
                        'Por defecto', 'Letras minúsculas', 'Griego en minúsculas'
                        'Romano en minúsculas', 'Letras mayúsculas', 'Romano en mayúsculas'
                    */
                },
                decreaseIndentBtn: ()=> cy.get('#enviarCorreo [aria-label="Disminuir sangría"]'),
                increaseIndentBtn: ()=> cy.get('#enviarCorreo [aria-label="Incrementar sangría"]'),
                insertTable: ()=> cy.get('#enviarCorreo [aria-label="Tabla"]'), //TODO menu
                removeTableBtn: ()=> cy.get('#enviarCorreo [aria-label="Eliminar tabla"]'),
                tablePropertiesBtn: ()=> cy.get('#enviarCorreo [aria-label="Propiedades de la tabla"]'),
                rowPropertiesBtn: ()=> cy.get('#enviarCorreo [aria-label="Propiedades de la fila"]'),
                cellPropertiesBtn: ()=> cy.get('#enviarCorreo [aria-label="Propiedades de la celda"]'),
                insertRowBeforeBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar fila antes"]'),
                insertRowAfterBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar fila después"]'),
                removeRowBtn: ()=> cy.get('#enviarCorreo [aria-label="Eliminar fila"]'),
                insertColBeforeBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar columna antes"]'),
                insertColAfteBtn: ()=> cy.get('#enviarCorreo [aria-label="Insertar columna después"]'),
                removeColBtn: ()=> cy.get('#enviarCorreo [aria-label="Eliminar columna"]'),
            },
            cancelBtn: ()=> cy.get('#enviar').siblings('[title="Cancelar"]'), //to check
            sendBtn: ()=> cy.get('#enviar') //to check
        }
    }
}
export default new MailboxPage;