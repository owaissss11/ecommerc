document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        payment: document.querySelector('input[name="payment"]:checked').value
    };

    // Send data to the server
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('checkout-form').classList.add('hidden');
            document.getElementById('order-confirmation').classList.remove('hidden');
        } else {
            alert('There was an error processing your order. Please try again.');
        }
    });
});