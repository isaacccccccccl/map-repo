'use strict'

const STORAGE_MAP_KEY = 'mapDB'


var gIdx = 2
var gPlaces = _createPlaces()

function getplaces() {
    return gPlaces
}

function removePlace(placeId) {
    var removeIndex = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(removeIndex, 1)
    saveToStorage(STORAGE_MAP_KEY, gPlaces)
}

function addPlace(name, lat, lng, zoom) {
    const newPlace = _createPlace(name, lat, lng, zoom)
    gPlaces.push(newPlace)
    saveToStorage(STORAGE_MAP_KEY, gPlaces)
}

function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function _createPlace(name, lat, lng, zoom) {
    const place = {
        id: '1p' + gIdx++,
        lat,
        lng,
        name,
        zoom
    }
    return place
}

function _createPlaces() {
    var places = loadFromStorage(STORAGE_MAP_KEY)
    console.log('places',places)

    if (!places || !places.length) {
        places = [{
            id: '1p' + gIdx++,
            lat: 32.1416,
            lng: 34.831213,
            name: 'Pukis house',
            zoom: 4
        },
        
        {
            id: '1p' + gIdx++,
            lat: 97.562,
            lng: 34.831213,
            name: 'Mukis house',
            zoom: 4
        },
         {
            id: '1p' + gIdx++,
            lat: 16.352,
            lng: 34.831213,
            name: 'Tukis house',
            zoom: 4
        }]
        saveToStorage(STORAGE_MAP_KEY, places)
    } 
    return places
}

function initMap() {
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Ensure the map initializes after the page has fully loaded
window.onload = function () {
    initMap();
};