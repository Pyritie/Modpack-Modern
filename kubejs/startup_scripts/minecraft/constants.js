// priority: 0

/**
 * Список хранит предметы,
 * у которых должны быть удалены тэги и они должны быть скрыты в REI.
 */
global.MINECRAFT_DISABLED_ITEMS = [
    // Зараженные блоки
    'minecraft:infested_stone',
    'minecraft:infested_cobblestone',
    'minecraft:infested_stone_bricks', 
    'minecraft:infested_mossy_stone_bricks', 
    'minecraft:infested_cracked_stone_bricks', 
    'minecraft:infested_chiseled_stone_bricks', 
    'minecraft:infested_deepslate',

    // Каменные блоки
    'minecraft:stone', 
    'minecraft:stone_stairs', 
    'minecraft:stone_slab', 
    'minecraft:stone_pressure_plate', 
    'minecraft:stone_button', 
    'minecraft:smooth_stone', 
    'minecraft:smooth_stone_slab', 
    'minecraft:cobblestone', 
    'minecraft:cobblestone_stairs', 
    'minecraft:cobblestone_slab', 
    'minecraft:cobblestone_wall', 
    'minecraft:stone_bricks', 
    'minecraft:stone_brick_stairs', 
    'minecraft:stone_brick_slab', 
    'minecraft:stone_brick_wall', 
    'minecraft:cracked_stone_bricks', 
    'minecraft:chiseled_stone_bricks', 
    'minecraft:mossy_stone_bricks', 
    'minecraft:mossy_stone_brick_stairs', 
    'minecraft:mossy_stone_brick_slab', 
    'minecraft:mossy_stone_brick_wall', 
    'minecraft:mossy_cobblestone', 
    'minecraft:mossy_cobblestone_stairs', 
    'minecraft:mossy_cobblestone_slab', 
    'minecraft:mossy_cobblestone_wall',

    // Гранитовые блоки
    'minecraft:granite', 
    'minecraft:granite_stairs', 
    'minecraft:granite_slab', 
    'minecraft:granite_wall', 
    'minecraft:polished_granite', 
    'minecraft:polished_granite_stairs', 
    'minecraft:polished_granite_slab', 
    
    // Диоритовые блоки
    'minecraft:diorite', 
    'minecraft:diorite_stairs', 
    'minecraft:diorite_slab', 
    'minecraft:diorite_wall', 
    'minecraft:polished_diorite', 
    'minecraft:polished_diorite_stairs', 
    'minecraft:polished_diorite_slab', 
    
    // Андезитовые блоки
    'minecraft:andesite', 
    'minecraft:andesite_stairs', 
    'minecraft:andesite_slab', 
    'minecraft:andesite_wall', 
    'minecraft:polished_andesite', 
    'minecraft:polished_andesite_stairs', 
    'minecraft:polished_andesite_slab',

    // Призмарин
    'minecraft:prismarine', 
    'minecraft:prismarine_stairs', 
    'minecraft:prismarine_slab', 
    'minecraft:prismarine_wall', 
    'minecraft:prismarine_bricks', 
    'minecraft:prismarine_brick_stairs', 
    'minecraft:prismarine_brick_slab', 
    'minecraft:dark_prismarine', 
    'minecraft:dark_prismarine_stairs', 
    'minecraft:dark_prismarine_slab', 
    'minecraft:prismarine_crystals', 
    'minecraft:prismarine_shard',

    // Эндстоун
    //'minecraft:end_stone', 
    'minecraft:end_stone_bricks', 
    'minecraft:end_stone_brick_stairs',
    'minecraft:end_stone_brick_slab', 
    'minecraft:end_stone_brick_wall',

    // Dripstone
    'minecraft:pointed_dripstone',

    // Сланец
    'minecraft:reinforced_deepslate',

    // Грязь
    'minecraft:mud_brick_wall', 
    'minecraft:packed_mud', 
    'minecraft:mud_bricks', 
    'minecraft:mud_brick_stairs', 
    'minecraft:mud_brick_slab',

    // Руды
    'minecraft:coal_ore', 
    'minecraft:iron_ore', 
    'minecraft:copper_ore', 
    'minecraft:gold_ore', 
    'minecraft:redstone_ore', 
    'minecraft:emerald_ore', 
    'minecraft:lapis_ore', 
    'minecraft:diamond_ore', 
    'minecraft:deepslate_coal_ore', 
    'minecraft:deepslate_iron_ore', 
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_gold_ore', 
    'minecraft:deepslate_redstone_ore', 
    'minecraft:deepslate_emerald_ore', 
    'minecraft:deepslate_lapis_ore', 
    'minecraft:deepslate_diamond_ore', 
    'minecraft:nether_gold_ore', 
    'minecraft:nether_quartz_ore', 
    'minecraft:ancient_debris',

    // Песок
    'minecraft:sandstone', 
    'minecraft:sandstone_stairs', 
    'minecraft:sandstone_slab', 
    'minecraft:sandstone_wall', 
    'minecraft:smooth_sandstone', 
    'minecraft:smooth_sandstone_stairs', 
    'minecraft:smooth_sandstone_slab', 
    'minecraft:cut_sandstone', 
    'minecraft:cut_sandstone_slab', 
    'minecraft:chiseled_sandstone', 
    'minecraft:sand', 
    'minecraft:suspicious_sand',

    // Красный песок
    'minecraft:red_sandstone', 
    'minecraft:red_sandstone_stairs', 
    'minecraft:red_sandstone_slab', 
    'minecraft:red_sandstone_wall', 
    'minecraft:smooth_red_sandstone', 
    'minecraft:smooth_red_sandstone_stairs', 
    'minecraft:smooth_red_sandstone_slab',
    'minecraft:cut_red_sandstone', 
    'minecraft:cut_red_sandstone_slab', 
    'minecraft:chiseled_red_sandstone', 
    'minecraft:red_sand',

    // Кораллы
    'minecraft:horn_coral',
    'minecraft:horn_coral_fan', 
    'minecraft:dead_brain_coral', 
    'minecraft:dead_brain_coral_fan', 
    'minecraft:dead_tube_coral_fan', 
    'minecraft:dead_bubble_coral', 
    'minecraft:dead_fire_coral', 
    'minecraft:dead_horn_coral', 
    'minecraft:dead_bubble_coral_fan', 
    'minecraft:dead_fire_coral_fan', 
    'minecraft:dead_tube_coral', 
    'minecraft:brain_coral', 
    'minecraft:tube_coral', 
    'minecraft:tube_coral_fan', 
    'minecraft:dead_horn_coral_fan', 
    'minecraft:bubble_coral_fan', 
    'minecraft:fire_coral_fan', 
    'minecraft:brain_coral_fan', 
    'minecraft:bubble_coral', 
    'minecraft:fire_coral',

    // Дерево
    // Дуб
    "minecraft:oak_wood",
    "minecraft:oak_leaves",
    "minecraft:oak_sapling",
    "minecraft:stripped_oak_wood",
    "minecraft:oak_log",
    "minecraft:stripped_oak_log",
    "minecraft:oak_planks",
    "minecraft:oak_stairs",
    "minecraft:oak_slab",
    "minecraft:petrified_oak_slab",
    "minecraft:oak_pressure_plate",
    "minecraft:oak_fence",
    "minecraft:oak_fence_gate",
    "minecraft:oak_door",
    "minecraft:oak_trapdoor",
    "minecraft:oak_boat",
    "minecraft:oak_chest_boat",
    "minecraft:oak_sign",
    "minecraft:oak_hanging_sign",
    "minecraft:oak_button",

    // Темный дуб
    "minecraft:dark_oak_planks",
    "minecraft:dark_oak_sapling",
    "minecraft:dark_oak_log",
    "minecraft:stripped_dark_oak_log",
    "minecraft:stripped_dark_oak_wood",
    "minecraft:dark_oak_wood",
    "minecraft:dark_oak_leaves",
    "minecraft:dark_oak_slab",
    "minecraft:dark_oak_fence",
    "minecraft:dark_oak_stairs",
    "minecraft:dark_oak_button",
    "minecraft:dark_oak_pressure_plate",
    "minecraft:dark_oak_door",
    "minecraft:dark_oak_trapdoor",
    "minecraft:dark_oak_fence_gate",
    "minecraft:dark_oak_boat",
    "minecraft:dark_oak_chest_boat",
    "minecraft:dark_oak_sign",
    "minecraft:dark_oak_hanging_sign",

    // Акация
    "minecraft:acacia_planks",
    "minecraft:acacia_sapling",
    "minecraft:acacia_log",
    "minecraft:stripped_acacia_log",
    "minecraft:stripped_acacia_wood",
    "minecraft:acacia_wood",
    "minecraft:acacia_leaves",
    "minecraft:acacia_slab",
    "minecraft:acacia_fence",
    "minecraft:acacia_stairs",
    "minecraft:acacia_button",
    "minecraft:acacia_pressure_plate",
    "minecraft:acacia_door",
    "minecraft:acacia_trapdoor",
    "minecraft:acacia_fence_gate",
    "minecraft:acacia_boat",
    "minecraft:acacia_chest_boat",
    "minecraft:acacia_sign",
    "minecraft:acacia_hanging_sign",

    // Береза
    "minecraft:birch_planks",
    "minecraft:birch_sapling",
    "minecraft:birch_log",
    "minecraft:stripped_birch_log",
    "minecraft:stripped_birch_wood",
    "minecraft:birch_wood",
    "minecraft:birch_leaves",
    "minecraft:birch_slab",
    "minecraft:birch_fence",
    "minecraft:birch_stairs",
    "minecraft:birch_button",
    "minecraft:birch_pressure_plate",
    "minecraft:birch_door",
    "minecraft:birch_trapdoor",
    "minecraft:birch_fence_gate",
    "minecraft:birch_boat",
    "minecraft:birch_chest_boat",
    "minecraft:birch_sign",
    "minecraft:birch_hanging_sign",

    // Тропическое
    "minecraft:jungle_planks",
    "minecraft:jungle_sapling",
    "minecraft:jungle_log",
    "minecraft:stripped_jungle_log",
    "minecraft:stripped_jungle_wood",
    "minecraft:jungle_wood",
    "minecraft:jungle_leaves",
    "minecraft:jungle_slab",
    "minecraft:jungle_fence",
    "minecraft:jungle_stairs",
    "minecraft:jungle_button",
    "minecraft:jungle_pressure_plate",
    "minecraft:jungle_door",
    "minecraft:jungle_trapdoor",
    "minecraft:jungle_fence_gate",
    "minecraft:jungle_boat",
    "minecraft:jungle_chest_boat",
    "minecraft:jungle_sign",
    "minecraft:jungle_hanging_sign",

    // Ель
    "minecraft:spruce_planks",
    "minecraft:spruce_sapling",
    "minecraft:spruce_log",
    "minecraft:stripped_spruce_log",
    "minecraft:stripped_spruce_wood",
    "minecraft:spruce_wood",
    "minecraft:spruce_leaves",
    "minecraft:spruce_slab",
    "minecraft:spruce_fence",
    "minecraft:spruce_stairs",
    "minecraft:spruce_button",
    "minecraft:spruce_pressure_plate",
    "minecraft:spruce_door",
    "minecraft:spruce_trapdoor",
    "minecraft:spruce_fence_gate",
    "minecraft:spruce_boat",
    "minecraft:spruce_chest_boat",
    "minecraft:spruce_sign",
    "minecraft:spruce_hanging_sign",

    // Вишня
    "minecraft:cherry_planks",
    "minecraft:cherry_sapling",
    "minecraft:cherry_log",
    "minecraft:stripped_cherry_log",
    "minecraft:stripped_cherry_wood",
    "minecraft:cherry_wood",
    "minecraft:cherry_leaves",
    "minecraft:cherry_slab",
    "minecraft:cherry_fence",
    "minecraft:cherry_stairs",
    "minecraft:cherry_button",
    "minecraft:cherry_pressure_plate",
    "minecraft:cherry_door",
    "minecraft:cherry_trapdoor",
    "minecraft:cherry_fence_gate",
    "minecraft:cherry_boat",
    "minecraft:cherry_chest_boat",
    "minecraft:cherry_sign",
    "minecraft:cherry_hanging_sign",

    // Мангровое
    "minecraft:mangrove_planks",
    "minecraft:mangrove_propagule",
    "minecraft:mangrove_log",
    "minecraft:mangrove_roots",
    "minecraft:muddy_mangrove_roots",
    "minecraft:stripped_mangrove_log",
    "minecraft:stripped_mangrove_wood",
    "minecraft:mangrove_wood",
    "minecraft:mangrove_leaves",
    "minecraft:mangrove_slab",
    "minecraft:mangrove_fence",
    "minecraft:mangrove_stairs",
    "minecraft:mangrove_button",
    "minecraft:mangrove_pressure_plate",
    "minecraft:mangrove_door",
    "minecraft:mangrove_trapdoor",
    "minecraft:mangrove_fence_gate",
    "minecraft:mangrove_boat",
    "minecraft:mangrove_chest_boat",
    "minecraft:mangrove_sign",
    "minecraft:mangrove_hanging_sign",

    // Бамбук
    'minecraft:bamboo_sign',
    'minecraft:bamboo_hanging_sign',
    'minecraft:bamboo_raft',
    'minecraft:bamboo_chest_raft',

    // Шалкеры
    'minecraft:shulker_box', 
    'minecraft:white_shulker_box', 
    'minecraft:orange_shulker_box', 
    'minecraft:magenta_shulker_box', 
    'minecraft:light_blue_shulker_box', 
    'minecraft:yellow_shulker_box', 
    'minecraft:lime_shulker_box', 
    'minecraft:pink_shulker_box', 
    'minecraft:gray_shulker_box', 
    'minecraft:light_gray_shulker_box', 
    'minecraft:cyan_shulker_box', 
    'minecraft:purple_shulker_box', 
    'minecraft:blue_shulker_box', 
    'minecraft:brown_shulker_box', 
    'minecraft:green_shulker_box', 
    'minecraft:red_shulker_box', 
    'minecraft:black_shulker_box',

    // Мясо
    'minecraft:porkchop', 
    'minecraft:chicken', 
    'minecraft:mutton', 
    'minecraft:rabbit', 
    'minecraft:beef', 
    'minecraft:cooked_porkchop', 
    'minecraft:cooked_chicken',
    'minecraft:cooked_mutton', 
    'minecraft:cooked_rabbit', 
    'minecraft:cooked_beef',

    // Семена
    'minecraft:wheat_seeds',
    'minecraft:pumpkin_seeds', 
    'minecraft:melon_seeds', 
    'minecraft:torchflower_seeds', 
    'minecraft:beetroot_seeds',

    // Инструменты
    "minecraft:wooden_sword",
    "minecraft:wooden_pickaxe",
    "minecraft:wooden_axe",
    "minecraft:wooden_shovel",
    "minecraft:wooden_hoe",

    "minecraft:stone_sword",
    "minecraft:stone_pickaxe",
    "minecraft:stone_axe",
    "minecraft:stone_shovel",
    "minecraft:stone_hoe",

    "minecraft:iron_sword",
    "minecraft:iron_pickaxe",
    "minecraft:iron_axe",
    "minecraft:iron_shovel",
    "minecraft:iron_hoe",

    "minecraft:golden_sword",
    "minecraft:golden_pickaxe",
    "minecraft:golden_axe",
    "minecraft:golden_shovel",
    "minecraft:golden_hoe",

    "minecraft:diamond_sword",
    "minecraft:diamond_pickaxe",
    "minecraft:diamond_axe",
    "minecraft:diamond_shovel",
    "minecraft:diamond_hoe",

    "minecraft:netherite_sword",
    "minecraft:netherite_pickaxe",
    "minecraft:netherite_axe",
    "minecraft:netherite_shovel",
    "minecraft:netherite_hoe",

    // Броня
    "minecraft:netherite_helmet",
    "minecraft:netherite_chestplate",
    "minecraft:netherite_boots",
    "minecraft:golden_helmet",
    "minecraft:golden_chestplate",
    "minecraft:golden_leggings",
    "minecraft:golden_boots",
    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
    "minecraft:chainmail_helmet",
    "minecraft:chainmail_chestplate",
    "minecraft:chainmail_leggings",
    "minecraft:chainmail_boots",
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",

    "minecraft:iron_horse_armor",
    "minecraft:golden_horse_armor",
    "minecraft:diamond_horse_armor",

    // Декоративные куски вазы
    'minecraft:danger_pottery_sherd', 
    'minecraft:explorer_pottery_sherd', 
    'minecraft:friend_pottery_sherd', 
    'minecraft:heart_pottery_sherd', 
    'minecraft:heartbreak_pottery_sherd', 
    'minecraft:howl_pottery_sherd', 
    'minecraft:arms_up_pottery_sherd', 
    'minecraft:archer_pottery_sherd',
    'minecraft:angler_pottery_sherd', 
    'minecraft:snort_pottery_sherd', 
    'minecraft:skull_pottery_sherd',
    'minecraft:shelter_pottery_sherd', 
    'minecraft:sheaf_pottery_sherd', 
    'minecraft:prize_pottery_sherd', 
    'minecraft:plenty_pottery_sherd', 
    'minecraft:mourner_pottery_sherd', 
    'minecraft:miner_pottery_sherd', 
    'minecraft:blade_pottery_sherd', 
    'minecraft:brewer_pottery_sherd', 
    'minecraft:burn_pottery_sherd',

    // Шаблоны брони
    'minecraft:netherite_upgrade_smithing_template',

    // Свечи
    'minecraft:candle', 
    'minecraft:white_candle', 
    'minecraft:light_gray_candle', 
    'minecraft:gray_candle', 
    'minecraft:black_candle', 
    'minecraft:brown_candle', 
    'minecraft:red_candle', 
    'minecraft:orange_candle', 
    'minecraft:yellow_candle', 
    'minecraft:lime_candle', 
    'minecraft:green_candle', 
    'minecraft:cyan_candle', 
    'minecraft:light_blue_candle', 
    'minecraft:blue_candle', 
    'minecraft:purple_candle', 
    'minecraft:magenta_candle', 
    'minecraft:pink_candle',

    // Другое
    'minecraft:grass_block', 
    'minecraft:dirt', 
    'minecraft:coarse_dirt', 
    'minecraft:podzol', 
    'minecraft:rooted_dirt', 
    'minecraft:mud',
    'minecraft:netherite_scrap',
    'minecraft:suspicious_gravel',
    'minecraft:stonecutter',
    'minecraft:gravel',
    'minecraft:moss_carpet',
    'minecraft:large_fern', 
    'minecraft:tall_grass', 
    'minecraft:sculk_vein', 
    'minecraft:lily_pad', 
    'minecraft:vine',
    'minecraft:seagrass', 
    'minecraft:grass', 
    'minecraft:fern', 
    'minecraft:dandelion', 
    'minecraft:poppy', 
    'minecraft:blue_orchid', 
    'minecraft:allium', 
    'minecraft:azure_bluet', 
    'minecraft:red_tulip', 
    'minecraft:orange_tulip',
    'minecraft:white_tulip',
    'minecraft:pink_tulip', 
    'minecraft:oxeye_daisy', 
    'minecraft:cornflower', 
    'minecraft:lily_of_the_valley', 
    'minecraft:wither_rose', 
    'minecraft:torchflower', 
    'minecraft:pitcher_plant', 
    'minecraft:sculk', 
    'minecraft:sculk_vein', 
    'minecraft:sculk_catalyst', 
    'minecraft:sculk_shrieker', 
    'minecraft:dead_bush',
    'minecraft:sugar_cane', 
    'minecraft:kelp', 
    'minecraft:dried_kelp_block', 
    'minecraft:dried_kelp', 
    'minecraft:pink_petals',
    'minecraft:chain',
    'minecraft:peony',
    'minecraft:rose_bush',
    'minecraft:lilac',
    'minecraft:sunflower',
    'minecraft:chain_command_block',
    'minecraft:turtle_egg', 
    'minecraft:sniffer_egg', 
    'minecraft:structure_block', 
    'minecraft:jigsaw',
    'minecraft:sculk_sensor', 
    'minecraft:calibrated_sculk_sensor', 
    'minecraft:conduit', 
    'minecraft:chest_minecart', 
    'minecraft:bread',
    'minecraft:wheat',
    'minecraft:cookie',
    'minecraft:cake',
    'minecraft:crafting_table',
    'minecraft:chest',
    'minecraft:trapped_chest',
    'minecraft:fishing_rod',
    'minecraft:brewing_stand',
    'minecraft:warped_fungus_on_a_stick', 
    'minecraft:carrot_on_a_stick',
    'minecraft:carrot',
    'minecraft:pumpkin',
    'minecraft:pearlescent_froglight', 
    'minecraft:verdant_froglight', 
    'minecraft:ochre_froglight',
    'minecraft:suspicious_stew',
    'minecraft:mycelium', 
    'minecraft:farmland', 
    'minecraft:composter',
    'minecraft:pufferfish_bucket', 
    'minecraft:salmon_bucket', 
    'minecraft:cod_bucket', 
    'minecraft:tropical_fish_bucket', 
    'minecraft:tadpole_bucket',
    'minecraft:player_head',
    'minecraft:command_block_minecart', 
    'minecraft:knowledge_book', 
    'minecraft:bundle',
    'minecraft:debug_stick', 
    'minecraft:spawner',
    'minecraft:pitcher_pod', 
    'minecraft:beetroot', 
    'minecraft:beetroot_soup', 
    'minecraft:cocoa_beans', 
    'minecraft:experience_bottle', 
    'minecraft:shulker_shell', 
    'minecraft:rabbit_stew',
    'minecraft:recovery_compass', 
    'minecraft:chorus_plant', 
    'minecraft:frogspawn', 
    'minecraft:cactus', 
    'minecraft:sweet_berries', 
    'minecraft:campfire', 
    'minecraft:soul_campfire', 
    'minecraft:bee_nest', 
    'minecraft:fletching_table', 
    'minecraft:echo_shard', 
    'minecraft:totem_of_undying', 
    'minecraft:trident', 
    'minecraft:heart_of_the_sea', 
    'minecraft:barrel', 
    'minecraft:chorus_flower',
    'minecraft:netherite_ingot', 
    'minecraft:netherite_block', 
    'minecraft:lodestone', 
    'minecraft:iron_trapdoor',
    'minecraft:cod', 
    'minecraft:cooked_cod', 
    'minecraft:salmon', 
    'minecraft:cooked_salmon', 
    'minecraft:tropical_fish',
    'minecraft:melon_slice',
    'minecraft:beehive', 
    'minecraft:honey_bottle', 
    'minecraft:honeycomb_block', 
    'minecraft:honey_block',
    'minecraft:popped_chorus_fruit', 
    'minecraft:purpur_pillar', 
    'minecraft:purpur_block', 
    'minecraft:purpur_stairs', 
    'minecraft:purpur_slab', 
    'minecraft:shears', 
    'minecraft:lantern', 
    'minecraft:soul_lantern', 
    'minecraft:smithing_table', 
    'minecraft:smoker', 
    'minecraft:blast_furnace', 
    'minecraft:chiseled_bookshelf', 
    'minecraft:decorated_pot', 
    'minecraft:poisonous_potato', 
    'minecraft:potato', 
    'minecraft:baked_potato',
    'minecraft:end_rod',
    'minecraft:brush',
    'minecraft:sea_lantern',
    'minecraft:bookshelf',
    'minecraft:enchanting_table',
    'minecraft:enchanted_book',
    'minecraft:ender_chest',
    'minecraft:repeating_command_block', 
    'minecraft:command_block', 
    'minecraft:azalea', 
    'minecraft:light', 
    'minecraft:azalea', 
    'minecraft:flowering_azalea', 
    'minecraft:azalea_leaves', 
    'minecraft:flowering_azalea_leaves', 
    'minecraft:dirt_path', 
    //'minecraft:dragon_egg', 
    'minecraft:end_portal_frame', 
    'minecraft:mushroom_stew', 
    'minecraft:structure_void',
    'minecraft:sea_pickle',
    'minecraft:apple',
    'minecraft:soul_torch', 
    'minecraft:torch', 
    'minecraft:anvil', 
    'minecraft:chipped_anvil', 
    'minecraft:damaged_anvil', 
    'minecraft:furnace', 
    'minecraft:furnace_minecart',
    'minecraft:amethyst_cluster',
    'minecraft:rabbit_hide',
    'minecraft:raw_iron',
    'minecraft:raw_iron_block', 
    'minecraft:raw_gold_block', 
    'minecraft:raw_copper_block',
    'minecraft:compass',
    'minecraft:iron_bars',
    'minecraft:honeycomb',
    'minecraft:potion',
    'minecraft:tipped_arrow',
    'minecraft:splash_potion',
    'minecraft:lingering_potion',

    // Кримзон незер дерево
    // TODO: Разблокировать после добавления ада
    'minecraft:crimson_stem', 
    'minecraft:crimson_hyphae', 
    'minecraft:stripped_crimson_stem', 
    'minecraft:stripped_crimson_hyphae', 
    'minecraft:crimson_planks', 
    'minecraft:crimson_stairs', 
    'minecraft:crimson_slab', 
    'minecraft:crimson_fence', 
    'minecraft:crimson_fence_gate', 
    'minecraft:crimson_door', 
    'minecraft:crimson_trapdoor', 
    'minecraft:crimson_pressure_plate', 
    'minecraft:crimson_button',

    // Варпед незер дерево
    // TODO: Разблокировать после добавления ада
    'minecraft:warped_stem', 
    'minecraft:warped_hyphae', 
    'minecraft:stripped_warped_stem', 
    'minecraft:stripped_warped_hyphae', 
    'minecraft:warped_planks', 
    'minecraft:warped_stairs', 
    'minecraft:warped_slab', 
    'minecraft:warped_fence', 
    'minecraft:warped_fence_gate', 
    'minecraft:warped_door', 
    'minecraft:warped_trapdoor', 
    'minecraft:warped_pressure_plate', 
    'minecraft:warped_button',

    // Куча незер блоков
    //'minecraft:netherrack', 
    //'minecraft:nether_bricks', 
    'minecraft:cracked_nether_bricks',
    'minecraft:nether_brick_stairs', 
    'minecraft:nether_brick_slab', 
    'minecraft:nether_brick_wall', 
    'minecraft:nether_brick_fence', 
    'minecraft:chiseled_nether_bricks', 
    'minecraft:red_nether_bricks', 
    'minecraft:red_nether_brick_stairs', 
    'minecraft:red_nether_brick_slab', 
    'minecraft:red_nether_brick_wall',

    // И еще куча незер блоков
    // TODO: Разблокировать после добавления ада
    'minecraft:crimson_nylium', 
    'minecraft:warped_nylium', 
    'minecraft:soul_sand', 
    'minecraft:nether_wart_block', 
    'minecraft:warped_wart_block', 
    'minecraft:crimson_fungus', 
    'minecraft:piglin_head', 
    'minecraft:zombie_head', 
    'minecraft:skeleton_skull', 
    'minecraft:nether_sprouts', 
    'minecraft:warped_roots', 
    'minecraft:dragon_head', 
    'minecraft:creeper_head', 
    'minecraft:wither_skeleton_skull', 
    'minecraft:weeping_vines', 
    'minecraft:crimson_roots', 
    //'minecraft:nether_brick', 
    'minecraft:nether_wart', 
    'minecraft:twisting_vines', 
    'minecraft:warped_fungus',
    'minecraft:respawn_anchor',
];

