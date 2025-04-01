// priority: 0

const registerGTCEuMachines = (event) => {
	event.create('greenhouse', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('greenhouse')
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("CCCCCCC", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "   F   ")
			.aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
			.aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
			.aisle("CDDDDDC", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "F#####F", "FFFFFFF")
			.aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
			.aisle("CDDDDDC", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", "X#####X", " XXFXX ")
			.aisle("CCCYCCC", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "XXXFXXX", "   F   ")
			.where('X', Predicates.blocks('ae2:quartz_glass'))
			.where('F', Predicates.frames('steel'))
			.where('D', Predicates.blocks('tfc:dirt/silt')
				.or(Predicates.blocks('tfc:dirt/loam'))
				.or(Predicates.blocks('tfc:dirt/sandy_loam'))
				.or(Predicates.blocks('tfc:dirt/silty_loam'))
				.or(Predicates.blocks('tfc:grass/silt'))
				.or(Predicates.blocks('tfc:grass/loam'))
				.or(Predicates.blocks('tfc:grass/sandy_loam'))
				.or(Predicates.blocks('tfc:grass/silty_loam')))
			.where('C', Predicates.blocks('gtceu:steel_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('#', Predicates.air())
			.where(' ', Predicates.any())
			.where('Y', Predicates.controller(Predicates.blocks(definition.get())))
			.build()
		)
		.workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)

	event.create('nether_dome', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('nether_dome')
		.appearanceBlock(GTBlocks.CASING_PTFE_INERT)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(" CCCCC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ")
			.aisle("CBBBBBC", "Q#####Q", "Q#####Q", "Q#####Q", "QTTTTTQ", " QQQQQ ")
			.aisle("CBBBBBC", "Q#####Q", "Q#####Q", "Q#####Q", "QTTTTTQ", " QQQQQ ")
			.aisle("CBBBBBC", "F#####F", "F#####F", "F#####F", "FTTTTTF", "FQQQQQF")
			.aisle("CBBBBBC", "Q#####Q", "Q#####Q", "Q#####Q", "QTTTTTQ", " QQQQQ ")
			.aisle("CBBBBBC", "Q#####Q", "Q#####Q", "Q#####Q", "QTTTTTQ", " QQQQQ ")
			.aisle(" CCXCC ", " QGOGQ ", " QOPOQ ", " QOPOQ ", " QGOGQ ", "       ")
			.where('X', Predicates.controller(Predicates.blocks(definition.get())))
			.where('B', Predicates.blocks('tfc:rock/magma/basalt').setMinGlobalLimited(6)
				.or(Predicates.blocks('minecraft:netherrack').setMinGlobalLimited(10)))
			.where('T', Predicates.blocks('minecraft:glowstone').setMinGlobalLimited(5)
				.or(Predicates.blocks('minecraft:netherrack').setMinGlobalLimited(10)))
			.where('O', Predicates.blocks('minecraft:obsidian'))
			.where('F', Predicates.frames('black_steel'))
			.where('Q', Predicates.blocks('ae2:quartz_glass'))
			.where('G', Predicates.blocks('minecraft:gold_block')
				.or(Predicates.blocks('tfc:rock/raw/basalt'))
				.or(Predicates.blocks('tfc:rock/hardened/basalt'))
				.or(Predicates.blocks('tfc:rock/bricks/basalt'))
				.or(Predicates.blocks('tfc:rock/chiseled/basalt'))
				.or(Predicates.blocks('minecraft:obsidian'))
				.or(Predicates.blocks('minecraft:nether_bricks')))
			.where('P', Predicates.blocks('minecraft:purple_stained_glass_pane'))
			.where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()).setMinGlobalLimited(10)
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
			.where('#', Predicates.air()
				.or(Predicates.blocks('minecraft:netherrack'))
				.or(Predicates.blocks('tfc:rock/magma/basalt'))
				.or(Predicates.blocks('minecraft:glowstone'))
				.or(Predicates.blocks('minecraft:nether_bricks')))
			.where(' ', Predicates.any())
			.build()
		)
		.shapeInfo(controller => MultiblockShapeInfo.builder()
			.aisle(" CeCeC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ")
			.aisle("CMMMNNC", "Q    NQ", "Q     Q", "Q     Q", "QNTTNNQ", " QQQQQ ")
			.aisle("iMMNNNf", "QR    Q", "QR    Q", "Q  T  Q", "QNTTTNQ", " QQQQQ ")
			.aisle("CNMMMNC", "F    NF", "F     F", "F     F", "FNNTNNF", "FQQQQQF")
			.aisle("tNNNMNl", "Q    NQ", "Q    NQ", "Q     Q", "QNNNNNQ", " QQQQQ ")
			.aisle("CNNNNNC", "QN  NNQ", "Q    NQ", "Q    NQ", "QNNNNNQ", " QQQQQ ")
			.aisle(" mCXCC ", " QGOGQ ", " QOPOQ ", " QOPOQ ", " QGOGQ ", "       ")
			.where('X', controller, Direction.SOUTH)
			.where('C', GTBlocks.CASING_PTFE_INERT.get())
			.where('N', Block.getBlock('minecraft:netherrack'))
			.where('M', Block.getBlock('tfc:rock/magma/basalt'))
			.where('T', Block.getBlock('minecraft:glowstone'))
			.where('Q', Block.getBlock('ae2:quartz_glass'))
			.where('F', Block.getBlock('gtceu:black_steel_frame'))
			.where('G', Block.getBlock('minecraft:gold_block'))
			.where('O', Block.getBlock('minecraft:obsidian'))
			.where('P', Block.getBlock('minecraft:purple_stained_glass_pane'))
			.where('R', Block.getBlock('minecraft:nether_bricks'))
			.where(' ', Block.getBlock('minecraft:air'))

			.where('m', GTMachines.MAINTENANCE_HATCH, Direction.SOUTH)
			.where('i', GTMachines.ITEM_IMPORT_BUS[GTValues.ULV], Direction.WEST)
			.where('t', GTMachines.ITEM_EXPORT_BUS[GTValues.ULV], Direction.WEST)
			.where('f', GTMachines.FLUID_IMPORT_HATCH[GTValues.MV], Direction.EAST)
			.where('l', GTMachines.FLUID_EXPORT_HATCH[GTValues.MV], Direction.EAST)
			.where('e', GTMachines.ENERGY_INPUT_HATCH[GTValues.MV], Direction.NORTH)
			.build()
		)
		.workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_inert_ptfe",
			"gtceu:block/machines/gas_collector", false
		)

	event.create('end_dome', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('end_dome')
		.appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(" CCCCC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ", "       ")
			.aisle("CBBBBBC", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", " QSSSQ ", "  GGG  ")
			.aisle("CBBBBBC", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", " SNNNS ", " G   G ")
			.aisle("CBBBBBC", "FOOEOOF", "FOOOOOF", "FOOOOOF", "FOOOOOF", "FSNNNSF", " G   G ")
			.aisle("CBBBBBC", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", " SNNNS ", " G   G ")
			.aisle("CBBBBBC", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", "QOOOOOQ", " QSSSQ ", "  GGG  ")
			.aisle(" CCXCC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ", "       ")
			.where('X', Predicates.controller(Predicates.blocks(definition.get())))
			.where('B', Predicates.blocks('minecraft:end_stone').setMinGlobalLimited(20)
				.or(Predicates.blocks('minecraft:black_concrete')))
			.where('O', Predicates.blocks('minecraft:obsidian').setMinGlobalLimited(8)
				.or(Predicates.air()))
			.where('F', Predicates.frames('titanium'))
			.where('Q', Predicates.blocks('ae2:quartz_glass'))
			.where('E', Predicates.blocks('minecraft:dragon_egg'))
			.where('S', Predicates.blocks('tfg:artificial_end_portal_frame'))
			.where('N', Predicates.blocks('minecraft:black_concrete'))
			.where('G', Predicates.blocks('tfc:ore/small_malachite')
				.or(Predicates.blocks('tfc:ore/small_native_copper'))
				.or(Predicates.blocks('tfc:ore/small_native_gold'))
				.or(Predicates.blocks('tfc:ore/small_hematite'))
				.or(Predicates.blocks('tfc:ore/small_native_silver'))
				.or(Predicates.blocks('tfc:ore/small_cassiterite'))
				.or(Predicates.blocks('tfc:ore/small_bismuthinite'))
				.or(Predicates.blocks('tfc:ore/small_garnierite'))
				.or(Predicates.blocks('tfc:ore/small_malachite'))
				.or(Predicates.blocks('tfc:ore/small_magnetite'))
				.or(Predicates.blocks('tfc:ore/small_limonite'))
				.or(Predicates.blocks('tfc:ore/small_sphalerite'))
				.or(Predicates.blocks('tfc:ore/small_tetrahedrite')))
			.where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()).setMinGlobalLimited(10)
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
			.where(' ', Predicates.any())
			.build()
		)
		.shapeInfo(controller => MultiblockShapeInfo.builder()
			.aisle(" CeCeC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ", "       ")
			.aisle("CBBBBBC", "Q  O  Q", "Q  O  Q", "Q     Q", "Q     Q", " QSSSQ ", "  123  ")
			.aisle("iBBBBBf", "QO   OQ", "QO    Q", "QO    Q", "Q     Q", " SNNNS ", " y   4 ")
			.aisle("CBBBBBC", "F  E  F", "F     F", "F     F", "F     F", "FSNNNSF", " z   5 ")
			.aisle("tBBBBNl", "Q O   Q", "Q O   Q", "Q     Q", "Q     Q", " SNNNS ", " 0   6 ")
			.aisle("CNBBNNC", "Q     Q", "Q     Q", "Q     Q", "Q     Q", " QSSSQ ", "  987  ")
			.aisle(" mCXCC ", " QQFQQ ", " QQFQQ ", " QQFQQ ", " QQFQQ ", "   F   ", "       ")
			.where('X', controller, Direction.SOUTH)
			.where('C', GTBlocks.CASING_TITANIUM_STABLE.get())
			.where('B', Block.getBlock('minecraft:end_stone'))
			.where('N', Block.getBlock('minecraft:black_concrete'))
			.where('O', Block.getBlock('minecraft:obsidian'))
			.where('F', Block.getBlock('gtceu:titanium_frame'))
			.where('Q', Block.getBlock('ae2:quartz_glass'))
			.where(' ', Block.getBlock('minecraft:air'))
			.where('S', Block.getBlock('tfg:artificial_end_portal_frame'))
			.where('E', Block.getBlock('minecraft:dragon_egg'))

			.where('1', Block.getBlock('tfc:ore/small_native_copper'))
			.where('2', Block.getBlock('tfc:ore/small_native_gold'))
			.where('3', Block.getBlock('tfc:ore/small_hematite'))
			.where('4', Block.getBlock('tfc:ore/small_native_silver'))
			.where('5', Block.getBlock('tfc:ore/small_cassiterite'))
			.where('6', Block.getBlock('tfc:ore/small_bismuthinite'))
			.where('7', Block.getBlock('tfc:ore/small_garnierite'))
			.where('8', Block.getBlock('tfc:ore/small_malachite'))
			.where('9', Block.getBlock('tfc:ore/small_magnetite'))
			.where('0', Block.getBlock('tfc:ore/small_limonite'))
			.where('z', Block.getBlock('tfc:ore/small_sphalerite'))
			.where('y', Block.getBlock('tfc:ore/small_tetrahedrite'))

			.where('m', GTMachines.MAINTENANCE_HATCH, Direction.SOUTH)
			.where('i', GTMachines.ITEM_IMPORT_BUS[GTValues.ULV], Direction.WEST)
			.where('t', GTMachines.ITEM_EXPORT_BUS[GTValues.ULV], Direction.WEST)
			.where('f', GTMachines.FLUID_IMPORT_HATCH[GTValues.MV], Direction.EAST)
			.where('l', GTMachines.FLUID_EXPORT_HATCH[GTValues.MV], Direction.EAST)
			.where('e', GTMachines.ENERGY_INPUT_HATCH[GTValues.HV], Direction.NORTH)
			.build()
		)
		.workableCasingRenderer(
			"gtceu:block/casings/solid/machine_casing_stable_titanium",
			"gtceu:block/machines/gas_collector", false
		)
}
