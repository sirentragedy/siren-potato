// Array of available pop sounds
const popSounds = [
    "popSounds/pop1.mp3", "popSounds/pop2.mp3", "popSounds/pop3.mp3", 
    "popSounds/pop4.mp3", "popSounds/pop5.mp3", "popSounds/pop6.mp3", 
    "popSounds/pop7.mp3", "popSounds/pop8.mp3", "popSounds/pop9.mp3", 
    "popSounds/pop10.mp3", "popSounds/pop11.mp3", "popSounds/pop12.mp3", 
    "popSounds/pop13.mp3", "popSounds/pop14.mp3", "popSounds/pop15.mp3", 
    "popSounds/pop16.mp3", "popSounds/pop17.mp3", "popSounds/pop18.mp3", 
    "popSounds/pop19.mp3", "popSounds/pop20.mp3", "popSounds/pop21.mp3", 
];

// Function to generate bright, random color
function getBrightColor() {
    let r = Math.floor(Math.random() * 156) + 100; 
    let g = Math.floor(Math.random() * 156) + 100;
    let b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to lighten navbar color
function lightenColor(rgbString, percent) {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let r = Math.min(255, rgb[0] + percent);
    let g = Math.min(255, rgb[1] + percent);
    let b = Math.min(255, rgb[2] + percent);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("pop").addEventListener("click", function() {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Assigns a random, bright color for the bubble
    bubble.style.backgroundColor = getBrightColor();

    // Assigns a random size for the bubble
    let bubbleSize = Math.floor(Math.random() * 100) + 50;
    bubble.style.width = `${bubbleSize}px`;
    bubble.style.height = `${bubbleSize}px`;

    //Position the bubble randomly on page
    bubble.style.top = `${Math.random() * 100}vh`;
    bubble.style.left = `${Math.random() * 100}vh`;

    document.getElementById("bubble-container").appendChild(bubble);

    //Play a random pop sound
    let randomSound = new Audio(popSounds[Math.floor(Math.random() * popSounds.length)]);
    randomSound.currentTime = 0;
    randomSound.play();

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 900);
});

// Recoloring the Page
document.getElementById("recolor").addEventListener("click", function() {
    let newColor = getBrightColor();
    document.body.style.backgroundColor = newColor;
    document.body.style.color = "black";

    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = lightenColor(newColor, 30);

    document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "black";
    });

    document.getElementById("pop").style.backgroundColor = "black";
    document.getElementById("pop").style.color = "white";
});

// Decoloring the Page
document.getElementById("decolor").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    document.querySelector("nav").style.backgroundColor = "#222";

    document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "white";
    });
    
    document.getElementById("pop").style.backgroundColor = "white";
    document.getElementById("pop").style.color = "black";
});
