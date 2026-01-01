// 1. Select the elements
const button = document.getElementById('myButton');
const text = document.getElementById('message');

// 2. Define what happens on interaction (Event Listener)
button.addEventListener('click', function() {
    // 3. Manipulate the HTML content
    text.textContent = "The button was clicked! JavaScript is working.";
    text.style.color = "blue"; // You can also change CSS styles
});