global.MINECRAFT_HIDED_ITEMS = [
    '/spawn_egg/',
    
    /*
    'minecraft:exposed_copper', 
    'minecraft:exposed_cut_copper', 
    'minecraft:exposed_cut_copper_stairs', 
    'minecraft:exposed_cut_copper_slab', 
    'minecraft:weathered_copper', 
    'minecraft:weathered_cut_copper', 
    'minecraft:weathered_cut_copper_stairs', 
    'minecraft:weathered_cut_copper_slab', 
    'minecraft:oxidized_copper', 
    'minecraft:oxidized_cut_copper', 
    'minecraft:oxidized_cut_copper_stairs', 
    'minecraft:oxidized_cut_copper_slab',*/
];

global.VANILLA_WOOD_TYPES = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "cherry",
    "dark_oak",
    "mangrove",
    "crimson", // TODO: Разблокировать когда появится АД
    "warped" // TODO: Разблокировать когда появится АД
];

global.VANILLA_STONE_TYPES = [
    "sand",
    "red_sand",
    "gravel",
    "ore",
    "deepslate",
    "basalt",
    "endstone",
    "netherrack",
    "andesite",
    "diorite",
    "granite",
    "tuff"
];

global.MINECRAFT_DYE_NAMES = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS = [
    // Default
    { block: 'minecraft:copper_block', cutted: 'minecraft:cut_copper', stairs: 'minecraft:cut_copper_stairs', slabs: 'minecraft:cut_copper_slab', name: 'copper' },
    { block: 'minecraft:exposed_copper', cutted: 'minecraft:exposed_cut_copper', stairs: 'minecraft:exposed_cut_copper_stairs', slabs: 'minecraft:exposed_cut_copper_slab', name: 'exposed_copper' },
    { block: 'minecraft:weathered_copper', cutted: 'minecraft:weathered_cut_copper', stairs: 'minecraft:weathered_cut_copper_stairs', slabs: 'minecraft:weathered_cut_copper_slab', name: 'weathered_copper' },
    { block: 'minecraft:oxidized_copper', cutted: 'minecraft:oxidized_cut_copper', stairs: 'minecraft:oxidized_cut_copper_stairs', slabs: 'minecraft:oxidized_cut_copper_slab', name: 'oxidized_copper' },
    // Waxed
    { block: 'minecraft:waxed_copper_block', cutted: 'minecraft:waxed_cut_copper', stairs: 'minecraft:waxed_cut_copper_stairs', slabs: 'minecraft:waxed_cut_copper_slab', name: 'waxed_copper' },
    { block: 'minecraft:waxed_exposed_copper', cutted: 'minecraft:waxed_exposed_cut_copper', stairs: 'minecraft:waxed_exposed_cut_copper_stairs', slabs: 'minecraft:waxed_exposed_cut_copper_slab', name: 'waxed_exposed_copper' },
    { block: 'minecraft:waxed_weathered_copper', cutted: 'minecraft:waxed_weathered_cut_copper', stairs: 'minecraft:waxed_weathered_cut_copper_stairs', slabs: 'minecraft:waxed_weathered_cut_copper_slab', name: 'waxed_weathered_copper' },
    { block: 'minecraft:waxed_oxidized_copper', cutted: 'minecraft:waxed_oxidized_cut_copper', stairs: 'minecraft:waxed_oxidized_cut_copper_stairs', slabs: 'minecraft:waxed_oxidized_cut_copper_slab', name: 'waxed_oxidized_copper' }
];
