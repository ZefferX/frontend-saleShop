document.addEventListener('DOMContentLoaded', async function(){
    function getProductIdFromUrl(){
        const params =  new URLSearchParams(window.location.search)
        return params.get('id')
    }

    const productId = getProductIdFromUrl()

    if (!productId) throw Error('Not found product');
     {
        const url = `http://localhost:3000/api/products/${productId}`

        async function fetchProduct(){
            try {
                const response = await fetch(url)
                const product = await response.json()

                const productCard = document.getElementById('productCard')
                productCard.innerHTML = 
                `
                <h2>Product Information</h2
                <p><span class= "label">Name:</span> ${product.name} </p>
                <p><span class= "label">Price:</span> ${product.price} </p>
                <p><span class= "label">Quantity:</span> ${product.quantity} </p>
            
                `;
            } catch (error) {
                console.error('Error getting product information', error)
                const productCard= document.getElementById('productCard')
                productCard.innerHTML = '<p>Error loading user information. Please try again later.</p>'

            }
            
        }
        await fetchProduct()
        
    }
})