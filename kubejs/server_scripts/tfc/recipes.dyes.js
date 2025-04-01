﻿// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFCDyeRecipes(event) {

	//#region Выход: Свечи

	event.recipes.gtceu.chemical_bath(`tfg:tfc/candle_decolor`)
		.itemInputs('#tfc:colored_candles')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs('tfc:candle')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {

		event.recipes.gtceu.chemical_bath(`tfg:tfc/${dye}_candle`)
			.itemInputs('tfc:candle')
			.inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
			.itemOutputs(`tfc:candle/${dye}`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)

	})

	//#endregion

	//#region Обычный сосуд

	event.recipes.gtceu.chemical_bath(`unfired_vessel_decolor`)
		.itemInputs('#tfg:colorized_unfired_vessels')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 36))
		.itemOutputs('tfc:ceramic/unfired_vessel')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.gtceu.chemical_bath(`fired_vessel_decolor`)
		.itemInputs('#tfg:colorized_fired_vessels')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 36))
		.itemOutputs('tfc:ceramic/vessel')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.gtceu.chemical_bath(`${dye}_unfired_vessel`)
			.itemInputs('tfc:ceramic/unfired_vessel')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 36))
			.itemOutputs(`tfc:ceramic/${dye}_unfired_vessel`)
			.duration(150)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${dye}_vessel`)
			.itemInputs('tfc:ceramic/vessel')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 36))
			.itemOutputs(`tfc:ceramic/${dye}_glazed_vessel`)
			.duration(150)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	//#endregion

	//#region Большой сосуд

	event.recipes.gtceu.chemical_bath(`unfired_large_vessel_decolor`)
		.itemInputs('#tfg:colorized_unfired_large_vessels')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs('tfc:ceramic/unfired_large_vessel')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.gtceu.chemical_bath(`fired_large_vessel_decolor`)
		.itemInputs('#tfg:colorized_fired_large_vessels')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs('tfc:ceramic/large_vessel')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.gtceu.chemical_bath(`${dye}_large_unfired_vessel`)
			.itemInputs('tfc:ceramic/unfired_large_vessel')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`tfc:ceramic/unfired_large_vessel/${dye}`)
			.duration(150)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${dye}_large_vessel`)
			.itemInputs('tfc:ceramic/large_vessel')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`tfc:ceramic/large_vessel/${dye}`)
			.duration(150)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	//#endregion

	//#region Replace existing dyes

	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {

		event.remove(`tfc:pot/${dyeName}_dye`);

		let inputArray = new Array(0);

		for (let i = 1; i < 5; i++) {

			inputArray.length = 0;

			for (let j = 1; j < i + 1; j++) {
				inputArray.push(`#forge:dyes/${dyeName}`);
			}

			event.recipes.tfc.pot(inputArray, Fluid.of('tfc:salt_water', 250 * i), 600, 2000)
				.fluidOutput(Fluid.of(`tfc:${dyeName}_dye`, 144 * i))
				.id(`tfc:pot/${i}x_${dyeName}_dye`)
		}
	})

	//#endregion
}