
const registerTFGBlocks = (event) => {
	
	event.create('tfg:artificial_end_portal_frame')
		.stoneSoundType()
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.fullBlock(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:block/end_portal_frame' })
		})
	
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.create(`tfg:decorative_vase/generated/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/vase_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')

		event.create(`tfg:decorative_vase/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/vase_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')

		event.create(`tfg:decorative_vase/unfired/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/vase_unfired_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')
	})
	event.create('tfg:decorative_vase', 'cardinal')
		.model('tfg:block/decorative_vase/vase')
		.soundType('decorated_pot')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor(`color_gray`)
		.box(2, 0, 2, 14, 20, 14)
		.fullBlock(false)
		.opaque(false)
		.renderType('cutout')

	event.create('tfg:decorative_vase/unfired', 'cardinal')
		.model('tfg:block/decorative_vase/vase_unfired')
		.soundType('decorated_pot')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor(`color_gray`)
		.box(2, 0, 2, 14, 20, 14)
		.fullBlock(false)
		.opaque(false)
		.renderType('cutout')

	const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
	const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')

	// #region Deprecated tree tap

	event.create('treetap:tap')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	// #endregion

	// #region Nether blocks

	event.create('tfg:rock/hardened_deepslate')
		.soundType('deepslate')
		.property(BlockProperties.AXIS)
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:item/deepslate' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_grey')
		.fullBlock(true)
		.opaque(true)
		
	event.create('tfg:rock/hardened_blackstone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:item/blackstone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.mapColor('terracotta_grey')
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_dripstone')
		.soundType('dripstone_block')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:item/dripstone_block' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.mapColor('terracotta')
		.tagBlock('minecraft:mineable/pickaxe')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:spike/dripstone_spike', 'tfc:rock_spike')
		.soundType('dripstone_block')
		.noItem()

	event.create('tfg:spike/deepslate_spike', 'tfc:rock_spike')
		.soundType('deepslate')
		.noItem()

	event.create('tfg:spike/blackstone_spike', 'tfc:rock_spike')
		.stoneSoundType()
		.noItem()

	event.create('tfg:loose/deepslate', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose/deepslate')
		.rockTypeModel('metamorphic')
		.soundType('deepslate')
		.translationKey("block.tfg.loose.deepslate")
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:metamorphic_rock')

	event.create('tfg:loose/dripstone', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose/dripstone')
		.rockTypeModel('sedimentary')
		.soundType('dripstone_block')
		.translationKey("block.tfg.loose.dripstone")
		.tagBlock('tfc:loose_rocks')
		.tagItem('tfc:any_knapping')
		.tagItem('tfc:rock_knapping')
		.tagItem('tfc:sedimentary_rock')


	const $SproutsBlock = Java.loadClass('net.minecraft.world.level.block.NetherSproutsBlock')

	event.createCustom('tfg:mushroom_roots', () => new $SproutsBlock($Properties.copy($Blocks.WARPED_ROOTS)))
	event.createCustom('tfg:mushroom_sprouts', () => new $SproutsBlock($Properties.copy($Blocks.NETHER_SPROUTS)))
	
	event.create('tfg:charred_log')
		.fullBlock(true)
		.woodSoundType()
		.property(BlockProperties.AXIS)
		.tagBoth('minecraft:mineable/axe')
		.tagBoth('tfc:logs_that_log')
		.tagBoth('afc:logs_that_log')
		.tagBoth('minecraft:logs')
		.mapColor('black')

	// #endregion
	
}
