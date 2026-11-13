// Dome Keeper upgrade / gadget / keeper reference data.
// Every row cites a source. All sources are the Dome Keeper Wiki (domekeeper.wiki.gg),
// which was 403-blocked live at fetch time (Cloudflare challenge) and so was read via its
// Wayback Machine snapshot instead, per the archived "Retrieved from ...oldid=NNNNN" line.
// Costs are stated in the resource icon shown next to each cost cell on the source page;
// every dome/keeper upgrade cost confirmed as Iron by counting "Iron Resource Icon.png"
// occurrences against the number of cost cells on each page. Where a source leaves a cost
// or value blank (no icon/number published), this file uses the literal string
// "not published" rather than inventing a number.

const SITE_NOTE = "No wiki calculator/planner/database exists for Dome Keeper at time of writing (only Fandom mirrors and general guides, per GCT-049 Gate 2). This reference is built directly from domekeeper.wiki.gg pages, fetched through web.archive.org because the live site returned HTTP 403 (Cloudflare) to a direct curl. The Keepers and Gadgets pages are themselves marked as wiki stubs; the wiki's Version History shows v5.0.1 \"The Lost Keepers Patch\" (April 16, 2026, multiplayer + new keepers) as the newest documented patch, which is newer than the Keepers page's last edit — so keeper content here may not include keepers added after the Lost Keepers DLC. Treat any gap as a wiki gap, not a game fact.";

// ---------------------------------------------------------------------------
// GADGETS
// ---------------------------------------------------------------------------
const GADGET_SOURCE = "https://domekeeper.wiki.gg/wiki/Gadgets";
const GADGET_SOURCE_ARCHIVE = "https://web.archive.org/web/20260221062041/https://domekeeper.wiki.gg/wiki/Gadgets";
const GADGET_SOURCE_NOTE = "Archived snapshot 2026-02-21 (page history oldid=7049). Page does not state a specific game version.";

