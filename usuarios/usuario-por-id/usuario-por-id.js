document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener el ID del usuario de la URL
    function getUserIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    // Obtiene el ID del usuario
    const userId = getUserIdFromUrl();
 
    if (userId) {
        // Define la URL del servidor
        const url = `http://localhost:3000/api/users/${userId}`;

        // Función para obtener la información del usuario del servidor
        function fetchUser() {
            fetch(url)
                .then(response => response.json())
                .then(user => {
                    const userCard = document.getElementById('userCard');
                    userCard.innerHTML = `
                        <h2>User Information</h2>
                        <p><span class="label">Name:</span> ${user.name}</p>
                        <p><span class="label">Age:</span> ${user.age}</p>
                        <p><span class="label">Email:</span> ${user.email}</p>
                        <p><span class="label">Money:</span> ${user.money}</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                    const userCard = document.getElementById('userCard');
                    userCard.innerHTML = '<p>Error loading user information. Please try again later.</p>';
                });
        }

        // Llamar a la función para obtener la información del usuario
        fetchUser();
    } else {
        const userCard = document.getElementById('userCard');
        userCard.innerHTML = '<p>No user ID provided in the URL.</p>';
    }
});
