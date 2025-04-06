const registerCreatedecoItemTags = (event) => {

//#region Hidden Items  
  global.CREATEDECO_DISABLED_ITEMS.forEach(item => {
      event.removeAllTagsFrom(item)
      event.add('c:hidden_from_recipe_viewers', item)
  });
//#endregion

//#region Apply Tags
  const metalBars = ['andesite', 'brass', 'iron', 'copper', 'industrial_iron', 'zinc'];

  metalBars.forEach(metalBars => {
      event.add('tfc:metal_bars', `createdeco:${metalBars}_bars`)
      event.add('tfc:metal_bars', `createdeco:${metalBars}_bars_overlay`)
  });

  event.add("createdeco:internal/plates/iron_plates", "#forge:plates/wrought_iron")
  event.add("createdeco:internal/plates/copper_plates", "#forge:plates/copper")
  event.add("createdeco:internal/plates/brass_plates", "#forge:plates/brass")
  event.add('createdeco:internal/plates/andesite_plates', '#forge:plates/tin_alloy')
  event.add('createdeco:internal/plates/industrial_iron_plates', '#forge:sheets/steel')
  event.add('createdeco:internal/plates/zinc_plates', '#forge:sheets/zinc')
  
  event.add("createdeco:internal/nuggets/iron_nuggets", "#forge:nuggets/wrought_iron")
  event.add("createdeco:internal/nuggets/copper_nuggets", "#forge:nuggets/copper")
  event.add("createdeco:internal/nuggets/zinc_nuggets", "#forge:nuggets/zinc")
  event.add("createdeco:internal/nuggets/industrial_iron_nuggets", "#forge:nuggets/steel")
  event.add("createdeco:internal/nuggets/brass_nuggets", "#forge:nuggets/brass")
  event.add("createdeco:internal/nuggets/copper_nuggets", "#forge:nuggets/copper")
  
  event.add("createdeco:internal/ingots/iron_ingots", "#forge:ingots/wrought_iron")
  event.add("createdeco:internal/ingots/copper_ingots", "#forge:ingots/copper")
  event.add("createdeco:internal/ingots/brass_ingots", "#forge:ingots/brass")
  event.add("createdeco:internal/ingots/zinc_ingots", "#forge:ingots/zinc")
  event.add("createdeco:internal/ingots/andesite_ingots", "#forge:ingots/tin_alloy")
  event.add("createdeco:internal/ingots/industrial_iron_ingots", `#forge:ingots/steel`)

  event.add("createdeco:internal/blocks/iron_blocks", "#forge:storage_blocks/wrought_iron")
  event.add("createdeco:internal/blocks/copper", "#forge:storage_blocks/copper")
  event.add("createdeco:internal/blocks/brass_blocks", "#forge:storage_blocks/brass")
  event.add("createdeco:internal/blocks/industrial_iron_blocks", "#forge:storage_blocks/steel")
  event.add("createdeco:internal/blocks/zinc_blocks", "#forge:storage_blocks/zinc")
  event.add("createdeco:internal/blocks/andesite_blocks", "#forge:storage_blocks/tin_alloy")
//#endregion
};