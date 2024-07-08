document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtén los datos del formulario
    const userName = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    const userEmail = document.getElementById('email').value;
    const userMoney = document.getElementById('money').value;

    // Crea el objeto con los datos
    const formData = {
        name: userName,
        age: userAge,
        email: userEmail,
        money: userMoney
    };

    // Envía los datos al servidor usando fetch
    fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the data.');
    });
});
