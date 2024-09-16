// Array of 50 random colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#FF8D33", "#33FFF6", "#9D33FF", "#DFFF33", "#FF3360", "#3391FF",
    "#71FF33", "#FF33D9", "#E833FF", "#33FFAC", "#FFC933", "#33FFE0", "#3360FF", "#B533FF", "#F733FF", "#33FF89",
    "#FF3367", "#33FF71", "#33E3FF", "#FFBD33", "#FF33F4", "#93FF33", "#FF3380", "#33FFDE", "#33A3FF", "#FF7333",
    "#FF33A9", "#47FF33", "#33FFCB", "#FF9A33", "#333FFF", "#CCFF33", "#FF33E8", "#33FF57", "#FF6E33", "#33FFBE",
    "#FF5733", "#83FF33", "#33D3FF", "#FF3386", "#FFAB33", "#33FF8E", "#A533FF", "#FF6A33", "#33FF95", "#FF33DA"
];

let currentIndex = 0;

// Function to change the background color
function changeColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Event listeners for spacebar and touch events
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', () => {
    changeColor();
});
