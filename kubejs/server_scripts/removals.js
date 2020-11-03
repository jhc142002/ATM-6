//priority: 999

events.listen('recipes', function (e) {
  var idRemove = [

    'minecraft:comparator',
    'minecraft:glass',

    'pedestals:pedestal_crushing/dustnethergold',

    'forbidden_arcanus:leather',

    'computercraft:turtle_normal',
    'computercraft:turtle_advanced',

    'byg:black_glass_from_sand',
    'byg:purple_glass_from_sand',
    'byg:blue_glass_from_sand',
    'byg:white_glass_from_sand',

    'engineerstools:crushing/aluminium_grit_crushing_recipe',

    'xreliquary:alkahestry/crafting/nether_star'
  ]
  utils.listOf(idRemove).forEach(function (iR) {
    e.remove({
      id: iR
    })
  })
  //Recipe removals
  e.remove({
    output: [
      'appliedenergistics2:silicon',
      'mekanism:upgrade_anchor',
      'forbidden_arcanus:rotten_leather',
      'xreliquary:alkahestry_tome',
      'cyclic:uncrafter',
      'solarflux:sp_6',
      'solarflux:sp_7',
      'solarflux:sp_8',
      'quark:apple_crate',
      'quark:potato_crate',
      'quark:carrot_crate',
      'quark:beetroot_crate'
    ]
  })
  e.remove({
    input: [
      'appliedenergistics2:flour'
    ]
  })
  e.remove({
    type: 'xreliquary:alkahestry_charging'
  })

})