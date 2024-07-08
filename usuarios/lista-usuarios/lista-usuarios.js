document.addEventListener('DOMContentLoaded', function() {
    // Define la URL del servidor
    const url = 'http://localhost:3000/api/users/getAll';

    // Función para obtener usuarios del servidor
    function fetchUsers() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const userTableBody = document.querySelector('#userTable tbody');
                userTableBody.innerHTML = ''; // Limpiar la tabla antes de insertar nuevas filas

                data.forEach(user => {
                    const row = document.createElement('tr');
                    
                    const nameCell = document.createElement('td');
                    nameCell.textContent = user.name;
                    row.appendChild(nameCell);

                    const ageCell = document.createElement('td');
                    ageCell.textContent = user.age;
                    row.appendChild(ageCell);

                    const emailCell = document.createElement('td');
                    emailCell.textContent = user.email;
                    row.appendChild(emailCell);

                    const moneyCell = document.createElement('td');
                    moneyCell.textContent = user.money;
                    row.appendChild(moneyCell);

                    userTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    // Llamar a la función para obtener usuarios al cargar la página
    fetchUsers();
});
