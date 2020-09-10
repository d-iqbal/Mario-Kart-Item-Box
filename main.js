// Mario Kart Item Box Simulator
'use strict';

// Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

let resultsEl = document.getElementById('results');

// Event Listeners
document.getElementById('mainImg').addEventListener('click', collectItem);


// Event Function
function collectItem() {
    // Simulate the result of getting one item

    // Get racer position
    let position = Number(document.getElementById('position').value);

    // Simulate results for based on racer position
    if (position >= 1 && position <= 4) {
        simulatelto6(0.45, 0.8, 0.95, 0.99);
    } else if (position >= 5 && position <= 8) {
        simulateItems(0.2, 0.4, 0.6, 0.8);
    } else if (position >= 9 && position <= 12) {
        simulate7to12(0.05, 0.1, 0.35, 0.7);
    }
}

// Helper Functions
function simulateItems(bananastep, greenShellStep, starStep, goldenMushroomStep){

    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1
        
    if (randNum < bananastep) {
        // Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/banana.jpg">';

    } else if (randNum < greenShellStep) {
        // Green Shell
        numGreenShell++;
        document.getElementById('green-shell').innerHTML = numGreenShell;
        resultsEl.innerHTML += '<img src="images/greenshell.jpg">';

    } else if (randNum < starStep) {
        // Star
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/star.jpg">';

    } else if (randNum < goldenMushroomStep) {
        // Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/goldenmushroom.jpg">';

    } else {
        // Bullet Bill
        numBulletBill++;
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
        resultsEl.innerHTML += '<img src="images/bulletbill.jpg">';
    }
}




