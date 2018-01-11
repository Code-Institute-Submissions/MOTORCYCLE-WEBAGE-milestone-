
// google maps
function initMap() {
    var uluru = { lat: 50.8599851, lng: -0.9675234000000046 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
initMap();