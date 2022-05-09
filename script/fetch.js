
const searchPro = (query) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': 'dc600e7ca0mshcce829df0697e0fp1c7b1ejsna2c915aa1f3f'
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
