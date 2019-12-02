const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('Error: cannot read a file');
    }
});
input = input.split("\n");
//needed fuel

let FuelRequired = 0;

for (let i = 0; i < input.length; i++) {
    FuelRequired += Math.floor(input[i] / 3) - 2;
}
console.log(`We need ${FuelRequired } of fuel. Part 1`);


//fuel for module part 2
let fuelTotal = 0;

function fuelForModule(fuelMass) {
    let fuel = 0;
    let mass = fuelMass;
    while (mass > 0) {
        mass = Math.floor(mass / 3 - 2);
        if (mass > 0) {
            fuel += mass
        }
    }
    return fuel;
}

for (var i = 0; i < input.length; i++) {
    fuelTotal += fuelForModule(input[i]);
}


console.log(`sum of the fuel requirements ${fuelTotal}. `)