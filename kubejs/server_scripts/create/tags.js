// priority: 0

const registerCreateItemTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.CREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
	// Is this Greate's fault?
	event.remove('c:hidden_from_recipe_viewers', 'create:golden_sheet')

	// Тэги для ручек и сидушек
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)

		if (dye != 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
	})

	event.add('minecraft:trimmable_armor', 'create:copper_diving_helmet')
	event.add('minecraft:trimmable_armor', 'create:copper_diving_boots')

	event.add('minecraft:trimmable_armor', 'create:netherite_diving_helmet')
	event.add('minecraft:trimmable_armor', 'create:netherite_backtank')
	event.add('minecraft:trimmable_armor', 'create:netherite_diving_boots')

	event.add('create:blaze_burner_fuel/regular', "gtceu:poor_raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:coal_dust")
	event.add('create:blaze_burner_fuel/regular', "gtceu:charcoal_dust")
	event.add('create:blaze_burner_fuel/regular', "gtceu:raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:rich_raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:flawed_coal_gem")
	event.add('create:blaze_burner_fuel/regular', "gtceu:chipped_coal_gem")
	event.add('create:blaze_burner_fuel/regular', "gtceu:pure_coal_dust")

	event.add('create:blaze_burner_fuel/special', "gtceu:flawless_coal_gem")
	event.add('create:blaze_burner_fuel/special', "gtceu:exquisite_coal_gem")
}

const registerCreateBlockTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.CREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
	})

	// Тэги для ручек и сидушек
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)

		if (dye != 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
	})

	// Disable bulk blasting
	event.removeAll('create:fan_processing_catalysts/blasting')
}


const registerCreateFluidTags = (event) => {

	// Делаем воду из TFC бесконечной для помпы Create
	event.add('create:bottomless/allow', 'tfc:fresh_water')
	event.add('create:bottomless/allow', 'tfc:salt_water')

	// Добавляем тег для скрытия в EMI
	event.add('c:hidden_from_recipe_viewers', 'create:chocolate')
	event.add('c:hidden_from_recipe_viewers', 'create:honey')

	// Disable bulk blasting
	event.removeAll('create:fan_processing_catalysts/blasting')
}
