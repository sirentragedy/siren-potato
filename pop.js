// Array of available pop sounds (Now stored inside 'popSounds/' folder)
const popSounds = [
    "popSounds/pop1.mp3", "popSounds/pop2.mp3", "popSounds/pop3.mp3", "popSounds/pop4.mp3", "popSounds/pop5.mp3",
    "popSounds/pop6.mp3", "popSounds/pop7.mp3", "popSounds/pop8.mp3", "popSounds/pop9.mp3", "popSounds/pop10.mp3",
    "popSounds/pop11.mp3", "popSounds/pop12.mp3", "popSounds/pop13.mp3", "popSounds/pop14.mp3", "popSounds/pop15.mp3",
    "popSounds/pop16.mp3", "popSounds/pop17.mp3", "popSounds/pop18.mp3", "popSounds/pop19.mp3", "popSounds/pop20.mp3",
    "popSounds/pop21.mp3", "popSounds/pop22.mp3"
];

// Function to generate a bright random color
function getBrightColor() {
    let r = Math.floor(Math.random() * 156) + 100; // 100-255 (Avoiding dark colors)
    let g = Math.floor(Math.random() * 156) + 100;
    let b = Math.floor(Math.random() * 156) + 100;
    return rgb(${r}, ${g}, ${b});
}

// Function to lighten a color
function lightenColor(rgbString, percent) {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let r = Math.min(255, rgb[0] + percent);
    let g = Math.min(255, rgb[1] + percent);
    let b = Math.min(255, rgb[2] + percent);
    return rgb(${r}, ${g}, ${b});
}

// Adding popping bubbles
document.getElementById("pop").addEventListener("click", function() {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Assign a bright random color for the bubble
    bubble.style.backgroundColor = getBrightColor();

    // Assign a random size for the bubble (between 50px and 150px)
    let bubbleSize = Math.floor(Math.random() * 100) + 50; 
    bubble.style.width = ${bubbleSize}px;
    bubble.style.height = ${bubbleSize}px;

    // Position bubble randomly
    bubble.style.top = ${Math.random() * 100}vh;
    bubble.style.left = ${Math.random() * 100}vw;

    document.getElementById("bubble-container").appendChild(bubble);

    // Play a random pop sound
    let randomSound = new Audio(popSounds[Math.floor(Math.random() * popSounds.length)]);
    randomSound.currentTime = 0; // Reset sound to avoid delay
    randomSound.play();

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 900);
});

// Recoloring the page
document.getElementById("recolor").addEventListener("click", function() {
    let newColor = getBrightColor();
    document.body.style.backgroundColor = newColor;
    document.body.style.color = "black";

    // Adjust navbar to a slightly lighter version of the background color
    let navbar = document.querySelector("nav");
    let lightNavbarColor = lightenColor(newColor, 30);
    navbar.style.backgroundColor = lightNavbarColor;

    // Change navbar text color to black
    document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "black";
    });

    // Change "Pop" button to black with white text
    document.getElementById("pop").style.backgroundColor = "black";
    document.getElementById("pop").style.color = "white";
});

// Resetting colors (Decolor button)
document.getElementById("decolor").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // Reset navbar to default
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#222";

    // Reset navbar text color to white
    document.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = "white";
    });

    // Reset "Pop" button to original colors
    document.getElementById("pop").style.backgroundColor = "white";
    document.getElementById("pop").style.color = "black";
});
