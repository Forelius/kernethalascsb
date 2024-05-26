import { ImportMonsterApp } from './importer.mjs';

window.kncsb = window.kncsb || {
	moduleName: `kernethalascsb`,
};

Hooks.on("init", function () {
	console.log("Ker Nethalas CSB: Begin initialization.");

});

Hooks.on("ready", function () {
	console.log("Ker Nethalas CSB: Game data ready, finalizing module setup.");
	//let dialog = new ImportMonsterApp();
	//return dialog.render(true);
});

Hooks.on('renderSidebarTab', async function (sidebar, html) {
    if (sidebar._element[0].id === 'actors' && game.user.isGM) {
		console.log('Ker Nethalas CSB: renderSidebarTab', sidebar._element[0].id);
        let button = $(`<div class='header-actions action-buttons flexrow'><button><i class='fas fa-file-import'></i>Import Monster</button></div>`)
        button.on('click', async () => {
            let dialog = new ImportMonsterApp();
            return dialog.render(true);
        })
        $(html).find('.header-actions').append(button);
    }
});