// Function to delay changing the display mode
function delayDisplayModeChange() {
setTimeout(function() {
    // Change the display mode to fullscreen or standalone after 5 seconds
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#3367D6');
    document.querySelector('link[rel="manifest"]').setAttribute('href', 'manifest_fullscreen.json');
}, 5000); // 5000 milliseconds = 5 seconds
}

// Call the function when the PWA loads
window.onload = delayDisplayModeChange;