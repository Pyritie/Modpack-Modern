// priority: 0

function registerTFGMiscellaneousRecipes(event) {

    //forge:wax
    event.replaceInput({}, 'firmalife:beeswax', '#forge:wax')

    //paraffin
    event.recipes.gtceu.chemical_reactor('tfg:paraffin_wax_from_lubricant')
        .circuit(7)
        .itemOutputs('2x tfg:paraffin_wax')
        .outputFluids(Fluid.of('gtceu:oil_light', 25))
        .inputFluids(Fluid.of('gtceu:lubricant', 250), Fluid.of('gtceu:acetone', 25))
        .duration(500)
        .EUt(21)


    // lactose & curd
    event.recipes.gtceu.mixer('lactose_milk_cow')
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('tfc:curdled_milk', 1000))
        .duration(300)
        .EUt(30)

    // event.recipes.gtceu.create_mixer('lactose_milk_cow')
    //     .circuit(1)
    //     .inputFluids(Fluid.of('minecraft:milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
    //     .itemOutputs('1x gtceu:lactose_dust')
    //     .outputFluids(Fluid.of('tfc:curdled_milk', 1000))
    //     .duration(200)
    //     .EUt(30)
    //     .rpm(96)

    event.recipes.gtceu.mixer('lactose_milk_yak')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
        .duration(300)
        .EUt(30)

    // event.recipes.gtceu.create_mixer('lactose_milk_yak')
    //     .circuit(1)
    //     .inputFluids(Fluid.of('firmalife:yak_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
    //     .itemOutputs('1x gtceu:lactose_dust')
    //     .outputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
    //     .duration(200)
    //     .EUt(30)
    //     .rpm(96)

    event.recipes.gtceu.mixer('lactose_milk_goat')
        .circuit(1)
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
        .itemOutputs('1x gtceu:lactose_dust')
        .outputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
        .duration(300)
        .EUt(30)

    // event.recipes.gtceu.create_mixer('lactose_milk_goat')
    //     .circuit(1)
    //     .inputFluids(Fluid.of('firmalife:goat_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
    //     .itemOutputs('1x gtceu:lactose_dust')
    //     .outputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
    //     .duration(200)
    //     .EUt(30)
    //     .rpm(96)

}