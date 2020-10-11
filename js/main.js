// Initialize and add the map

function initMap() {
  // Your location
  const loc = { lat: 41.466584, lng: -81.859531 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  });

  console.log(map);
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
