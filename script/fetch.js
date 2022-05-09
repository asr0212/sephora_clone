
const searchPro = (query) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': '67fb80cd92mshf199fdb297164f9p1d19bdjsn867cebfb5776'
        }
    };
    
    fetch(`https://sephora.p.rapidapi.com/products/search?q=${query}&pageSize=60&currentPage=1`, options)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("sephoraPro",JSON.stringify(response));
            window.location.href = "../product.html";
        })
        .catch(err => console.error(err));

}
