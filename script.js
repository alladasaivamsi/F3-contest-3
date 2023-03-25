let getLocationBtn = document.querySelector('#getLocationBtn');
let removeLocationBtn = document.querySelector("#removeLocationBtn");
let innerItem = document.querySelector("#map");
let mapData = document.getElementById("mapData");

let latitude = localStorage.getItem('latitude');
let longitude = localStorage.getItem('longitude');

function getLocation()
{
    innerItem.style.display = 'block';
    
    if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(showPosition);   
    }
    
    else 
    { 
        innerItem.innerText="Geolocation is not supported by this browser."
    }
}

getLocationBtn.addEventListener('click', getLocation);

function removeLocation() 
{
    localStorage.removeItem('latitude');
    localStorage.removeItem('longitude');
    innerItem.style.display = 'none'; 
    mapData.style.display = 'none'; 
}

removeLocationBtn.addEventListener('click', removeLocation);

function showPosition(position) 
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    mapData.innerHTML = "Latitude: " + latitude + 
    "<br>Longitude: " + longitude;
   
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    
    getLocationBtn.disabled = true;
    innerItem.innerHTML = "<iframe src='https://maps.google.com/maps?q="+latitude+","+ longitude+"&z=15&output=embed'></iframe>";
}