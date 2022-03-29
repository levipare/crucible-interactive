/* global L */
var map = L.map('map', {
    crs: L.CRS.Simple, // CRS.Simple, which represents a square grid:
    minZoom: -1,
    maxZoom: 1,
});

map.attributionControl.addAttribution(
    '<a href="https://salem.lib.virginia.edu/maps/index.html">Map Source</a>'
);
map.attributionControl.addAttribution(
    '<a href="https://github.com/levipare/crucible-interactive">Github</a>'
);
map.attributionControl.addAttribution(`@${new Date().getFullYear()} Levi Pare`);

var yx = L.latLng;

var xy = function (x, y) {
    if (L.Util.isArray(x)) {
        // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x); // When doing xy(x, y);
};

var bounds = [xy(0, 0), xy(2630, 1872)];
var image = L.imageOverlay('./map.jpg', bounds);
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
    var popupCard = `<div class="info-card">
    <a data-fancybox data-src="${location.image}" data-caption="${location.title}">
    <img class="info-image" src="${location.image}"/>
    </a>
    <h3>${location.title}</h3>
    <p>${location.description}</p>
</div>`;

    return L.marker(xy(location.x, location.y)).addTo(map).bindPopup(popupCard);
}

map.fitBounds(bounds);

var southWest = L.latLng(-74, -72),
    northEast = L.latLng(1944, 2704),
    maxBounds = L.latLngBounds(southWest, northEast);
map.setMaxBounds(maxBounds);

// Get click coords
map.on('click', function (e) {
    var coord = e.latlng;
    var lat = Math.round(coord.lat);
    var lng = Math.round(coord.lng);
    console.log(lng, lat);
});
