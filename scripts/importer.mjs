export class ImportMonsterApp extends FormApplication {
    constructor(item) {
        super();
        this.item = item;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: 'Import Monster',
            width: 800,
            height: 450,
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
        let lines = pdfText.split('\n');
        console.log("Ker Nethalas CSB:", lines);
    }
}