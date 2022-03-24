/* global L */
var map = L.map('map', {
    crs: L.CRS.Simple, // CRS.Simple, which represents a square grid:
    minZoom: -1,
    maxZoom: 1,
});

var yx = L.latLng;

var xy = function (x, y) {
    if (L.Util.isArray(x)) {
        // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x); // When doing xy(x, y);
};

var bounds = [xy(0, 0), xy(2630, 1872)];
var image = L.imageOverlay('/map.jpg', bounds);
image.addTo(map);

// Generating the markers for the locations
async function fetchLocations() {
    const response = await fetch('./locations.json');
    return await response.json();
}
fetchLocations().then((locations) => {
    locations.forEach((L) => PointGenerator(L));
});

function PointGenerator(location) {
    return L.marker(xy(location.x, location.y))
        .addTo(map)
        .bindPopup(location.description);
}

map.fitBounds(bounds);
map.setMaxBounds(map.getBounds());

// Get click coords
map.on('click', function (e) {
    var coord = e.latlng;
    var lat = Math.round(coord.lat);
    var lng = Math.round(coord.lng);
    console.log(lat, lng);
});
