/*!
* DevExtreme (dx.messages.pt.js)
* Version: 21.2.5
* Build date: Mon Jan 17 2022
*
* Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        pt: {
            Yes: "Sim",
            No: "N\xe3o",
            Cancel: "Cancelar",
            Clear: "Limpar",
            Done: "Conclu\xeddo",
            Loading: "Carregando ...",
            Select: "Selecione ...",
            Search: "Pesquisar ...",
            Back: "Voltar",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Sem dados",
            "dxDropDownEditor-selectLabel": "Selecione",
            "validation-required": "Preenchimento obrigat\xf3rio",
            "validation-required-formatted": "{0} \xe9 de preenchimento obrigat\xf3rio",
            "validation-numeric": "Valor deve ser um n\xfamero",
            "validation-numeric-formatted": "{0} deve ser um n\xfamero",
            "validation-range": "Valor est\xe1 fora do intervalo",
            "validation-range-formatted": "{0} est\xe1 fora do intervalo",
            "validation-stringLength": "O comprimento do valor n\xe3o est\xe1 correto",
            "validation-stringLength-formatted": "O comprimento de {0} n\xe3o est\xe1 correto",
            "validation-custom": "Valor inv\xe1lido",
            "validation-custom-formatted": "{0} \xe9 inv\xe1lido",
            "validation-async": "Valor inv\xe1lido",
            "validation-async-formatted": "{0} \xe9 inv\xe1lido",
            "validation-compare": "Valores n\xe3o coincidem",
            "validation-compare-formatted": "{0} n\xe3o coincidem",
            "validation-pattern": "Valor n\xe3o corresponde ao padr\xe3o",
            "validation-pattern-formatted": "{0} n\xe3o corresponde ao padr\xe3o",
            "validation-email": "Email inv\xe1lido",
            "validation-email-formatted": "{0} \xe9 inv\xe1lido",
            "validation-mask": "Valor inv\xe1lido",
            "dxLookup-searchPlaceholder": "N\xfamero m\xednimo de caracteres: {0}",
            "dxList-pullingDownText": "Puxar para baixo para recarregar...",
            "dxList-pulledDownText": "Soltar para recarregar...",
            "dxList-refreshingText": "Recarregando ...",
            "dxList-pageLoadingText": "A carregar ...",
            "dxList-nextButtonText": "Mais",
            "dxList-selectAll": "Selecionar todos",
            "dxListEditDecorator-delete": "Eliminar",
            "dxListEditDecorator-more": "Mais",
            "dxScrollView-pullingDownText": "Puxar para baixo para recarregar...",
            "dxScrollView-pulledDownText": "Soltar para recarregar...",
            "dxScrollView-refreshingText": "Recarregando ...",
            "dxScrollView-reachBottomText": "A carregar ...",
            "dxDateBox-simulatedDataPickerTitleTime": "Selecionar hora",
            "dxDateBox-simulatedDataPickerTitleDate": "Selecionar data",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Selecionar data e hora",
            "dxDateBox-validation-datetime": "Valor deve ser uma data ou hora",
            "dxFileUploader-selectFile": "Selecionar arquivo",
            "dxFileUploader-dropFile": "ou Soltar arquivo aqui",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Upload",
            "dxFileUploader-uploaded": "Upload conclu\xeddo",
            "dxFileUploader-readyToUpload": "Pronto para upload",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Upload falhou",
            "dxFileUploader-invalidFileExtension": "Tipo de arquivo n\xe3o \xe9 permitido",
            "dxFileUploader-invalidMaxFileSize": "O arquivo \xe9 muito grande",
            "dxFileUploader-invalidMinFileSize": "O arquivo \xe9 muito pequeno",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "At\xe9 {0}",
            "dxSwitch-switchedOnText": "LIGADO",
            "dxSwitch-switchedOffText": "DESLIGADO",
            "dxForm-optionalMark": "opcional",
            "dxForm-requiredMessage": "{0} \xe9 de preenchimento obrigat\xf3rio",
            "dxNumberBox-invalidValueMessage": "Valor deve ser um n\xfamero",
            "dxNumberBox-noDataText": "Sem dados",
            "dxDataGrid-columnChooserTitle": "Seletor de Colunas",
            "dxDataGrid-columnChooserEmptyText": "Arraste uma coluna para at\xe9 aqui para escond\xea-la",
            "dxDataGrid-groupContinuesMessage": "Continua na p\xe1gina seguinte",
            "dxDataGrid-groupContinuedMessage": "Continua\xe7\xe3o da p\xe1gina anterior",
            "dxDataGrid-groupHeaderText": "Agrupar pela coluna",
            "dxDataGrid-ungroupHeaderText": "Remover grupo",
            "dxDataGrid-ungroupAllText": "Remover todos os grupos",
            "dxDataGrid-editingEditRow": "Editar",
            "dxDataGrid-editingSaveRowChanges": "Salvar",
            "dxDataGrid-editingCancelRowChanges": "Cancelar",
            "dxDataGrid-editingDeleteRow": "Eliminar",
            "dxDataGrid-editingUndeleteRow": "Recuperar",
            "dxDataGrid-editingConfirmDeleteMessage": "Tem certeza que deseja eliminar este registro?",
            "dxDataGrid-validationCancelChanges": "Cancelar altera\xe7\xf5es",
            "dxDataGrid-groupPanelEmptyText": "Arrastar o cabe\xe7alho de uma coluna para aqui para agrupar por essa coluna",
            "dxDataGrid-noDataText": "Sem dados",
            "dxDataGrid-searchPanelPlaceholder": "Pesquisar ...",
            "dxDataGrid-filterRowShowAllText": "(Todos)",
            "dxDataGrid-filterRowResetOperationText": "Limpar",
            "dxDataGrid-filterRowOperationEquals": "Igual",
            "dxDataGrid-filterRowOperationNotEquals": "Diferente",
            "dxDataGrid-filterRowOperationLess": "Menor que",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menor que ou igual a",
            "dxDataGrid-filterRowOperationGreater": "Maior que",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Maior que ou igual a",
            "dxDataGrid-filterRowOperationStartsWith": "Come\xe7a com",
            "dxDataGrid-filterRowOperationContains": "Cont\xe9m",
            "dxDataGrid-filterRowOperationNotContains": "N\xe3o cont\xe9m",
            "dxDataGrid-filterRowOperationEndsWith": "Termina com",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "In\xedcio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fim",
            "dxDataGrid-applyFilterText": "Aplicar filtro",
            "dxDataGrid-trueText": "verdadeiro",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Ordenar ascendentemente",
            "dxDataGrid-sortingDescendingText": "Ordenar descendentemente",
            "dxDataGrid-sortingClearText": "Limpar ordena\xe7\xe3o",
            "dxDataGrid-editingSaveAllChanges": "Salvar todas as altera\xe7\xf5es",
            "dxDataGrid-editingCancelAllChanges": "Descartar altera\xe7\xf5es",
            "dxDataGrid-editingAddRow": "Adicionar uma linha",
            "dxDataGrid-summaryMin": "M\xedn: {0}",
            "dxDataGrid-summaryMinOtherColumn": "M\xedn de {1} \xe9 {0}",
            "dxDataGrid-summaryMax": "M\xe1x: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "M\xe1x de {1} \xe9 {0}",
            "dxDataGrid-summaryAvg": "M\xe9d: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "M\xe9dia de {1} \xe9 {0}",
            "dxDataGrid-summarySum": "Soma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Soma de {1} \xe9 {0}",
            "dxDataGrid-summaryCount": "Contagem: {0}",
            "dxDataGrid-columnFixingFix": "Fixar",
            "dxDataGrid-columnFixingUnfix": "N\xe3o fixar",
            "dxDataGrid-columnFixingLeftPosition": "\xc0 esquerda",
            "dxDataGrid-columnFixingRightPosition": "\xc0 direita",
            "dxDataGrid-exportTo": "Exportar para",
            "dxDataGrid-exportToExcel": "Exportar para Excel",
            "dxDataGrid-exporting": "Exportar...",
            "dxDataGrid-excelFormat": "Planilha Excel",
            "dxDataGrid-exportAll": "Exportar todos os dados",
            "dxDataGrid-exportSelectedRows": "Exportar linhas selecionadas",
            "dxDataGrid-selectedRows": "Linhas selecionadas",
            "dxDataGrid-headerFilterEmptyValue": "(Vazio)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Cancelar",
            "dxDataGrid-ariaColumn": "Coluna",
            "dxDataGrid-ariaValue": "Valor",
            "dxDataGrid-ariaFilterCell": "Filtro de c\xe9lula",
            "dxDataGrid-ariaCollapse": "Contrair",
            "dxDataGrid-ariaExpand": "Expandir",
            "dxDataGrid-ariaDataGrid": "Grelha de dados",
            "dxDataGrid-ariaSearchInGrid": "Pesquisar na grade de dados",
            "dxDataGrid-ariaSelectAll": "Selecionar todos",
            "dxDataGrid-ariaSelectRow": "Selecionar linha",
            "dxDataGrid-filterBuilderPopupTitle": "Construtor de filtro",
            "dxDataGrid-filterPanelCreateFilter": "Criar filtro",
            "dxDataGrid-filterPanelClearFilter": "Limpar",
            "dxDataGrid-filterPanelFilterEnabledHint": "Habilitar o filtro",
            "dxTreeList-ariaTreeList": "Lista em \xe1rvore",
            "dxTreeList-editingAddRowToNode": "Adicionar",
            "dxPager-infoText": "P\xe1gina {0} de {1} ({2} itens)",
            "dxPager-pagesCountText": "de",
            "dxPager-pageSizesAllText": "Todos",
            "dxPivotGrid-grandTotal": "Grande Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Seletor de Colunas",
            "dxPivotGrid-showFieldChooser": "Mostrar Seletor de Colunas",
            "dxPivotGrid-expandAll": "Expandir Tudo",
            "dxPivotGrid-collapseAll": "Contrair Tudo",
            "dxPivotGrid-sortColumnBySummary": 'Ordenar "{0}" por esta Coluna',
            "dxPivotGrid-sortRowBySummary": 'Ordenar "{0}" por esta Linha',
            "dxPivotGrid-removeAllSorting": "Remover Todas as Ordena\xe7\xf5es",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campos de Linha",
            "dxPivotGrid-columnFields": "Campos de Coluna",
            "dxPivotGrid-dataFields": "Campos de Dados",
            "dxPivotGrid-filterFields": "Campos de Filtro",
            "dxPivotGrid-allFields": "Todos os Campos",
            "dxPivotGrid-columnFieldArea": "Arraste os campos de coluna at\xe9 aqui",
            "dxPivotGrid-dataFieldArea": "Arraste os campos de dados at\xe9 aqui",
            "dxPivotGrid-rowFieldArea": "Arraste os campos de linha at\xe9 aqui",
            "dxPivotGrid-filterFieldArea": "Arraste os campos de filtro at\xe9 aqui",
            "dxScheduler-editorLabelTitle": "Assunto",
            "dxScheduler-editorLabelStartDate": "Data de In\xedcio",
            "dxScheduler-editorLabelEndDate": "Data Final",
            "dxScheduler-editorLabelDescription": "Descri\xe7\xe3o",
            "dxScheduler-editorLabelRecurrence": "Repetir",
            "dxScheduler-openAppointment": "Abrir compromisso",
            "dxScheduler-recurrenceNever": "Nunca",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Diariamente",
            "dxScheduler-recurrenceWeekly": "Semanalmente",
            "dxScheduler-recurrenceMonthly": "Mensalmente",
            "dxScheduler-recurrenceYearly": "Anualmente",
            "dxScheduler-recurrenceRepeatEvery": "Todos",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Fim da repeti\xe7\xe3o",
            "dxScheduler-recurrenceAfter": "Depois de",
            "dxScheduler-recurrenceOn": "A",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dia(s)",
            "dxScheduler-recurrenceRepeatWeekly": "semana(s)",
            "dxScheduler-recurrenceRepeatMonthly": "m\xeas(es)",
            "dxScheduler-recurrenceRepeatYearly": "ano(s)",
            "dxScheduler-switcherDay": "Dia",
            "dxScheduler-switcherWeek": "Semana",
            "dxScheduler-switcherWorkWeek": "Dias \xfateis",
            "dxScheduler-switcherMonth": "M\xeas",
            "dxScheduler-switcherTimelineDay": "Linha de tempo Dia",
            "dxScheduler-switcherTimelineWeek": "Linha de tempo Semana",
            "dxScheduler-switcherTimelineWorkWeek": "Linha de tempo Dias \xfateis",
            "dxScheduler-switcherTimelineMonth": "Linha de tempo M\xeas",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-recurrenceRepeatOnDate": "na data",
            "dxScheduler-recurrenceRepeatCount": "ocorr\xeancia(s)",
            "dxScheduler-allDay": "Todo o dia",
            "dxScheduler-confirmRecurrenceEditMessage": "Deseja editar s\xf3 este compromisso ou a s\xe9rie toda?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Deseja eliminar s\xf3 este compromisso ou a s\xe9rie toda?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editar s\xe9rie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Eliminar s\xe9rie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editar compromisso",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Eliminar compromisso",
            "dxScheduler-noTimezoneTitle": "Sem fuso hor\xe1rio",
            "dxScheduler-moreAppointments": "{0} mais",
            "dxCalendar-todayButtonText": "Hoje",
            "dxCalendar-ariaWidgetName": "Calend\xe1rio",
            "dxColorView-ariaRed": "Vermelho",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Azul",
            "dxColorView-ariaAlpha": "Transpar\xeancia",
            "dxColorView-ariaHex": "C\xf3digo de cor",
            "dxTagBox-selected": "{0} selecionados",
            "dxTagBox-allSelected": "Todos selecionados ({0})",
            "dxTagBox-moreSelected": "{0} mais",
            "vizExport-printingButtonText": "Imprimir",
            "vizExport-titleMenuText": "Exportar/Imprimir",
            "vizExport-exportButtonText": "{0}-Arquivo",
            "dxFilterBuilder-and": "E",
            "dxFilterBuilder-or": "OU",
            "dxFilterBuilder-notAnd": "N\xc3O E",
            "dxFilterBuilder-notOr": "N\xc3O OU",
            "dxFilterBuilder-addCondition": "Adicionar condi\xe7\xe3o",
            "dxFilterBuilder-addGroup": "Adicionar Grupo",
            "dxFilterBuilder-enterValueText": "<preencha com um valor>",
            "dxFilterBuilder-filterOperationEquals": "Igual",
            "dxFilterBuilder-filterOperationNotEquals": "Diferente",
            "dxFilterBuilder-filterOperationLess": "Menor que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menor ou igual que",
            "dxFilterBuilder-filterOperationGreater": "Maior que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Maior ou igual que",
            "dxFilterBuilder-filterOperationStartsWith": "Come\xe7a com",
            "dxFilterBuilder-filterOperationContains": "Cont\xe9m",
            "dxFilterBuilder-filterOperationNotContains": "N\xe3o cont\xe9m",
            "dxFilterBuilder-filterOperationEndsWith": "Termina com",
            "dxFilterBuilder-filterOperationIsBlank": "\xc9 vazio",
            "dxFilterBuilder-filterOperationIsNotBlank": "N\xe3o \xe9 vazio",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Algum de",
            "dxFilterBuilder-filterOperationNoneOf": "Nenhum de",
            "dxHtmlEditor-dialogColorCaption": "Alterar cor da fonte",
            "dxHtmlEditor-dialogBackgroundCaption": "Alterar cor de plano de fundo",
            "dxHtmlEditor-dialogLinkCaption": "Adicionar link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texto",
            "dxHtmlEditor-dialogLinkTargetField": "Abrir link em nova janela",
            "dxHtmlEditor-dialogImageCaption": "Adicionar imagem",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texto alternativo",
            "dxHtmlEditor-dialogImageWidthField": "Largura (px)",
            "dxHtmlEditor-dialogImageHeightField": "Altura (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Cabe\xe7alho",
            "dxHtmlEditor-normalText": "Texto normal",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertHeaderRow": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-cellProperties": "TODO",
            "dxHtmlEditor-tableProperties": "TODO",
            "dxHtmlEditor-insert": "TODO",
            "dxHtmlEditor-delete": "TODO",
            "dxHtmlEditor-border": "TODO",
            "dxHtmlEditor-style": "TODO",
            "dxHtmlEditor-width": "TODO",
            "dxHtmlEditor-height": "TODO",
            "dxHtmlEditor-borderColor": "TODO",
            "dxHtmlEditor-tableBackground": "TODO",
            "dxHtmlEditor-dimensions": "TODO",
            "dxHtmlEditor-alignment": "TODO",
            "dxHtmlEditor-horizontal": "TODO",
            "dxHtmlEditor-vertical": "TODO",
            "dxHtmlEditor-paddingVertical": "TODO",
            "dxHtmlEditor-paddingHorizontal": "TODO",
            "dxHtmlEditor-pixels": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "Geral",
            "dxDiagram-categoryFlowchart": "Fluxograma",
            "dxDiagram-categoryOrgChart": "Organograma",
            "dxDiagram-categoryContainers": "Cont\xeaineres",
            "dxDiagram-categoryCustom": "Personalizado",
            "dxDiagram-commandExportToSvg": "Exportar para SVG",
            "dxDiagram-commandExportToPng": "Exportar para PNG",
            "dxDiagram-commandExportToJpg": "Exportar para JPG",
            "dxDiagram-commandUndo": "Desfazer",
            "dxDiagram-commandRedo": "Refazer",
            "dxDiagram-commandFontName": "Nome da fonte",
            "dxDiagram-commandFontSize": "Tamanho da fonte",
            "dxDiagram-commandBold": "Negrito",
            "dxDiagram-commandItalic": "It\xe1lico",
            "dxDiagram-commandUnderline": "Sublinhado",
            "dxDiagram-commandTextColor": "Cor da fonte",
            "dxDiagram-commandLineColor": "Cor da linha",
            "dxDiagram-commandLineWidth": "Espessura da linha",
            "dxDiagram-commandLineStyle": "Estilo da linha",
            "dxDiagram-commandLineStyleSolid": "S\xf3lido",
            "dxDiagram-commandLineStyleDotted": "Pontilhado",
            "dxDiagram-commandLineStyleDashed": "Tracejado",
            "dxDiagram-commandFillColor": "Cor de preenchimento",
            "dxDiagram-commandAlignLeft": "Alinhar \xe0 esquerda",
            "dxDiagram-commandAlignCenter": "Centralizar horizontalmente",
            "dxDiagram-commandAlignRight": "Alinhar \xe0 direita",
            "dxDiagram-commandConnectorLineType": "Tipo de conex\xe3o",
            "dxDiagram-commandConnectorLineStraight": "Reto",
            "dxDiagram-commandConnectorLineOrthogonal": "Ortogonal",
            "dxDiagram-commandConnectorLineStart": "Conector de in\xedcio de linha",
            "dxDiagram-commandConnectorLineEnd": "Conector de fim de linha",
            "dxDiagram-commandConnectorLineNone": "Nenhum",
            "dxDiagram-commandConnectorLineArrow": "Flecha",
            "dxDiagram-commandFullscreen": "Tela cheia",
            "dxDiagram-commandUnits": "Unidades",
            "dxDiagram-commandPageSize": "Tamanho da p\xe1gina",
            "dxDiagram-commandPageOrientation": "Orienta\xe7\xe3o",
            "dxDiagram-commandPageOrientationLandscape": "Paiagem",
            "dxDiagram-commandPageOrientationPortrait": "Retrato",
            "dxDiagram-commandPageColor": "Cor da p\xe1gina",
            "dxDiagram-commandShowGrid": "Mostrar grade",
            "dxDiagram-commandSnapToGrid": "Ajustar \xe0 grade",
            "dxDiagram-commandGridSize": "Tamanho da grade",
            "dxDiagram-commandZoomLevel": "N\xedvel de zoom",
            "dxDiagram-commandAutoZoom": "Zoom autom\xe1tico",
            "dxDiagram-commandFitToContent": "Ajustar ao conte\xfado",
            "dxDiagram-commandFitToWidth": "Ajustar \xe0 largura",
            "dxDiagram-commandAutoZoomByContent": "Zoom autom\xe1tico por conte\xfado",
            "dxDiagram-commandAutoZoomByWidth": "Zoom autom\xe1tico por largura",
            "dxDiagram-commandSimpleView": "Visualiza\xe7\xe3o simples",
            "dxDiagram-commandCut": "Cortar",
            "dxDiagram-commandCopy": "Copiar",
            "dxDiagram-commandPaste": "Colar",
            "dxDiagram-commandSelectAll": "Selecionar tudo",
            "dxDiagram-commandDelete": "Remover",
            "dxDiagram-commandBringToFront": "Trazer para a frente",
            "dxDiagram-commandSendToBack": "Enviar para o fundo",
            "dxDiagram-commandLock": "Bloquear",
            "dxDiagram-commandUnlock": "Desbloquear",
            "dxDiagram-commandInsertShapeImage": "Inserir imagem...",
            "dxDiagram-commandEditShapeImage": "Alterar imagem...",
            "dxDiagram-commandDeleteShapeImage": "Remover imagem",
            "dxDiagram-commandLayoutLeftToRight": "Da esquerda para a direita",
            "dxDiagram-commandLayoutRightToLeft": "Da direita para a esquerda",
            "dxDiagram-commandLayoutTopToBottom": "De cima para baixo",
            "dxDiagram-commandLayoutBottomToTop": "De baixo para cima",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "Aceitar",
            "dxDiagram-dialogButtonCancel": "Cancelar",
            "dxDiagram-dialogInsertShapeImageTitle": "Inserir imagem",
            "dxDiagram-dialogEditShapeImageTitle": "Alterar imagem",
            "dxDiagram-dialogEditShapeImageSelectButton": "Selecionar imagem",
            "dxDiagram-dialogEditShapeImageLabelText": "ou arraste um arquivo aqui",
            "dxDiagram-uiExport": "Exportar",
            "dxDiagram-uiProperties": "Propriedades",
            "dxDiagram-uiSettings": "Configura\xe7\xf5es",
            "dxDiagram-uiShowToolbox": "Exibir ferramentas",
            "dxDiagram-uiSearch": "Pesquisar",
            "dxDiagram-uiStyle": "Estilo",
            "dxDiagram-uiLayout": "Leiaute",
            "dxDiagram-uiLayoutTree": "\xc1rvores",
            "dxDiagram-uiLayoutLayered": "N\xedveis",
            "dxDiagram-uiDiagram": "Diagrama",
            "dxDiagram-uiText": "Texto",
            "dxDiagram-uiObject": "Objeto",
            "dxDiagram-uiConnector": "Conector",
            "dxDiagram-uiPage": "P\xe1gina",
            "dxDiagram-shapeText": "Texto",
            "dxDiagram-shapeRectangle": "Ret\xe2ngulo",
            "dxDiagram-shapeEllipse": "Elipse",
            "dxDiagram-shapeCross": "Cruz",
            "dxDiagram-shapeTriangle": "Tri\xe2ngulo",
            "dxDiagram-shapeDiamond": "Diamante",
            "dxDiagram-shapeHeart": "Cora\xe7\xe3o",
            "dxDiagram-shapePentagon": "Pent\xe1gono",
            "dxDiagram-shapeHexagon": "Hex\xe1gono",
            "dxDiagram-shapeOctagon": "Oct\xf3gono",
            "dxDiagram-shapeStar": "Estrela",
            "dxDiagram-shapeArrowLeft": "Flecha \xe0 esquerda",
            "dxDiagram-shapeArrowUp": "Flecha para cima",
            "dxDiagram-shapeArrowRight": "Flecha \xe0 direita",
            "dxDiagram-shapeArrowDown": "Flecha para baixo",
            "dxDiagram-shapeArrowUpDown": "Flecha para cima e para baixo",
            "dxDiagram-shapeArrowLeftRight": "Flecha \xe0 esquerda e direita",
            "dxDiagram-shapeProcess": "Processo",
            "dxDiagram-shapeDecision": "Decis\xe3o",
            "dxDiagram-shapeTerminator": "Exterminador",
            "dxDiagram-shapePredefinedProcess": "Processo predefinido",
            "dxDiagram-shapeDocument": "Documento",
            "dxDiagram-shapeMultipleDocuments": "V\xe1rios documentos",
            "dxDiagram-shapeManualInput": "Entrada manual",
            "dxDiagram-shapePreparation": "Prepara\xe7\xe3o",
            "dxDiagram-shapeData": "Dados",
            "dxDiagram-shapeDatabase": "Base de dados",
            "dxDiagram-shapeHardDisk": "Disco r\xedgido",
            "dxDiagram-shapeInternalStorage": "Mem\xf3ria interna",
            "dxDiagram-shapePaperTape": "Fita de papel",
            "dxDiagram-shapeManualOperation": "Opera\xe7\xe3o manual",
            "dxDiagram-shapeDelay": "Atraso",
            "dxDiagram-shapeStoredData": "Dados armazenados",
            "dxDiagram-shapeDisplay": "Tela",
            "dxDiagram-shapeMerge": "Fus\xe3o",
            "dxDiagram-shapeConnector": "Conector",
            "dxDiagram-shapeOr": "Ou",
            "dxDiagram-shapeSummingJunction": "Jun\xe7\xe3o de soma",
            "dxDiagram-shapeContainerDefaultText": "Cont\xeainer",
            "dxDiagram-shapeVerticalContainer": "Cont\xeainer vertical",
            "dxDiagram-shapeHorizontalContainer": "Cont\xeainer horizontal",
            "dxDiagram-shapeCardDefaultText": "Nome",
            "dxDiagram-shapeCardWithImageOnLeft": "Cart\xe3o com imagem \xe0 esquerda",
            "dxDiagram-shapeCardWithImageOnTop": "Cart\xe3o com imagem na parte superior",
            "dxDiagram-shapeCardWithImageOnRight": "Cart\xe3o com imagem \xe0 direita",
            "dxGantt-dialogTitle": "T\xedtulo",
            "dxGantt-dialogStartTitle": "Iniciar",
            "dxGantt-dialogEndTitle": "Encerrar",
            "dxGantt-dialogProgressTitle": "Progresso",
            "dxGantt-dialogResourcesTitle": "Recursos",
            "dxGantt-dialogResourceManagerTitle": "Gerenciador de recursos",
            "dxGantt-dialogTaskDetailsTitle": "Detalhes da tarefa",
            "dxGantt-dialogEditResourceListHint": "Editar lista de recursos",
            "dxGantt-dialogEditNoResources": "Sem recursos",
            "dxGantt-dialogButtonAdd": "Adicionar",
            "dxGantt-contextMenuNewTask": "Nova tarefa",
            "dxGantt-contextMenuNewSubtask": "Nova subtarefa",
            "dxGantt-contextMenuDeleteTask": "Excluir tarefa",
            "dxGantt-contextMenuDeleteDependency": "Excluir depend\xeancia",
            "dxGantt-dialogTaskDeleteConfirmation": "Excluir uma tarefa tamb\xe9m exclui suas depend\xeancias e subtarefas. Voc\xea tem certeza que quer excluir essa tarefa?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Voc\xea tem certeza que quer excluir a depend\xeancia desta tarefa?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Ao excluir o recurso, ele tamb\xe9m ser\xe1 excluido das tarefas em que est\xe1 atribu\xeddo. Tem certeza que quer excluir estes recursos? Recurso: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "A tarefa a ser movida est\xe1 ligada a uma outra tarefa, por uma rela\xe7\xe3o de depend\xeancia. Esta altera\xe7\xe3o conflita com as regras de depend\xeancias. Como voc\xea gostaria de proceder?",
            "dxGantt-dialogConstraintViolationMessage": "A tarefa a ser movida est\xe1 ligada a uma outra tarefa, por uma rela\xe7\xe3o de depend\xeancia. Como voc\xea gostaria de proceder?",
            "dxGantt-dialogCancelOperationMessage": "Cancelar opera\xe7\xe3o",
            "dxGantt-dialogDeleteDependencyMessage": "Excluir a depend\xeancia",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Mover a tarefa e manter a depend\xeancia",
            "dxGantt-undo": "Desfazer",
            "dxGantt-redo": "Refazer",
            "dxGantt-expandAll": "Expandir tudo",
            "dxGantt-collapseAll": "Contrair tudo",
            "dxGantt-addNewTask": "Nova tarefa",
            "dxGantt-deleteSelectedTask": "Excluir tarefas selecionadas",
            "dxGantt-zoomIn": "Aumentar zoom",
            "dxGantt-zoomOut": "Diminuir zoom",
            "dxGantt-fullScreen": "Tela cheia",
            "dxGantt-quarter": "TODO",
            "dxGantt-sortingAscendingText": "Ordenar ascendentemente",
            "dxGantt-sortingDescendingText": "Ordenar descendentemente",
            "dxGantt-sortingClearText": "Limpar ordena\xe7\xe3o",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));
