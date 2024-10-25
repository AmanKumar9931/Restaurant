document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    const summaryText = `Thank you ${name}! Your order  ${quantity} ${food} has been placed. We will send a confirmation to ${email}.`;

    document.getElementById('summaryText').innerText = summaryText;
    document.getElementById('orderSummary').classList.remove('hidden');
    
    // Clear the form
    this.reset();
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name2').value;
    const email = document.getElementById('email2').value;
    const message = document.getElementById('message2').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('response').innerText = 'Thank you for your message, ' + name + '!';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response').innerText = 'Please fill in all fields.';
    }
});
