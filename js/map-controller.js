'use strict'

function onInitMap() {
    renderPlaces()
}

function renderPlaces() {
    const places = getplaces()
    console.log('place render',places)
    if (places.length) {
        var strHTMLs = places.map(place =>
        `<tr>
            <td>${place.id}</td>       
            <td>${place.lat}</td>       
            <td>${place.lng}</td>       
            <td>${place.name}</td>  
            <td>${place.zoom}</td>
            <td><button onclick="onRemovePlace('${place.id}')">remove</button>
                <button onclick="onAddPlace()">add</button>
            </td>     
         </tr>`
        )
        document.querySelector('.place-container').innerHTML = strHTMLs.join('')
    } else {
        // Handle case where there are no places
        document.querySelector('.place-container').innerHTML = '<tr><td colspan="6">No places available</td></tr>';
    }
}

function onRemovePlace(placeId) {
    // console.log(placeId)
    removePlace(placeId)
    renderPlaces()
 } 

 function onAddPlace(){
    const name = prompt('name')
    const lat = +prompt('lat')
    const lng = +prompt('lng')
    const zoom = +prompt('zoom')
    addPlace(name, lat, lng, zoom)
    renderPlaces()
 }