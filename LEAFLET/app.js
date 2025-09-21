var map = L.map('map').setView([8.360314, 124.868358], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([8.359295, 124.869082], {
  color: "blue",
  fillColor: "rgba(28, 32, 114, 1)",
  fillOpacity: 0.5,
  radius: 250,
}).addTo(map);

var polygon = L.polygon([
  [8.361474, 124.867569],
  [8.358141, 124.86655],
  [8.360869, 124.869822],
]).addTo(map);

var marker = L.marker([8.359346, 124.869095]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
  .setLatLng([8.36212, 124.86726])
  .setContent("I am a standalone popup.")
  .openOn(map);

  // function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
// }

// map.on("click", onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);