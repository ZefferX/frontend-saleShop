document.addEventListener('DOMContentLoaded', function() {
    const url = 'http://localhost:3000/api/users/getAll';

    function fetchUsers() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const userTableBody = document.querySelector('#userTable tbody');
                userTableBody.innerHTML = '';

                data.forEach(user => {
                    const row = document.createElement('tr');
                    row.addEventListener('click', () => {
                        window.location.href = `/usuarios/usuario-por-id/usuario-por-id.html?id=${user.id}`;
                    });
                    
                    const nameCell = document.createElement('td');
                    nameCell.textContent = user.name
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

    fetchUsers();
});
