let hunger = 80;
let happiness = 70;
let energy = 60;

function updateBars() {
    document.getElementById("hungerBar").style.width = hunger + "%";
    document.getElementById("happyBar").style.width = happiness + "%";
    document.getElementById("energyBar").style.width = energy + "%";

    let petImg = document.getElementById("pet");

    // FIXED CONDITIONS — order properly
    if (energy < 35) {
        petImg.src = "pet_sleepy.png";       // Sleepy
    } 
    else if (hunger < 35) {
        petImg.src = "pet_hungry.png";       // Hungry
    } 
    else if (happiness > 75) {
        petImg.src = "pet_happy.png";        // Happy
    } 
    else {
        petImg.src = "pet_normal.png";       // DEFAULT NORMAL FACE
    }
}

function feedPet() {
    hunger = Math.min(100, hunger + 20);
    happiness = Math.min(100, happiness + 10);
    updateBars();
}

function playPet() {
    happiness = Math.min(100, happiness + 20);
    energy = Math.max(0, energy - 15);
    updateBars();
}

function sleepPet() {
    energy = Math.min(100, energy + 30);
    hunger = Math.max(0, hunger - 10);
    updateBars();
}

// Stats decrease slowly every 3 seconds
setInterval(() => {
    hunger = Math.max(0, hunger - 2);
    happiness = Math.max(0, happiness - 1);
    energy = Math.max(0, energy - 1);
    updateBars();
}, 3000);

updateBars();
