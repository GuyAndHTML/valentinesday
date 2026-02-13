// Get references to the new elements
const yesButton = document.getElementById('btn-yes');
const noButton = document.getElementById('btn-no');
const messageDisplay = document.getElementById('message');
const gifContainer = document.getElementById('gifContainer');
const celebrationGif = document.getElementById('celebrationGif');

// Optional: Create an overlay element if you want one
// You'll need to add <div id="overlay" class="overlay"></div> to your HTML
const overlay = document.getElementById('overlay');

// What happens when you click "Yes"
yesButton.addEventListener('click', () => {
    // Hide the question and buttons (optional)
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    
    // Show the message
    messageDisplay.innerHTML = "";
    
    // Show the GIF container (remove the 'hidden' class)
    gifContainer.classList.remove('hidden');
    
    // Optional: Show overlay
    if (overlay) {
        overlay.classList.add('show');
    }
    
    // Optional: Add confetti here if you want!
    // You can add the confetti library from earlier examples [citation:3]
});

// Keep your existing "No" button hover functionality
noButton.addEventListener('mouseenter', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width;
    const maxY = containerRect.height - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'relative';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

noButton.addEventListener('click', () => {
    messageDisplay.innerHTML = "Neeeee💔";
});