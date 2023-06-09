export let events = {
    "searched" : {
        "name": "You searched this place",
        "description": "It decreased your sleep, food and water",
        "health": 0,
        "sleep": -1,
        "food": -2,
        "water": -2,
    },
    "wounded" : {
        "name": "You got wounded with this action",
        "description": "It decreased your health",
        "health": -10,
        "sleep": 0,
        "food": 0,
        "water": 0,
    },
    "scratched" : {
        "name": "You scratched yourself with this action",
        "description": "It decreased your health",
        "health": -2,
        "sleep": 0,
        "food": 0,
        "water": 0,
    },
};