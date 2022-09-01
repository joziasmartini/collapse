import { player } from './player.js';
import { items } from './items.js';
import { events } from './events.js';
import { places } from './places.js';

function use(item) {
    player.health += item.health;
    player.sleep += item.sleep;
    player.food += item.food;
    player.water += item.water;

    // If any status is > 100, then return 100
    player.health > 100 ? player.health = 100 : ''; 
    player.sleep > 100 ? player.sleep = 100 : ''; 
    player.food > 100 ? player.food = 100 : ''; 
    player.water > 100 ? player.water = 100 : ''; 

    // If any status is < 0, then player die
    player.health <= 0 ? console.log("You died.") : ''; 
    player.sleep <= 0 ? console.log("You died.") : ''; 
    player.food <= 0 ? console.log("You died.") : ''; 
    player.water <= 0 ? console.log("You died.") : ''; 
    
    // Print in console
    console.log("🖐  Used: " + item.name + ": " + item.description);
}

function usePlace(place) {
    console.log("\n🔎 Searching: " + place.name + ". " + place.description);
    console.log("📦 You finded: " + place.loot);
    console.log("🕑 It decreased your sleep, food and water\n")
}

console.clear();
// console.table(items);
// console.table(events);
console.log("\nCOLLAPSE (starting game)\n")
use(events.wounded);
usePlace(places.smallWoodenHouse);
use(items.bread);
use(items.waterBottle);

console.log("\n👤 [PLAYER] health: " + player.health + ", sleep: " + player.sleep + ", food: " + player.food + ", water: " + player.water + "\n");

console.log("\nButtons: [Search] [Inventory] [Craft] [Sleep]\n");