const GADGETS = [
  {
    name: "Shield", type: "Primary", slot: "Primary",
    desc: "Install a shield that will absorb some damage. Recharges automatically.",
    baseStats: { "Strength": "40hp" },
    abilities: [
      { name: "Electro Blast", effect: "Creates a deadly field effect around your dome for a short time." },
      { name: "Invulnerability", effect: "Makes your dome invulnerable for a short time." },
      { name: "Reflection", effect: "Reflects incoming projectiles for a short time." },
    ],
    supplement: null,
  },
  {
    name: "Repellent", type: "Primary", slot: "Primary",
    desc: "Install a tank that produces a monster-repelling liquid. Activate to spray outside the dome, delaying the next wave of attackers.",
    baseStats: { "Production Time (cycles)": "1.50", "Wave Delay (cycles)": "0.25" },
    abilities: [
      { name: "Wither", effect: "Weakens all present monsters, causing them to take more damage when hit." },
      { name: "Debilitate", effect: "Spray a numbing mist during combat that slows all monsters down." },
    ],
    supplement: null,
  },
  {
    name: "Orchard", type: "Primary", slot: "Primary",
    desc: "Plant a tree in the dome that grows fruits to temporarily improve your movement and mining power.",
    baseStats: { "Buff Duration (cycles)": "0.30", "Mining Strength Buff": "0.20", "Growth Time (cycles)": "1.50", "Move Speed Buff": "25" },
    abilities: [
      { name: "Snare Roots", effect: "Activate during battle to grow roots outside the dome that will trap any medium-sized monster stepping on them." },
      { name: "Projectile Shield", effect: "Grow a shield that protects the dome from projectiles." },
    ],
    supplement: null,
  },
  {
    name: "Droneyard", type: "Primary", slot: "Primary",
    desc: "Install a yard for producing drones used in resource transportation and combat.",
    baseStats: { "Drone Speed": "40", "Transport Drones": "1" },
    abilities: [
      { name: "Battle Grid", effect: "Deploy a formation of battle drones to defend against nearby monsters." },
      { name: "Parasitic Drones", effect: "Release drones that attach to and weaken the strongest monsters they can find. The monster will subsequently take more damage and be continuously stunned." },
    ],
    supplement: null,
  },
  {
    name: "Auto Cannon", type: "Additional", slot: "Dome Surface",
    desc: "Install a powerful automatic cannon on your dome that does heavy damage to monsters.",
    baseStats: { "Bullet Damage": "4", "Rate of Fire": "100%", "Movement Speed": "0.45", "Bullet Spray": "0%", "Time between shots": "2s" },
    abilities: [],
    supplement: { name: "Fast Firing Cannon", effect: "The auto cannon fires much faster. Simple and effective." },
    upgradeNote: "Fire-rate branch -> Rapid Fire -> Faster Rapid Fire; Shotgun branch -> More Shots (x2) -> More Shots (x2); Movement-speed branch -> operate even when player is not present (cost: 2 water). All other upgrade costs on this branch are not published.",
  },
  {
    name: "Blast Mining", type: "Additional", slot: "Cellar",
    desc: "Produce blast charges for explosive mining. Carry them into the mines and release to detonate.",
    baseStats: { "Blast Charges": "1", "Production time (cycles)": "1", "Explosion radius (tiles)": "2.70" },
    abilities: [],
    supplement: { name: "Triple Charges", effect: "Produce multiple blast charges at once instead of a single one." },
    upgradeNote: "Bigger blast radius branch -> Bigger Radius / 3 Small Bombs; second branch -> stick to wall and only destroy that wall / detonate on impact instead of a countdown. Costs not published.",
  },
  {
    name: "Buzz Saw", type: "Additional", slot: "Dome Surface",
    desc: "Install a buzz saw running along the dome cupola, dealing damage to nearby monsters.",
    baseStats: { "Damage per Second": "8", "Move Speed": "0.45" },
    abilities: [],
    supplement: { name: "Double Buzz Saw", effect: "Install another buzz saw to effectively defend both sides of the dome." },
  },
  {
    name: "Condenser", type: "Additional", slot: "Cellar",
    desc: "Add a machine under the dome that slowly produces water through condensation.",
    baseStats: { "Production Time (cycles)": "1.80", "Stores water": "1" },
    abilities: [],
    supplement: { name: "Auto Overcharge", effect: "Keep your primary gadget permanently overcharged without using up water. Water production will be delayed after overcharging." },
    upgradeNote: "Faster production branch -> even faster production / store 2 before it stops working / production is automatically stored; separate upgrade automatically powers gadget but delays production by 0.5 cycles. Costs not published.",
  },
  {
    name: "Dome Armor", type: "Additional", slot: "Dome Surface",
    desc: "Install a robust plating onto your dome, making it more durable.",
    baseStats: { "Health Capacity": "900hp" },
    abilities: [],
    supplement: { name: "Reactive Pulse", effect: "The dome armor retains a portion of the kinetic energy from attacks received, eventually releasing it in strong pulses that stun nearby enemies." },
  },
  {
    name: "Drillbert", type: "Additional", slot: "Cellar",
    desc: "Adopt an adorable creature that loves to dig. Carry it into the mine and drop it off where you want it to work. Check back to wake it up when it goes to sleep on the job.",
    baseStats: { "Drilling hits": "200", "Drill Strength": "0.70" },
    abilities: [],
    supplement: { name: "Dynamic Duo", effect: "Bring in Drillbert's cousins Diggory and Minerva to help with mining." },
  },
  {
    name: "Drilling Rig", type: "Additional", slot: "Mine Shaft",
    desc: "A central drill to go deep into the mine, with an optional side driller. Can also mine through bedrock.",
    baseStats: { "Side Extension Speed": "20", "Side Driller Time per Tile": "4s" },
    abilities: [],
    supplement: { name: "Additional Side Driller", effect: "Gain more side drillers with the same functionality as the first." },
  },
  {
    name: "Furnace", type: "Additional", slot: "Cellar, Dome Backside",
    desc: "Install a furnace with a chimney. Its smoke delays the next monster attack.",
    baseStats: { "Iron Delay": "6s", "Iron Burn Time (cycles)": "2", "Maximum Iron Stack": "2", "Base Delay": "8s" },
    abilities: [],
    supplement: { name: "Numbing Fumes", effect: "Add a toxic component to the fumes, numbing the nervous systems of the monsters and slowing down their movement." },
  },
  {
    name: "Iron Worms", type: "Additional", slot: "Cellar",
    desc: "Grow portable extractor worms that attach to iron clusters and efficiently extract them over time.",
    baseStats: { "Additional Resources": "1", "Worm Production (cycles)": "0.85", "Extraction Duration": "2s", "Worms Produced": "1" },
    abilities: [],
    supplement: { name: "Lair Implosion", effect: "Instead of withering inside their tunnels, the worms will collapse rocks they tunneled into, also destroying some surrounding rock." },
  },
  {
    name: "Lift", type: "Additional", slot: "Mine Shaft",
    desc: "Install an automated lift that brings mined resources up for processing in the dome.",
    baseStats: { "Orbs carry resources": "3", "Orbs": "4", "Orb Speed": "20" },
    abilities: [],
    supplement: { name: "Gravitational Lift", effect: "Instead of using lifting orbs, all resources inside the lift are continuously moved upwards by an inverse gravity field. Partially refunds resources spent on orbs." },
    upgradeNote: "More orbs (cost: 1 iron, 1 water; infinite upgrades possible); faster orbs; orb carry capacity (3 -> 4). Only the \"more orbs\" cost is published.",
  },
  {
    name: "Missile Launcher", type: "Additional", slot: "Dome Backside",
    desc: "Fire target-seeking missiles at monsters. Must be manually triggered.",
    baseStats: { "Damage": "40", "Rockets": "1", "Trigger": "Secondary Combat Ability" },
    abilities: [],
    supplement: { name: "Restock Rockets", effect: "The missile silo will restock all rockets some time after being emptied." },
  },
  {
    name: "Mushroom Farm", type: "Additional", slot: "Cellar",
    desc: "Grow mushrooms in your cellar that can be planted inside the mine to get speed and mining buffs.",
    baseStats: { "Mining Strength Buff": "0", "Mining Buff Duration": "0s", "Growth Time (cycles)": "1.50", "Move Speed Buff": "20", "Speed Buff Duration": "10s" },
    abilities: [],
    supplement: { name: "Stacked Mushrooms", effect: "Stack the duration of each buff, gaining longer-lasting buffs by consuming many mushrooms." },
  },
  {
    name: "Probe", type: "Additional", slot: "Cellar, Keeper Suit",
    desc: "Add a probe to your suit which, when triggered, sends out a pulse that reveals nearby resources. Must be recharged at the station under the dome.",
    baseStats: { "Charges": "1", "Marker Retention": "10s", "Range (tiles)": "4" },
    abilities: [],
    supplement: { name: "Stationless Probe", effect: "The probe will recharge automatically over time, making the recharge station obsolete. Frees up the gadget slot in the cellar." },
    upgradeNote: "Range branch -> more range / markers last 601 seconds (10 minutes); separate upgrades reveal caves, reveal gadgets, reveal water, reveal cobalt. Costs not published.",
  },
  {
    name: "Prospecting Meter", type: "Additional", slot: "Keeper Suit",
    desc: "A meter that shows the distance to the nearest resources.",
    baseStats: { "Range (tiles)": "5", "Scan Delay": "1.80s" },
    abilities: [],
    supplement: { name: "High Performance Meter", effect: "Display the distance to the nearest chamber and improves the range significantly." },
    upgradeNote: "Upgrades: Range, Reduce Update Delay, Show Cobalt, Show Water. Costs not published.",
  },
  {
    name: "Resource Converter", type: "Additional", slot: "Cellar",
    desc: "Can convert resources, helping you balance your resource inventory.",
    baseStats: { "Iron per Water": "4", "Iron to Water Conversion Time": "0.80 cycles", "Water per Iron": "3 (over 0.80 cycles)" },
    abilities: [],
    supplement: { name: "Iron Refinement", effect: "Convert some iron into much more iron." },
    upgradeNote: "Initial options: convert 1 water to 3 iron (over 0.80 cycles); convert 4 iron to 1 water (over 0.80 cycles). Cobalt-to-iron conversion is listed on the source page as 0 / not available by default.",
  },
  {
    name: "Resource Packer", type: "Additional", slot: "Keeper Suit",
    desc: "Install a resource packer into your suit which can pack and compress multiple resources into a bundle, making them easier to transport.",
    baseStats: { "Charges": "2", "Bundle Size": "4", "Recharge Duration": "25s" },
    abilities: [],
    supplement: { name: "Masterful Packing", effect: "Near instant recharge makes the usage nearly unrestricted, in addition to improving bundle size and scaling." },
  },
  {
    name: "Shockwave Hammer", type: "Additional", slot: "Dome Surface",
    desc: "Install two hammers on the dome cupola that create intense shockwaves. Must be manually triggered.",
    baseStats: { "Cooldown": "8s", "Damage": "5", "Stun Duration": "1s", "Stun Strength": "1", "Trigger": "Secondary Combat Ability" },
    abilities: [],
    supplement: { name: "Deadly Wave", effect: "The shockwave deals a vast amount of damage which can even annihilate some stronger monsters." },
  },
  {
    name: "Spire", type: "Additional", slot: "Dome Backside",
    desc: "A defensive Spire that shoots down incoming projectiles.",
    baseStats: { "Shots before Recharge": "1", "Recharge Time": "5s", "Targeting Time": "0.20s" },
    abilities: [
      { name: "Burst Fire (mutually exclusive w/ Sustained Fire)", effect: "Increases shots made before needing to recharge." },
      { name: "Sustained Fire (mutually exclusive w/ Burst Fire)", effect: "Drastically lowers the recharge time." },
      { name: "Projectile Split (mutually exclusive w/ Energy Trap)", effect: "Turns destroyed projectiles into sprays of your own bullets." },
      { name: "Energy Trap (mutually exclusive w/ Projectile Split)", effect: "Creates defensive spheres at destroyed projectile's location that absorb more projectiles." },
    ],
    supplement: { name: "Projectile Slowdown", effect: "The spire continuously slows down all enemy projectiles." },
  },
  {
    name: "Stun Laser", type: "Additional", slot: "Dome Surface",
    desc: "Install a laser that auto-targets and stuns monsters.",
    baseStats: { "Cooldown": "4s", "Fire Time": "3s", "Speed": "0.50", "Stun Strength": "1.80" },
    abilities: [],
    supplement: { name: "Area Stun", effect: "Creates a stun blast around the target monster that stuns all nearby monsters. The area grows and deals more damage the more monsters there are in it." },
  },
  {
    name: "Suit Blaster", type: "Additional", slot: "Keeper Suit",
    desc: "Install a mining blaster into your suit which can explosively destroy rocks around you.",
    baseStats: { "Charges per Cycle": "1.50", "Maximum Charges": "1", "Blast Radius (tiles)": "1.50" },
    abilities: [],
    supplement: { name: "Directional Charge", effect: "When moving in a direction, the suit blaster will blast a long tunnel. Radial blasts can still be achieved by not moving when triggering the suit blaster." },
    upgradeNote: "More Charges (repeatable 3x, charge speed per charge 0% -> 40%, max charges +1 each time, charge speed itself does not increase further); Explosion Radius 1 (1.50 -> 2); Explosion Radius 2 (2 -> 2.50); Charge Speed 1 (1.50 -> 2.50 charges/cycle); Charge Speed 2 (2.50 -> 4 charges/cycle). Costs not published.",
  },
  {
    name: "Teleporter", type: "Additional", slot: "Cellar",
    desc: "A two-way teleporter connects a station in the cellar with a movable portal.",
    baseStats: { "Carry Slowdown": "28%", "Teleport Duration": "6s", "Resource Teleport Cooldown": "0s" },
    abilities: [],
    supplement: { name: "Teleport Resources", effect: "The portal automatically sucks in nearby resources and teleports them to the dome." },
    upgradeNote: "Teleport Duration 1 (6s -> 3s); Teleport Duration 2 (3s -> 1s); Teleport Items (carry non-resource, non-large items like Iron Worms through teleport); Lightweight Portal (Carry Slowdown 28% -> 4%). Costs not published.",
  },
  {
    name: "Underground Station", type: "Additional", slot: "Mine Shaft",
    desc: "Get a mobile station, running on a rail directly below the dome. Enter the station to remotely control your dome from within the mine.",
    baseStats: { "Reveal Distance (tiles)": "0" },
    abilities: [],
    supplement: { name: "Cartography", effect: "Show a minimap of the mine whenever you enter the mobile station. The minimap shows the discovered area and some tiles deep into the rock." },
  },
];

