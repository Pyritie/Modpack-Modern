const registerTFGBlocks = (event) => {
	
	event.create('tfg:artificial_end_portal_frame')
		.stoneSoundType()
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.fullBlock(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:block/end_portal_frame' })
		})
		
	const $ClusterBlock = Java.loadClass('net.minecraft.world.level.block.AmethystClusterBlock')
	const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
	const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')

	// #region Nether blocks

	event.create('tfg:hardened_deepslate')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:item/deepslate' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.mapColor('terracotta_grey')
		.fullBlock(true)
		.opaque(true)
		
	event.create('tfg:hardened_blackstone')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:item/blackstone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.mapColor('terracotta_grey')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:spike/dripstone_spike', 'tfc:rock_spike').noItem()
	event.create('tfg:spike/deepslate_spike', 'tfc:rock_spike').noItem()
	event.create('tfg:spike/blackstone_spike', 'tfc:rock_spike').noItem()


	const $SproutsBlock = Java.loadClass('net.minecraft.world.level.block.NetherSproutsBlock')

	event.createCustom('tfg:mushroom_roots', () => new $SproutsBlock($Properties.copy($Blocks.WARPED_ROOTS)))
	event.createCustom('tfg:mushroom_sprouts', () => new $SproutsBlock($Properties.copy($Blocks.NETHER_SPROUTS)))
	
	event.create('tfg:ash_pile')
		.box(0, 0, 0, 16, 2, 16, true)
		.fullBlock(false)
		.noCollision()
		.property(BlockProperties.LAYERS)
		.sandSoundType()
		.requiresTool(false)
		.tagBoth('minecraft:mineable/shovel')
		.hardness(0.5)
		.mapColor('grey')
		.speedFactor(0.7)


	// #endregion
	
	// #region Gem indicators
	
	const GEM_INDICATORS = 
	[
		[ 'almandine', 0x991616 ],
		[ 'andradite', 0xfbcb25 ],
		[ 'blue_topaz', 0xd8fafb ],
		[ 'cinnabar', 0xf03059 ],
		[ 'diamond', 0xc5fbfb ],
		[ 'emerald', 0x17fb6a ],
		[ 'green_sapphire', 0x98e2ad ],
		[ 'grossular', 0xfbb475 ],
		[ 'rutile', 0x812306 ],
		[ 'lazurite', 0x2633e3 ],
		[ 'pyrope', 0xe41957 ],
		[ 'ruby', 0xd42210 ],
		[ 'sapphire', 0x3134df ],
		[ 'sodalite', 0x3c53fb ],
		[ 'spessartine', 0xfba51e ],
		[ 'topaz', 0xe4d439 ],
		[ 'uvarovite', 0x2ce94b ],
		[ 'nether_quartz', 0xf4ebdf ],
		[ 'quartzite', 0xeef1e9 ],
		[ 'realgar', 0xfb3c32 ],
		[ 'olivine', 0xa4e004 ],
		[ 'opal', 0xead6dc ],
		[ 'lapis', 0x83a6fb ],
		[ 'apatite', 0x06caed ],
		[ 'red_garnet', 0x930c15 ],
		[ 'yellow_garnet', 0xf2fb09 ],
		[ 'monazite', 0xcdea96 ]
		
		// skip coal, coke, salt, rock salt, certus, malachite, glass, and amethyst
	]

	
	GEM_INDICATORS.forEach(gem => 
	{
		event.createCustom(`tfg:buds/small_${gem[0]}_bud`,  () => new $ClusterBlock(3, 4, $Properties.copy($Blocks.AMETHYST_CLUSTER)))
		event.createCustom(`tfg:buds/medium_${gem[0]}_bud`, () => new $ClusterBlock(4, 3, $Properties.copy($Blocks.AMETHYST_CLUSTER)))
		event.createCustom(`tfg:buds/large_${gem[0]}_bud`,  () => new $ClusterBlock(5, 3, $Properties.copy($Blocks.AMETHYST_CLUSTER)))
	})

	// #endregion
}
