# **DewardianDevs's MOAR - The lite spawn mod**

=== INSTALL STEPS ===

1. Drag and drop this folder into your tarkov folder.
2. Optionally change your configuration (see below configuration options).

3. ???????

4. Profit!!!!

Example order.json
{
"order": [
"ServerValueModifier",
"DewardianDev-MOAR-2.x.x",
"Otherstuff"
]
}

==== Configuration Options ====

> BotSpawnControl

// Enable or Disables the mod
enableMod: true,

// Default 0.5 for scav, 0.8 for PMC, valid numbers 0 to 1
// 0.7 would be 70% of all waves in the first half of the game, 30% in the last half.
// 0.1 would be 10% of all waves in the first half of the game, 90% in the last half.
"defaultScavStartWaveRatio": 0.5,
"defaultPmcStartWaveRatio": 0.8,

//This multiplies the number of waves, I'd suggest playing with this for balance
"defaultScavWaveMultiplier": 1,
"defaultPmcWaveMultiplier": 1,

// To turn off, change this to false, 25 is recommended. Vanilla ranges per map.
// This is the max spawned bots allowed at one time
defaultMaxBotCap: 25,

// The max groupsize for PMC or Scav waves.
"defaultGroupMaxPMC":4,
"defaultGroupMaxScav":3,

// Set to false to turn off, recommended 5 for most maps.
defaultMaxBotPerZone: 5,

// This gives snipers a chance to spawn with a buddy
sniperBuddies: false,

> Zone Changes

// This makes it so that certain spawn zones can be used by scavs at the beginning of the game, instead of having to wait for them to unlock. Think SniperZones.
noZoneDelay: false,

// Recommended to have this set to true.
// Similar to the above, but allows for a bit more gradual release of certain zones.
reducedZoneDelay: true,

// This just adds a few more zones for scavs to spawn (all of the named ones in fact, including added ones via mods)
allOpenZones: true,

// Gives a chance to spawn a single group of raiders somewhere on the map
"randomRaiderGroup": false,

//Controls the above chance
"randomRaiderGroupChance": 10,

// Gives a chance to spawn a single group of rogues somewhere on the map
"randomRogueGroup": false,

//Controls the above chance
"randomRogueGroupChance": 10,

> Boss settings

// Disables all bosses, ALL OF THEM.
disableBosses: false,

// Makes it so that the Main boss of a map can spawn anywhere (not Goons, or Zyrachi)
bossOpenZones: true,

// Gives the main boss, an additional percentage chance added to their default spawn amount.

"mainBossChanceBuff": 15,

> Invasion

//All main bosses can spawn anywhere, on any map, (excluding Zyrachi & Goons)
bossInvasion: false,

// This overrides the invading bosses spawn chances if set. (false or 0 to disable)
// Otherwise bosses will have their default spawn chances. Recommended setting 5
bossInvasionSpawnChance: 5,

// This spaces out bossInvasion spawning a bit, so that not all bosses will spawn at the beginning of the raid. Recommended for performance and spawn balance.
gradualBossInvasion: true,

The "mapSettings" are basically just overrides, and allow for map specific settings.

