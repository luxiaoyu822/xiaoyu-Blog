// Generate random color in hexadecimal format
function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Set random colors for CSS variables with transition
function setRandomColorsWithTransition() {
    const transitionDuration = 1; // Transition duration in seconds

    document.documentElement.style.setProperty('--random-color-1', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-2', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-3', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-4', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-5', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-6', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-7', getRandomColor() + ', ' + getRandomColor() + ', ' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-8', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-9', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-10', '#' + getRandomColor());
    document.documentElement.style.setProperty('--random-color-11', '#' + getRandomColor());

    document.documentElement.style.setProperty('--transition-duration', `${transitionDuration}s`);
}

// Call setRandomColorsWithTransition() initially to set the colors with transition
setRandomColorsWithTransition();

// Auto switch theme colors every 5 seconds
setInterval(setRandomColorsWithTransition, 5000);
