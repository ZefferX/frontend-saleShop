document.getElementById('createProductForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productQuantity = document.getElementById('productQuantity').value;

    const productFormData = {
        name: productName,
        price: productPrice,
        quantity: productQuantity
    }

    fetch('http://localhost:3000/api/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productFormData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data)
        alert('New product created!')
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error creating a new product')
    })

})