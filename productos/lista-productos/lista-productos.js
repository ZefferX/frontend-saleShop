document.addEventListener('DOMContentLoaded', function () {
    const url = 'http://localhost:3000/api/products/getAll'

    async function fetchProducts() {
        try {
            const response = await fetch(url)
            const data = await response.json()

            //Manipulacion del DOM

            const productTableBody = document.querySelector('#productTable tbody')
            productTableBody.innerHTML = '';

            data.forEach(product => {
                const row = document.createElement('tr');
                row.addEventListener('click', () => {
                    window.location.href = `/productos/productos-por-id/productos-por-id.html?id=${product.id}`
                })

                const productName = document.createElement('td')
                productName.textContent = product.name
                row.appendChild(productName)

                const productPrice = document.createElement('td')
                productPrice.textContent = product.price
                row.appendChild(productPrice)

                const productQuantity = document.createElement('td')
                productQuantity.textContent = product.quantity
                row.appendChild(productQuantity)

                productTableBody.appendChild(row)



            })
        } catch (error) {
            console.error('Failed to get list of products', error)
        }
    }
    fetchProducts()
}) 