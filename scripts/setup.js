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

Hooks.on('updateCombat', (combat, updates) => {
	let msg = "";
	let combatant = combat.turns[combat.turn];
	// If round change...
	if (combat.previous && combat.previous.round !== combat.round) {
		msg = `<span style="font-size:16px; font-weight:800;">Round ${updates.round}</span><hr>`;
	}
	// If turn change...
	if (combat.previous && combat.previous.turn !== combat.turn) {
		let possesive = (combatant.name.substr(combatant.name.length - 1) === "s") ? "'" : "'s";
		let combatantName = combatant.name + possesive;
		msg = (msg != null) ? msg + '</br>' : "";
		msg += `${combatantName} turn`
	}
	//console.log('updateCombat', combat, updates, msg);
	if (msg !== null) {
		msg = `<div>${msg}</div>`;
		ChatMessage.create({ content: msg, whisper: [game.user.id] });
	}
	//if (updates.active) {
		//new CONFIG.combatTrackerDock.CombatDock(combat).render(true);
	//}
});
//Hooks.on('renderSidebarTab', async function (sidebar, html) {
//    if (sidebar._element[0].id === 'actors' && game.user.isGM) {
//		console.log('Ker Nethalas CSB: renderSidebarTab', sidebar._element[0].id);
//        let button = $(`<div class='header-actions action-buttons flexrow'><button><i class='fas fa-file-import'></i>Import Monster</button></div>`)
//        button.on('click', async () => {
//            let dialog = new ImportMonsterApp();
//            return dialog.render(true);
//        })
//        $(html).find('.header-actions').append(button);
//    }
//});