// ---------------------------------------------------------------------------
// DOME UPGRADES (cost is in Iron, confirmed by counting "Iron Resource Icon.png"
// occurrences against cost cells on each dome's wiki page)
// ---------------------------------------------------------------------------
const DOME_SOURCES = {
  "Laser Dome": { url: "https://domekeeper.wiki.gg/wiki/Laser_Dome", archive: "https://web.archive.org/web/20260420191920/https://domekeeper.wiki.gg/wiki/Laser_Dome", note: "Archived snapshot 2026-04-20 (oldid=7066). Marked a wiki stub (\"Page is W.I.P\")." },
  "Sword Dome": { url: "https://domekeeper.wiki.gg/wiki/Sword_Dome", archive: "https://web.archive.org/web/20260306061723/https://domekeeper.wiki.gg/wiki/Sword_Dome", note: "Archived snapshot 2026-03-06 (oldid=7065). Marked a wiki stub (\"Page is W.I.P, more info will be added soon\")." },
  "Tesla Dome": { url: "https://domekeeper.wiki.gg/wiki/Tesla_Dome", archive: "https://web.archive.org/web/20260420191920/https://domekeeper.wiki.gg/wiki/Tesla_Dome", note: "Archived snapshot 2026-04-20 (oldid=7063). Marked a wiki stub (\"This page is very W.I.P at the moment\"); the Electro Orb row is marked PLACEHOLDER on the source page." },
  "Artillery Dome": { url: "https://domekeeper.wiki.gg/wiki/Artillery_Dome", archive: "https://web.archive.org/web/20260227123912/https://domekeeper.wiki.gg/wiki/Artillery_Dome", note: "Archived snapshot 2026-02-27 (oldid=7064). Not marked a stub." },
};

