const getGeo = (data) =>{

}

$('#address-form').submit(function(event){
    event.preventDefault();
    let address = $('#address').val();
    if(address){
        address = address.replace(/ /g, "+");
        address = address.replace(/,/g, "%2C");
        console.log(address);
    }
})