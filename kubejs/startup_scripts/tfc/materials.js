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


    // Specialized icon sets for TFC's own

    GTMaterials.Coal.setMaterialIconSet(GTMaterialIconSet.LIGNITE)
    GTMaterials.Borax.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_borax'))
    GTMaterials.Gypsum.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gypsum'))
    GTMaterials.Graphite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_graphite'))
    GTMaterials.Saltpeter.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_saltpeter'))
    GTMaterials.Sulfur.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sulfur'))

    GTMaterials.Amethyst.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_amethyst'))
    GTMaterials.Redstone.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_redstone'))
    GTMaterials.Diamond.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_diamond'))
    GTMaterials.Emerald.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_emerald'))
    GTMaterials.Lapis.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_lapis'))
    GTMaterials.Opal.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_opal'))
    GTMaterials.Pyrite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_pyrite'))
    GTMaterials.Ruby.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_ruby'))
    GTMaterials.Sapphire.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sapphire'))
    GTMaterials.GreenSapphire.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_topaz'))
    GTMaterials.Topaz.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_topaz'))
    GTMaterials.BlueTopaz.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sapphire'))
    
    GTMaterials.Bismuth.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_bismuth'))
    GTMaterials.Cassiterite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
    GTMaterials.Tin.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
    GTMaterials.Garnierite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_garnierite'))
    GTMaterials.Nickel.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_garnierite'))
    GTMaterials.Hematite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_hematite'))
    GTMaterials.YellowLimonite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_limonite'))
    GTMaterials.Magnetite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_magnetite'))
    GTMaterials.Malachite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_malachite'))
    GTMaterials.Copper.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_copper'))
    GTMaterials.Chalcocite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_copper'))
    GTMaterials.Gold.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gold'))
    GTMaterials.Silver.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_silver'))
    GTMaterials.Sphalerite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sphalerite'))
    GTMaterials.Tetrahedrite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_tetrahedrite'))
    GTMaterials.Chalcopyrite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_tetrahedrite'))
    GTMaterials.Chromite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_chromite'))

    GTMaterials.NetherQuartz.setMaterialIconSet(GTMaterialIconSet.getByName('nether_quartz'))
    GTMaterials.RedAlloy.setMaterialIconSet(GTMaterialIconSet.SHINY)
    GTMaterials.TinAlloy.setMaterialIconSet(GTMaterialIconSet.BRIGHT)
    GTMaterials.BismuthBronze.setMaterialIconSet(GTMaterialIconSet.BRIGHT)
    GTMaterials.Nickel.setMaterialIconSet(GTMaterialIconSet.BRIGHT)
    GTMaterials.BlackBronze.setMaterialIconSet(GTMaterialIconSet.SHINY)
    
    GTMaterials.Aluminium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_silver'))
    GTMaterials.Asbestos.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gold'))
    GTMaterials.Almandine.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_redstone'))
    GTMaterials.Beryllium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_copper'))
    GTMaterials.Cobalt.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sphalerite'))
    GTMaterials.Cobaltite.setMaterialIconSet(GTMaterialIconSet.LAPIS)
    GTMaterials.Lead.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_magnetite'))
    GTMaterials.Lazurite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_ruby'))
    GTMaterials.Asbestos.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_lapis'))
    GTMaterials.Lithium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_hematite'))
    GTMaterials.Galena.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_copper'))
    GTMaterials.Grossular.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sapphire'))
    GTMaterials.Neodymium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_magnetite'))
    GTMaterials.Palladium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_pyrite'))
    GTMaterials.Platinum.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gold'))
    GTMaterials.Thorium.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_hematite'))
    GTMaterials.Naquadah.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_malachite'))
    GTMaterials.Goethite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_silver'))
    GTMaterials.Calcite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_borax'))
    GTMaterials.Cooperite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gold'))
    GTMaterials.Sodalite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_opal'))
    GTMaterials.Molybdenum.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_chromite'))
    GTMaterials.Powellite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sphalerite'))
    GTMaterials.Pyrolusite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_tetrahedrite'))
    GTMaterials.Apatite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_opal'))
    GTMaterials.Pyrope.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_opal'))
    GTMaterials.Scheelite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_saltpeter'))
    GTMaterials.Tantalite.setMaterialIconSet(GTMaterialIconSet.LIGNITE)
    GTMaterials.Stibnite.setMaterialIconSet(GTMaterialIconSet.LAPIS)
    GTMaterials.Tungstate.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_borax'))
    GTMaterials.Uraninite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_limonite'))
    GTMaterials.Pitchblende.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_magnetite'))
    GTMaterials.VanadiumMagnetite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_chromite'))
    GTMaterials.Wulfenite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_borax'))
    GTMaterials.Realgar.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_redstone'))
    GTMaterials.Spodumene.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_gypsum'))
    GTMaterials.Mica.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_sulfur'))
    GTMaterials.Barite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_graphite'))
    GTMaterials.Alunite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_saltpeter'))
    GTMaterials.Pyrochlore.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_hematite'))
    GTMaterials.Olivine.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_topaz'))
    GTMaterials.GarnetYellow.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_redstone'))
    GTMaterials.Trona.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_pyrite'))
    GTMaterials.Zeolite.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_copper'))
    GTMaterials.Electrotine.setMaterialIconSet(GTMaterialIconSet.getByName('tfc_garnierite'))
}