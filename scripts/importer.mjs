export class ImportMonsterApp extends FormApplication {
    constructor(item) {
        super();
        this.item = item;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: 'Import Monster',
            width: 600,
            height: 300,
            template: `modules/kernethalascsb/templates/import-dialog.hbs`
        });
    }

    async getData() {
        let context = super.getData();
        return context;
    }

    async activateListeners(html) {
        html.find("button#processText").click(async (event) => {
            event.preventDefault();
            //$('#errorMessage').html("").removeClass("visible");
            await this.loadContent($('textarea#pdfText').val());
        });
    }

    async loadContent(pdfText) {
        const self = this
        console.log("Ker Nethalas CSB:", pdfText);
    //    if (file) {
    //        let zip = await JSZip.loadAsync(file)
    //        let key = Object.keys(zip.files)[0]
    //        let targetFile = zip.files[key]
    //        let jsonData = await targetFile.async("string")
    //        let data = JSON.parse(jsonData)

    //        let geometryData = data.data.geometry
    //        let dataNodes = data.state.document.nodes
    //        let doorIDs = self.getDoorIDs(dataNodes)
    //        let stairIDs = self.getStairIDs(dataNodes)
    //        let lightData = self.getLights(dataNodes)
    //        let doc = dataNodes.document
    //        let gridCellSize = dataNodes[doc.children[0]].grid.cellDiameter

    //        self.updateButtonStatus(game.i18n.localize("DSI.import.parsingfile"), true)
    //        let offsetData = await self.parseShapes(geometryData, doorIDs, stairIDs, gridCellSize, offsetX, offsetY)
    //        await self.processLights(lightData, offsetData, gridCellSize)
    //        self.updateButtonStatus(game.i18n.localize("DSI.import.finished"))
    //    } else {
    //        $('#dsimportErrorMessage').html(game.i18n.localize("DSI.import.error.noFile")).addClass("visible")
    //        self.updateButtonStatus(game.i18n.localize("DSI.import.import"))
    //    }
    }
}