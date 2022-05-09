
const searchPro = (query) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': ' a29c414b79msh477758a13a6093bp184cd9jsn49517514dbf7'
        }
    };
    
    fetch(`https://sephora.p.rapidapi.com/products/search?q=${query}&pageSize=60&currentPage=1`, options)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("sephoraPro",JSON.stringify(response));
            window.location.href = "./product.html";
        })
        .catch(err => console.error(err));

}