const DOME_UPGRADES = [
  // Laser Dome
  { dome: "Laser Dome", section: "Power", upgrade: "Power 1", stats: "Damage 30 (+15); Speed while Firing 38% (-22%); Stun Strength 0.60 (+0.10)", cost: 6, notes: "" },
  { dome: "Laser Dome", section: "Power", upgrade: "Power 2", stats: "Damage 55 (+25); Speed while Firing 24% (-14%); Stun Strength 0.70 (+0.10)", cost: 12, notes: "" },
  { dome: "Laser Dome", section: "Power", upgrade: "Power 3", stats: "Damage 110 (+55); Move Speed 0.18 (-0.02); Speed while Firing 15% (-9%); Stun Strength 0.90 (+0.20)", cost: 20, notes: "" },
  { dome: "Laser Dome", section: "Power", upgrade: "Power 4", stats: "Damage 210 (+100); Move Speed 0.14 (-0.04); Speed while Firing 5% (-10%); Stun Strength 0.90 (+0.20)", cost: 32, notes: "" },
  { dome: "Laser Dome", section: "Speed", upgrade: "Move Speed 1", stats: "Move Speed 0.30 (+0.10)", cost: 6, notes: "" },
  { dome: "Laser Dome", section: "Speed", upgrade: "Move Speed 2", stats: "Move Speed 0.45 (+0.15)", cost: 10, notes: "" },
  { dome: "Laser Dome", section: "Speed", upgrade: "Move Speed 3", stats: "Move Speed 0.65 (+0.20)", cost: 20, notes: "" },
  { dome: "Laser Dome", section: "Misc", upgrade: "Laser Sight", stats: "Adds a laser sight", cost: 4, notes: "" },
  { dome: "Laser Dome", section: "Misc", upgrade: "Swivel Head Laser", stats: "Adds a 6° aim correction to the laser", cost: 16, notes: "Requires Move Speed 1" },
  { dome: "Laser Dome", section: "Misc", upgrade: "Dissolve Projectiles", stats: "Laser can now destroy projectiles", cost: 24, notes: "Requires Power 2" },
  { dome: "Laser Dome", section: "Health", upgrade: "Health 1", stats: "Health 1100", cost: 5, notes: "Requires purchasing Cobalt Repair once" },
  { dome: "Laser Dome", section: "Health", upgrade: "Health 2", stats: "Health 1400", cost: 10, notes: "Requires Health 1" },
  // Sword Dome
  { dome: "Sword Dome", section: "Sword", upgrade: "Slice Improvement", stats: "Sword Agility 5 (+1); Sword Speed 1.40 (+0.40); Slice Damage 37 (+15)", cost: 6, notes: "" },
  { dome: "Sword Dome", section: "Sword", upgrade: "Heavy Blade 1", stats: "Slice Damage 87 (+50); Stab Damage 30 (+10)", cost: 12, notes: "Mutually exclusive with Long Blade 1" },
  { dome: "Sword Dome", section: "Sword", upgrade: "Long Blade 1", stats: "Sword Agility 9 (+4); Sword Speed 1.80 (+0.40); Speed Loss on Slice 40% (-30%); Slice Damage 52 (+15); Stab Damage 25 (+5)", cost: 12, notes: "Mutually exclusive with Heavy Blade 1" },
  { dome: "Sword Dome", section: "Heavy Blade", upgrade: "Heavy Blade 2", stats: "Sword Speed 1.15 (-0.25); Slice Damage 167 (+80); Stab Damage 40 (+10); Stab Speed 90% (-10%)", cost: 20, notes: "Requires Heavy Blade 1" },
  { dome: "Sword Dome", section: "Heavy Blade", upgrade: "Heavy Blade 3", stats: "Sword Speed 0.90 (-0.25); Slice Damage 667 (+500); Stab Damage 60 (+20); Stab Speed 80% (-10%)", cost: 30, notes: "Requires Heavy Blade 2" },
  { dome: "Sword Dome", section: "Long Blade", upgrade: "Long Blade 2", stats: "Sword Agility 15 (+6); Sword Speed 2.10 (+0.30); Speed Loss on Slice 29% (-11%); Slice Damage 67 (+15); Stab Damage 35 (+10); sword bounces when hitting the ground", cost: 20, notes: "Requires Long Blade 1" },
  { dome: "Sword Dome", section: "Long Blade", upgrade: "Electrified Blade", stats: "Electrified Sword Damage 10 (deals damage on contact); Slice Damage 82 (+15); Stab Damage 45 (+10)", cost: 30, notes: "Requires Long Blade 2" },
  { dome: "Sword Dome", section: "Stab", upgrade: "Long Stab 1", stats: "Retract Speed 800 (+500); Extend Cooldown 3.50s (+0.50s); Stab Damage 60 (+40); Range 1550 (+1000); increased arrowhead size", cost: 5, notes: "Mutually exclusive with Fast Stab 1" },
  { dome: "Sword Dome", section: "Stab", upgrade: "Fast Stab 1", stats: "Extend Speed 350 (+100); Retract Speed 600 (+300); Extend Cooldown 3s (-2s); Stab Damage 35 (+15); increased arrowhead size", cost: 5, notes: "Mutually exclusive with Long Stab 1" },
  { dome: "Sword Dome", section: "Long Stab", upgrade: "Long Stab 2", stats: "Retract Speed 1900 (+1100); Extend Cooldown 4s (+0.50s); Stab Damage 160 (+100); Range 3050 (+1500); increased arrowhead size", cost: 5, notes: "Requires Long Stab 1" },
  { dome: "Sword Dome", section: "Long Stab", upgrade: "Long Stab 3", stats: "Retract Speed 3900 (+2000); Extend Cooldown 4.50s (+0.50s); Range 5050 (+2000); increased arrowhead size", cost: 5, notes: "Requires Long Stab 2" },
  { dome: "Sword Dome", section: "Fast Stab", upgrade: "Fast Stab 2", stats: "Extend Speed 500 (+150); Retract Speed 1000 (+400); Extend Cooldown 1.20s (-0.80s); Stab Damage 65 (+30); increased arrowhead size", cost: 5, notes: "Requires Fast Stab 1" },
  { dome: "Sword Dome", section: "Fast Stab", upgrade: "Javelin", stats: "Stab Damage 135 (+70); adds Javelin Throw; increased arrowhead size", cost: 5, notes: "Requires Fast Stab 2" },
  { dome: "Sword Dome", section: "Shield", upgrade: "Reflection 1", stats: "Sword Agility 3 (-1); increased shield pad size; shield now reflects energy projectiles", cost: 6, notes: "Default: Sword Agility 4, shield blocks energy projectiles" },
  { dome: "Sword Dome", section: "Shield Pad Size", upgrade: "Reflection 2 (row label unclear in source table)", stats: "Sword Agility 2 (-1); increased shield pad size", cost: 8, notes: "Source table's row name did not survive text extraction cleanly; stats and cost are as published" },
  { dome: "Sword Dome", section: "Shield Pad Size", upgrade: "Reflection 3", stats: "Sword Agility 1 (-1); increased shield pad size", cost: 14, notes: "" },
  { dome: "Sword Dome", section: "Reflection Improvements", upgrade: "Accelerated Reflection", stats: "Reflected Projectile Speed 300% (+200%)", cost: 8, notes: "" },
  { dome: "Sword Dome", section: "Reflection Improvements", upgrade: "Explosive Reflection", stats: "Reflected projectiles are explosive", cost: 14, notes: "" },
  { dome: "Sword Dome", section: "Health", upgrade: "Health 1", stats: "Health 1400 (+400)", cost: 6, notes: "Requires purchasing Cobalt Repair once" },
  { dome: "Sword Dome", section: "Health", upgrade: "Health 2", stats: "Health 1800 (+400)", cost: 12, notes: "Requires Health 1" },
  // Tesla Dome
  { dome: "Tesla Dome", section: "Reticle Speed", upgrade: "Reticle Speed 1", stats: "Reticle Speed 200 (+50)", cost: 4, notes: "" },
  { dome: "Tesla Dome", section: "Reticle Speed", upgrade: "Reticle Speed 2", stats: "Reticle Speed 260 (+60)", cost: 6, notes: "" },
  { dome: "Tesla Dome", section: "Reticle Speed", upgrade: "Reticle Speed 3", stats: "Reticle Speed 330 (+70)", cost: 12, notes: "" },
  { dome: "Tesla Dome", section: "Reticle Speed", upgrade: "Reticle Speed 4", stats: "Reticle Speed 410 (+80)", cost: 20, notes: "" },
  { dome: "Tesla Dome", section: "Shot Power", upgrade: "Shot Power 1", stats: "Shot Damage 50 (+20)", cost: 6, notes: "" },
  { dome: "Tesla Dome", section: "Shot Power", upgrade: "Shot Power 2", stats: "Shot Damage 80 (+30)", cost: 12, notes: "" },
  { dome: "Tesla Dome", section: "Shot Power", upgrade: "Shot Power 3", stats: "Shot Damage 115 (+35)", cost: 18, notes: "" },
  { dome: "Tesla Dome", section: "Shot Power", upgrade: "Shot Power 4", stats: "Shot Damage 155 (+40)", cost: 26, notes: "" },
  { dome: "Tesla Dome", section: "Quick Shot", upgrade: "Quick Shot", stats: "Quick Shot Damage 50%", cost: 4, notes: "" },
  { dome: "Tesla Dome", section: "Quick Shot", upgrade: "Powered Quick Shot", stats: "Quick Shot Damage 100% (+50%)", cost: 12, notes: "" },
  { dome: "Tesla Dome", section: "Auto Aim", upgrade: "Auto Aim", stats: "Enables Auto Aim", cost: 4, notes: "" },
  { dome: "Tesla Dome", section: "Electro Orb", upgrade: "Electro Orb", stats: "Orbs of lightning left behind on fully charged shots, dealing damage to nearby monsters", cost: 4, notes: "Marked PLACEHOLDER on the source page" },
  { dome: "Tesla Dome", section: "Persistent Orbs", upgrade: "Persistent Orbs 1", stats: "Electro Orb Lifetime 8s (+2s)", cost: 6, notes: "Requires Electro Orb" },
  { dome: "Tesla Dome", section: "Persistent Orbs", upgrade: "Persistent Orbs 2", stats: "Electro Orb Lifetime 10s (+2s)", cost: 8, notes: "Requires Persistent Orbs 1" },
  { dome: "Tesla Dome", section: "Persistent Orbs", upgrade: "Persistent Orbs 3", stats: "Electro Orb Lifetime 12s (+2s)", cost: 10, notes: "Requires Persistent Orbs 2" },
  { dome: "Tesla Dome", section: "Electro Orb Improvements", upgrade: "Nurture Electro Orbs", stats: "Orb Damage 25; adds Orb Nurturing", cost: 6, notes: "Requires Electro Orb" },
  { dome: "Tesla Dome", section: "Electro Orb Improvements", upgrade: "Depth Effect", stats: "Orb Stun Strength 1.80 (+0.90); requires Orb Nurturing", cost: 10, notes: "Requires Persistent Orbs 1" },
  { dome: "Tesla Dome", section: "Electro Orb Improvements", upgrade: "Superconductivity", stats: "Orb Damage 60 (+35); Orb Stun Strength 1.80; requires Orb Nurturing", cost: 12, notes: "Requires Persistent Orbs 2" },
  { dome: "Tesla Dome", section: "Health", upgrade: "Health 1", stats: "Health 1100 (+300)", cost: 6, notes: "Requires purchasing Cobalt Repair once" },
  { dome: "Tesla Dome", section: "Health", upgrade: "Health 2", stats: "Health 1400 (+300)", cost: 14, notes: "Requires Health 1" },
  // Artillery Dome
  { dome: "Artillery Dome", section: "Mortar", upgrade: "Monster Buster 1", stats: "Shell Damage 60 (+30); Direct Hit Multiplier 200% (+50%)", cost: 6, notes: "Mutually exclusive with Volatile Explosives 1" },
  { dome: "Artillery Dome", section: "Mortar", upgrade: "Volatile Explosives 1", stats: "Shell Damage 50 (+20); Shell Explosion Radius 80 (+30)", cost: 6, notes: "Mutually exclusive with Monster Buster 1" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Monster Buster 2", stats: "Mortar Direct Hit Damage 300% (+100%); Shell Damage 100 (+40); Shell Reload Speed 2.25s (-0.25s)", cost: 12, notes: "Tier 2" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Fast Rotation", stats: "Rotation Speed 1.35 (+0.35)", cost: 8, notes: "Tier 2; also available on Volatile Explosives tree" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Monster Buster 3", stats: "Mortar Direct Hit Damage 400% (+100%); Shell Damage 150 (+50); Shell Reload Speed 2s (-0.25s)", cost: 20, notes: "Tier 3" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Wide Rotation", stats: "Maximum Rotation 40° (+14°)", cost: 12, notes: "Tier 3; also available on Volatile Explosives tree" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Monster Buster 4", stats: "Mortar Direct Hit Damage 600% (+200%); Shell Damage 220 (+70)", cost: 30, notes: "Tier 4; mutually exclusive with Swift Reload" },
  { dome: "Artillery Dome", section: "Monster Buster Tree", upgrade: "Swift Reload", stats: "Shell Reload Speed 1s (-1s)", cost: 30, notes: "Tier 4; mutually exclusive with Monster Buster 4" },
  { dome: "Artillery Dome", section: "Volatile Explosives Tree", upgrade: "Double Shell", stats: "Mortar Direct Hit Damage 140% (-10%); Shell Reload Speed 3s (+0.5s); Shells 2 (+1); Shell Explosion Radius 100 (+20)", cost: 12, notes: "Tier 2" },
  { dome: "Artillery Dome", section: "Volatile Explosives Tree", upgrade: "Volatile Explosives 2", stats: "Shell Damage 80 (+30); Shell Explosion Radius 120 (+20)", cost: 20, notes: "Tier 3" },
  { dome: "Artillery Dome", section: "Volatile Explosives Tree", upgrade: "Volatile Explosives 3 (labeled \"Monster Buster 4\" in the source table)", stats: "Mortar Direct Hit Damage 120% (-20%); Shell Damage 100 (+20); Shell Reload Speed 3.5s (+0.5s); Shells 4 (+2); Shell Explosion Radius 140 (+20)", cost: 30, notes: "Tier 4; source table reuses the \"Monster Buster 4\" row name here, likely a template artifact -- stats and cost are as published" },
  { dome: "Artillery Dome", section: "Volatile Explosives Tree", upgrade: "Swift Reload", stats: "Shell Reload Speed 1.5s (-1.5s)", cost: 30, notes: "Tier 4; mutually exclusive with Volatile Explosives 3" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Improved Anti-Air Gun", stats: "Adds laser sight; Bullet Reload Speed 0.13s (-0.04s); Rotation Speed while Shooting 80% (-5%)", cost: 4, notes: "" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Fast Fire 1", stats: "Bullet Reload Speed 0.10s (-0.03s); Rotation Speed while Shooting 74% (-6%)", cost: 8, notes: "" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Fast Fire 2", stats: "Bullet Reload Speed 0.07s (-0.03s); Rotation Speed while Shooting 69% (-5%)", cost: 14, notes: "Mutually exclusive with Homing Rockets 1" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Homing Rockets 1", stats: "Bullet Damage 10 (+7.50); replaces bullets with homing rockets; Bullet Reload Speed 0.40s (+0.30s)", cost: 14, notes: "Mutually exclusive with Fast Fire 2" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Double Barrel", stats: "Anti-Air Guns 2 (+1); Bullet Reload Speed 0.05s (-0.02s); Rotation Speed while Shooting 59% (-10%)", cost: 26, notes: "Requires Fast Fire 2" },
  { dome: "Artillery Dome", section: "Anti-Air Gun", upgrade: "Homing Rockets 2", stats: "Bullet Damage 20 (+10)", cost: 26, notes: "Requires Homing Rockets 1" },
  { dome: "Artillery Dome", section: "Health", upgrade: "Health 1", stats: "Health 1600 (+400)", cost: 6, notes: "Requires purchasing Cobalt Repair once" },
  { dome: "Artillery Dome", section: "Health", upgrade: "Health 2", stats: "Health 2000 (+400)", cost: 14, notes: "Requires Health 1" },
];

const DOME_DEFAULTS = {
  "Laser Dome": "Damage 15; Move Speed 0.20; Speed while Firing 60%; Stun Strength 0.50; Health 800",
  "Sword Dome": "Sword Agility 4; Sword Speed 1; Speed Loss on Slice 70%; Slice Damage 22; Stab Damage 20; Health 1000",
  "Tesla Dome": "Reticle Speed 150; Shot Damage 30; Health 800",
  "Artillery Dome": "Mortar Direct Hit Damage 150%; Shell Damage 30; Shell Reload Speed 2.50s; Shell Explosion Radius 50; Anti-Air Bullet Damage 2.50; Anti-Air Bullet Reload Speed 0.17s; Anti-Air Rotation Speed while Shooting 85%; Health 1200",
};

const DOME_SUPPLEMENTS = {
  "Laser Dome": { name: "Double Laser", desc: "Install a second laser turret, but splits your firepower between them.", stats: "Damage Modifier 80%; Move Speed +0.04; Move Speed Modifier 80%; Speed while Firing +10%" },
  "Sword Dome": { name: "Stab Bomb Delivery", desc: "The sword carries a bomb, exploding on the first enemy the sword stabs.", stats: "Tip bomb mounted; Bomb Damage 200; Extend Cooldown +1s" },
  "Tesla Dome": { name: "Perfect Timing", desc: "Shoot a much more powerful shot by shooting precisely at the moment the tesla is recharged and ready to fire.", stats: "Shot Multiplier 200%; Time Window 0.20s" },
  "Artillery Dome": { name: "Deafening Blast", desc: "Firing the mortar is so powerful that nearby monsters get stunned for some time.", stats: "Stun Duration √(Shell Damage)×0.1 (varies 0.55s-1.48s); Stun Strength √(Shell Damage)×0.5 (varies 2.74-7.42); Stun Size 30+√(Shell Damage)×13 (varies 101.20-222.82)" },
};

// ---------------------------------------------------------------------------
// KEEPER UPGRADES (cost is in Iron, same icon-count confirmation as domes)
// ---------------------------------------------------------------------------
const KEEPER_SOURCES = {
  "Engineer": { url: "https://domekeeper.wiki.gg/wiki/Engineer", archive: "https://web.archive.org/web/20260221184044/https://domekeeper.wiki.gg/wiki/Engineer", note: "Archived snapshot 2026-02-21 (oldid=6563). Not marked a stub." },
  "Assessor": { url: "https://domekeeper.wiki.gg/wiki/Assessor", archive: "https://web.archive.org/web/20250903051558/https://domekeeper.wiki.gg/wiki/Assessor", note: "Archived snapshot 2025-09-03 (oldid=5924). Not marked a stub." },
};

const KEEPERS = [
  { name: "Engineer", desc: "A skilled, efficient professional with excellent mining skills. Uses a drill to dig around and pulls resources to move them.", availability: "Available in the demo; the first of the two keepers documented on the wiki." },
  { name: "Assessor", desc: "A sophisticated miner who employs experimental kinetic energy and gravity technologies. Uses orbs to mine around and packets to move resources.", availability: "Second keeper documented on the wiki. The wiki's Keepers overview page is a stub and does not state an unlock cost or method for either keeper." },
];

const KEEPER_UPGRADES = [
  // Engineer
  { keeper: "Engineer", section: "Drill Strength", upgrade: "Drill Strength 1", stats: "Drill Strength 7 (+5)", cost: 4, notes: "Default Drill Strength is 2" },
  { keeper: "Engineer", section: "Drill Strength", upgrade: "Drill Strength 2", stats: "Drill Strength 18 (+11)", cost: 8, notes: "" },
  { keeper: "Engineer", section: "Drill Strength", upgrade: "Drill Strength 3", stats: "Drill Strength 46 (+28)", cost: 14, notes: "" },
  { keeper: "Engineer", section: "Drill Strength", upgrade: "Drill Strength 4 (repeatable)", stats: "Drill Strength 102 (+56, then +56×3^n for each further purchase, n = times previously bought)", cost: "22, +10 each further purchase", notes: "" },
  { keeper: "Engineer", section: "Movement Speed", upgrade: "Movement Speed 1", stats: "Jet Pack Stage 2; Max Speed 74 (+18)", cost: 4, notes: "Default Jet Pack Stage 1, Max Speed 56" },
  { keeper: "Engineer", section: "Movement Speed", upgrade: "Movement Speed 2", stats: "Jet Pack Stage 3; Max Speed 94 (+20)", cost: 8, notes: "" },
  { keeper: "Engineer", section: "Movement Speed", upgrade: "Movement Speed 3", stats: "Jet Pack Stage 4; Max Speed 116 (+22)", cost: 12, notes: "" },
  { keeper: "Engineer", section: "Movement Speed", upgrade: "Movement Speed 4", stats: "Jet Pack Stage 5; Max Speed 140 (+24)", cost: 18, notes: "" },
  { keeper: "Engineer", section: "Carry Strength", upgrade: "Carry Strength 1", stats: "Speed Loss per Resource Carried 2.15 (-3.55); Resource Capacity 7", cost: 4, notes: "Default Speed Loss per Resource 5.7, Capacity 3" },
  { keeper: "Engineer", section: "Carry Strength", upgrade: "Carry Strength 2", stats: "Speed Loss per Resource Carried 0.90 (-1.25); Resource Capacity 12", cost: 8, notes: "" },
  { keeper: "Engineer", section: "Carry Strength", upgrade: "Carry Strength 3", stats: "Speed Loss per Resource Carried 0.42 (-0.48); Resource Capacity 17", cost: 12, notes: "" },
  { keeper: "Engineer", section: "Carry Strength", upgrade: "Carry Strength 4", stats: "Speed Loss per Resource Carried 0.17 (-0.25); Resource Capacity 30", cost: 20, notes: "" },
  // Assessor
  { keeper: "Assessor", section: "Reflection Field", upgrade: "Reflection Field", stats: "Action Cooldown 18s; Field Lifetime 16s; Additional Damage on Next Hit 40%; unlocks Reflection Field ability", cost: 6, notes: "" },
  { keeper: "Assessor", section: "Reflection Field", upgrade: "Field Lifetime", stats: "Action Cooldown 12s (-6s); Field Lifetime 24s (+8s); Additional Damage 80% (+40%); Sphere Speedup +25%", cost: 16, notes: "Requires Reflection Field" },
  { keeper: "Assessor", section: "Explode Spheres", upgrade: "Explode Spheres", stats: "Action Cooldown 20s; Explosion radius 1.80 tiles; unlocks Explode Spheres ability", cost: 6, notes: "" },
  { keeper: "Assessor", section: "Explode Spheres", upgrade: "Improved Explosion", stats: "Action Cooldown 14s (-6s); Explosion radius 2.50 tiles (+0.70)", cost: 16, notes: "Requires Explode Spheres" },
  { keeper: "Assessor", section: "Split Spheres", upgrade: "Split Spheres", stats: "Action Cooldown 9s; Split Sphere Lifetime 70%; unlocks Split Incoming Spheres ability", cost: 6, notes: "" },
  { keeper: "Assessor", section: "Split Spheres", upgrade: "Improved Split", stats: "Action Cooldown 6.5s (-2.5s); Split Sphere Lifetime 90% (+20%)", cost: 16, notes: "Requires Split Spheres" },
  { keeper: "Assessor", section: "Movement", upgrade: "Gravitational Movement 1", stats: "Top Speed 90; Minimum Speed 114%", cost: 4, notes: "Default Top Speed 65, Minimum Speed 100%" },
  { keeper: "Assessor", section: "Movement", upgrade: "Gravitational Movement 2", stats: "Top Speed 120; Minimum Speed 129%", cost: 8, notes: "" },
  { keeper: "Assessor", section: "Movement", upgrade: "Gravitational Movement 3", stats: "Top Speed 160; Minimum Speed 149%", cost: 14, notes: "" },
  { keeper: "Assessor", section: "Movement", upgrade: "Full Torque", stats: "Top Speed 180; Minimum Speed 220%", cost: 18, notes: "" },
  { keeper: "Assessor", section: "Carry", upgrade: "Center Marker", stats: "Bundle Duration 25s; Bundle Speed 30; adds a faint grey line descending from the dome", cost: 4, notes: "Default Bundle Duration 15s, Bundle Speed 30" },
  { keeper: "Assessor", section: "Carry", upgrade: "Bundle Guidance", stats: "Bundle Duration 40s; Bundle Speed 40; bundles are attracted to the close Assessor", cost: 6, notes: "" },
  { keeper: "Assessor", section: "Carry", upgrade: "Gravity Column", stats: "Bundle Duration 80s; Bundle Speed 50; bundles stop at the center Marker", cost: 12, notes: "" },
  { keeper: "Assessor", section: "Carry", upgrade: "Powerful Bundle", stats: "Bundle Duration 300s; Bundle Speed 80; no added ability", cost: 16, notes: "" },
];

function findGadget(name) {
  return GADGETS.find(g => g.name.toLowerCase() === String(name).toLowerCase());
}
function findDomeUpgrade(dome, upgrade) {
  return DOME_UPGRADES.find(u => u.dome === dome && u.upgrade === upgrade);
}
function findKeeperUpgrade(keeper, upgrade) {
  return KEEPER_UPGRADES.find(u => u.keeper === keeper && u.upgrade === upgrade);
}

if (typeof module !== "undefined") {
  module.exports = {
    SITE_NOTE, GADGET_SOURCE, GADGET_SOURCE_ARCHIVE, GADGET_SOURCE_NOTE,
    GADGETS, DOME_SOURCES, DOME_UPGRADES, DOME_DEFAULTS, DOME_SUPPLEMENTS,
    KEEPER_SOURCES, KEEPERS, KEEPER_UPGRADES,
    findGadget, findDomeUpgrade, findKeeperUpgrade,
  };
}
