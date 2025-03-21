// priority: 0

const registerTFCMaterials = (event) => {
    const registerStoneMaterial = (rockType, color) => 
        event.create(`tfg:${rockType}`)
            .dust()
            .color(color)
            .iconSet(GTMaterialIconSet.ROUGH)
            .flags(
                GTMaterialFlags.MORTAR_GRINDABLE, 
                GTMaterialFlags.NO_SMASHING, 
                GTMaterialFlags.NO_SMELTING
            )

    /* TFC Stone Types Materials */
    registerStoneMaterial('gabbro', 0x7F8081)
    registerStoneMaterial('shale', 0x686567)
    registerStoneMaterial('claystone', 0xAF9377)
    registerStoneMaterial('limestone', 0xA09885)
    registerStoneMaterial('conglomerate', 0xA3977F)
    registerStoneMaterial('dolomite', 0x515155)
    registerStoneMaterial('chert', 0x7A6756)
    registerStoneMaterial('chalk', 0xA4A39F)
    registerStoneMaterial('rhyolite', 0x726D69)
    registerStoneMaterial('dacite', 0x979797)
    registerStoneMaterial('slate', 0x989287)
    registerStoneMaterial('phyllite', 0x706B61)
    registerStoneMaterial('schist', 0x6E735C)
    registerStoneMaterial('gneiss', 0x6A6D60)

    registerStoneMaterial('dripstone', 0x927965)
}