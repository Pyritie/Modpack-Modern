﻿// priority: 0

function registerTFCMetalsRecipes(event) {

	//#region Рецепты для новых сплавов

	event.recipes.tfc.alloy('tfg:red_alloy', [
		TFC.alloyPart('tfg:redstone', 0.75, 0.85),
		TFC.alloyPart('tfc:copper', 0.15, 0.25)
	]).id('tfg:alloy/red_alloy')

	event.recipes.tfc.alloy('tfg:tin_alloy', [
		TFC.alloyPart('tfc:tin', 0.45, 0.55),
		TFC.alloyPart('tfc:cast_iron', 0.45, 0.55)
	]).id('tfg:alloy/tin_alloy')

	//#endregion

	
	//#region Фикс рецептов колоколов

	//#region Из золота

	event.recipes.tfc.casting(`minecraft:bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:gold', 144), 1)
		.id(`tfc:casting/gold_bell`)

	event.recipes.tfc.heating(`minecraft:bell`, 1060)
		.resultFluid(Fluid.of('gtceu:gold', 144))
		.id(`tfc:heating/gold_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Gold, 144)),
		[
			Fluid.of(GTMaterials.Gold.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Gold.getName()}_bell_mold`)

	//#endregion

	//#region Из латуни

	event.recipes.tfc.casting(`tfc:brass_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:brass', 144), 1)
		.id(`tfc:casting/brass_bell`)

	event.recipes.tfc.heating(`tfc:brass_bell`, 930)
		.resultFluid(Fluid.of('gtceu:brass', 144))
		.id(`tfc:heating/brass_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Brass, 144)),
		[
			Fluid.of(GTMaterials.Brass.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Brass.getName()}_bell_mold`)

	//#endregion

	//#region Из бронзы

	event.recipes.tfc.casting(`tfc:bronze_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:bronze', 144), 1)
		.id(`tfc:casting/bronze_bell`)

	event.recipes.tfc.heating(`tfc:bronze_bell`, 930)
		.resultFluid(Fluid.of('gtceu:bronze', 144))
		.id(`tfc:heating/bronze_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Bronze, 144)),
		[
			Fluid.of(GTMaterials.Bronze.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Bronze.getName()}_bell_mold`)

	//#endregion

	//#endregion

	//#region Рецепты ковки TFC слитков в GT машинах

	// Сырая крица -> Укрепленная крица
	event.recipes.gtceu.forge_hammer('tfg/refined_bloom')
		.itemInputs('tfc:raw_iron_bloom')
		.itemOutputs('tfc:refined_iron_bloom')
		.duration(1000)
		.EUt(4)

	// Укрепленная крица -> Слиток кованного железа
	event.recipes.gtceu.forge_hammer('tfg/wrought_iron_ingot')
		.itemInputs('tfc:refined_iron_bloom')
		.itemOutputs('gtceu:wrought_iron_ingot')
		.duration(1000)
		.EUt(4)

	// Чугун -> Высокоуглеродная сталь
	event.recipes.gtceu.forge_hammer('tfg/high_carbon_steel')
		.itemInputs('tfc:metal/ingot/pig_iron')
		.itemOutputs('tfc:metal/ingot/high_carbon_steel')
		.duration(1000)
		.EUt(4)

	// Высокоуглеродная сталь -> Cталь
	event.recipes.gtceu.forge_hammer('tfg/steel')
		.itemInputs('tfc:metal/ingot/high_carbon_steel')
		.itemOutputs('gtceu:steel_ingot')
		.duration(1000)
		.EUt(4)

	// Высокоуглеродная черная сталь -> черная сталь 
	event.recipes.gtceu.forge_hammer('tfg/black_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_black_steel')
		.itemOutputs('gtceu:black_steel_ingot')
		.duration(1000)
		.EUt(4)

	// Высокоуглеродная синяя сталь -> синяя сталь 
	event.recipes.gtceu.forge_hammer('tfg/blue_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_blue_steel')
		.itemOutputs('gtceu:blue_steel_ingot')
		.duration(1000)
		.EUt(4)

	// Высокоуглеродная красная сталь -> красная сталь 
	event.recipes.gtceu.forge_hammer('tfg/red_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_red_steel')
		.itemOutputs('gtceu:red_steel_ingot')
		.duration(1000)
		.EUt(4)

	// Слабая сталь + Чугун -> Высокоуглеродная черная сталь
	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_black_steel')
		.itemInputs('tfc:metal/ingot/weak_steel', 'tfc:metal/ingot/pig_iron')
		.itemOutputs('tfc:metal/ingot/high_carbon_black_steel')
		.duration(1600)
		.EUt(4)

	// Слабая синяя сталь + Черная сталь -> Высокоуглеродная синяя сталь
	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_blue_steel')
		.itemInputs('tfc:metal/ingot/weak_blue_steel', 'gtceu:black_steel_ingot')
		.itemOutputs('tfc:metal/ingot/high_carbon_blue_steel')
		.duration(1600)
		.EUt(4)

	// Слабая красная сталь + Черная сталь -> Высокоуглеродная красная сталь
	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_red_steel')
		.itemInputs('tfc:metal/ingot/weak_red_steel', 'gtceu:black_steel_ingot')
		.itemOutputs('tfc:metal/ingot/high_carbon_red_steel')
		.duration(1600)
		.EUt(4)

	const TFC_INTERMEDIATE_METALS =
	[
		{ metal: 'pig_iron', meltTemp: 1535 },
		{ metal: 'high_carbon_steel', meltTemp: 1540 },
		{ metal: 'high_carbon_black_steel', meltTemp: 1540 },
		{ metal: 'high_carbon_red_steel', meltTemp: 1540 },
		{ metal: 'high_carbon_blue_steel', meltTemp: 1540 },
		{ metal: 'weak_steel', meltTemp: 1540 },
		{ metal: 'weak_blue_steel', meltTemp: 1540 },
		{ metal: 'weak_red_steel', meltTemp: 1540 },
		{ metal: 'unknown', meltTemp: 400 }
	]

	TFC_INTERMEDIATE_METALS.forEach(x => {

		event.recipes.tfc.casting(`tfc:metal/ingot/${x.metal}`, 'tfc:ceramic/ingot_mold', Fluid.of(`tfc:metal/${x.metal}`, 144), 0.1)
			.id(`tfc:casting/${x.metal}_ingot`)

		event.recipes.tfc.casting(`tfc:metal/ingot/${x.metal}`, 'tfc:ceramic/fire_ingot_mold', Fluid.of(`tfc:metal/${x.metal}`, 144), 0.01)
			.id(`tfc:casting/${x.metal}_fire_ingot`)

		event.recipes.tfc.heating(`tfc:metal/ingot/${x.metal}`, x.meltTemp)
			.resultFluid(Fluid.of(`tfc:metal/${x.metal}`, 144))
			.id(`tfc:heating/metal/${x.metal}_ingot`)

		event.recipes.create.filling(
			Item.of('tfc:ceramic/ingot_mold',
				{
					tank: {
						FluidName: `tfc:metal/${x.metal}`,
						Amount: 144
					}
				}),
			[
				Fluid.of(`tfc:metal/${x.metal}`, 144),
				Item.of('tfc:ceramic/ingot_mold').strongNBT()
			])
			.id(`tfg:tfc/filling/${x.metal}_ingot`)

		event.recipes.create.filling(
			Item.of('tfc:ceramic/fire_ingot_mold',
				{
					tank: {
						FluidName: `tfc:metal/${x.metal}`,
						Amount: 144
					}
				}),
			[
				Fluid.of(`tfc:metal/${x.metal}`, 144),
				Item.of('tfc:ceramic/fire_ingot_mold').strongNBT()
			]
		).id(`tfg:tfc/filling/${x.metal}_fire_ingot`)
	})

	//#endregion

	//#region Фикс рецептов металлических предметов

	// Рецепт Jacks
	event.recipes.tfc.welding('tfc:jacks', '#forge:rods/brass', '#forge:plates/brass', 2)
		.id(`tfc:welding/jacks`)

	// Декрафт Jacks
	event.recipes.tfc.heating('tfc:jacks', 930)
		.resultFluid(Fluid.of('gtceu:brass', 144))
		.id(`tfc:heating/jacks`)

	// Декрафт Gem Saw
	event.recipes.tfc.heating('tfc:gem_saw', 930)
		.resultFluid(Fluid.of('gtceu:brass', 72))
		.id(`tfc:heating/gem_saw`)

	// Декрафт сырой крицы в жидкость
	event.recipes.tfc.heating(`tfc:raw_iron_bloom`, 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`tfc:heating/raw_bloom`)

	// Декрафт укрепленной крицы в жидкость
	event.recipes.tfc.heating(`tfc:refined_iron_bloom`, 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`tfc:heating/refined_bloom`)

	// Гриль
	event.recipes.tfc.heating('tfc:wrought_iron_grill', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`tfc:heating/grill`)

	// Ванильная дверь декрафт
	event.recipes.tfc.heating('minecraft:iron_door', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`tfc:heating/iron_door`)

	// Ванильная дверь на наковальне
	event.recipes.tfc.anvil('minecraft:iron_door', '#forge:plates/wrought_iron', ['hit_last', 'draw_not_last', 'punch_not_last'])
		.tier(3)
		.id(`tfc:anvil/iron_door`)

	// Bloom -> Wrought Iron Ingot
	event.recipes.tfc.anvil('gtceu:wrought_iron_ingot', 'tfc:refined_iron_bloom', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(2)
		.id('tfc:anvil/wrought_iron_from_bloom')

	// High Carbon Steel Ingot -> Steel Ingot
	event.recipes.tfc.anvil('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(3)
		.id('tfc:anvil/steel_ingot')

	// High Carbon Black Steel Ingot -> Black Steel Ingot
	event.recipes.tfc.anvil('gtceu:black_steel_ingot', 'tfc:metal/ingot/high_carbon_black_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(4)
		.id('tfc:anvil/black_steel_ingot')

	// High Carbon Red Steel Ingot -> Red Steel Ingot
	event.recipes.tfc.anvil('gtceu:red_steel_ingot', 'tfc:metal/ingot/high_carbon_red_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
		.id('tfc:anvil/red_steel_ingot')

	// High Carbon Blue Steel Ingot -> Blue Steel Ingot
	event.recipes.tfc.anvil('gtceu:blue_steel_ingot', 'tfc:metal/ingot/high_carbon_blue_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
		.id('tfc:anvil/blue_steel_ingot')

	// Cast iron -> Raw Iron Bloom
	event.recipes.tfc.bloomery('tfc:raw_iron_bloom', 'minecraft:charcoal', Fluid.of('gtceu:iron', 144), 15000)
		.id('tfc:bloomery/raw_iron_bloom')

	// Cast Iron -> Pig Iron
	event.recipes.tfc.blast_furnace(Fluid.of('tfc:metal/pig_iron', 1), '#tfc:flux', Fluid.of('gtceu:iron', 1))
		.id('tfc:blast_furnace/pig_iron')

	//#endregion

	//#region metal bars

	const METAL_BARS = [
		"copper",
		"bronze",
		"black_bronze",
		"bismuth_bronze",
		"wrought_iron",
		"steel",
		"black_steel",
		"red_steel",
		"blue_steel"
	];

	METAL_BARS.forEach(metal => {
		generateCutterRecipe(event, `gtceu:${metal}_plate`, 9, `8x tfc:metal/bars/${metal}`, 100, 16, `${metal}_plate_to_bars`)
	});

	//#endregion
}