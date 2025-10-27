# Ker Nethalas for CSB (unofficial)
This is an unnofficial module that makes it possible to play **Ker Nethalas: Into the Midnight Throne** on Foundry VTT. _No copyrighted material contained in this module._ Requires Ker Nethalas game (book or pdf) and Custom System Builder. Compatible with Foundry v11+

## Install Guide
**IMPORTANT: Check the *Keep Document IDs* checkbox when importing the templates or the equipable containers will not be restored correctly.**

**Manifest Url:** https://raw.githubusercontent.com/Forelius/kernethalascsb/main/module.json

Check out GrotesqueZombie's Compendium, which contains this module as well as additional content.<br>
https://github.com/GrotesqueZombie/Vaelorian-Archive/releases

* After enabling the module "KerNethalasCSB", import the compendiums.
* Create masteries using the __mastery_ template.
* Create weapons using the __weapon_ template.
* Use the __lore_ template for lore.
* Use the __relic_ template for all non-weapon relics.
* The __relicWeapon_ template should be used for relics that are weapons.
* Create a new character actor and set the template to __Character_ if you want to be able to drag/drop weapons and mastery onto the character sheet. Use the __Character.1_ template if you want to type in the weapon and masteries manually.

## Upgrade Tips
Upgrading to a new version can be a bit tedious and I've tried to automate the process as much as possible, but there some steps that I haven't yet handled.

After upgrading, and **before importing templates**, perform the following steps:

* Backup the world.
* Close all sheets. This includes items, actors and other sheets open.
* Do not open any sheets until all steps are completed. This is important.
* Delete the existing KerNethalasCSB templates from the actors and items tabs. Only the templates, not your actors and items based on those templates.
* Delete the existing KerNethalasCSB macros from your macros
* Import the templates from the _KN Item Templates_ and _KN Actor Templates_ compendiums, making sure to check the *Keep Document IDs* checkbox.
* Import the macros from the _KN Macros_ compendium.
* Execute the _KNFixTemplateLinkage_ macro and wait until the prompt informs you that the process is complete.
* Open __Character_ template and on _page 1_ find _Item Container weaponContainer_ and click on its title bar. A dialog will open and under the _Filter Items_ section make sure that __weapon_ and __relicWeapon_ checkboxes are checked.
* Do the same step as above for the __Character.1_ template.
* With the __Character_ and __Character.1_ templates, on _page 1_, find _Item Container masteries_ and click on its title bar. A dialog will open and under the _Filter Items_ section make sure that __mastery_ is checked.
* Finally, open the different templates and click _Reload all character sheets_ and _Reload all item sheets_ buttons. If a template doesn't have that button, then no need to do anything with it.
