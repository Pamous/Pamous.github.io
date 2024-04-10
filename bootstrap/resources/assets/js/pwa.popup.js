// Function to show the pop-up
function showPopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'block';
}

// Function to handle adding to home screen
function addToHomeScreen() {
    // Logic to add to home screen (using browser's built-in prompt or custom logic)
    // You can use the beforeinstallprompt event for handling this: https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
    // For simplicity, we'll just hide the popup in this example
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'none';
}

// Show the pop-up when the page loads
window.onload = showPopup;