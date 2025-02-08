// priority: 0

const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    // Бамбуковые полублоки
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')

    event.add('minecraft:lush_ground_replaceable', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:deepslate')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:blackstone')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:deepslate')
    event.add('tfc:grass_plantable_on', 'minecraft:moss_block')
    event.add('tfc:grass_plantable_on', 'minecraft:moss_block')
}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
}