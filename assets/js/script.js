const getGeo = async (address) =>{
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=1NIWlBjL8kQJXRvc3Eeev6AB387ibOdL9qGoQhrskVw`;
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}

$('#address-form').submit(async function(event){
    event.preventDefault();
    let address = $('#address').val();
    if(address){
        address = address.replace(/ /g, "+");
        address = address.replace(/,/g, "%2C");
        console.log(address);
        const geo = await getGeo(address);
    }
})