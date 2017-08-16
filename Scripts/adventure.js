// Adventure JavaScript
var map;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.6687, lng: 7.20645},
          zoom: 13
        });

        var input = document.getElementById('pac-input');

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);

        var marker = new google.maps.Marker({
          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            return;
          }

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }

          // Set the position of the marker using the place ID and location.
          marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
          });
          marker.setVisible(true);

          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-id'].textContent = place.place_id;
          infowindowContent.children['place-address'].textContent =
              place.formatted_address;
          infowindow.open(map, marker);
        });
}
function onclick() {
  // select from array
  var geocoder = new google.maps.Geocoder;
  console.log($(this).find(':selected').val());
  console.log($('#landmarks').val() !== $(this).find(':selected').val());
  if ($(this).find(':selected').val() !== $('#landmarks').val()) {
    console.log('helloooo');
    return;
  }
  // var array = [
  //   new google.maps.LatLng(50.6687, 7.2064),
  //   new google.maps.LatLng(50.7369, 7.1012),
  //   new google.maps.LatLng(50.7334, 7.0995),
  //   new google.maps.LatLng(50.7247, 7.0931),
  // ];

    array = [
      {
        name: 'Castle Drachenburg',
        location: new google.maps.LatLng(50.6687, 7.2064),
        address: 'Schloß Drachenburg, Drachenfelsstraße 118, 53639 Königswinter, Germany',
        place_id: 'ChIJUQK_QqblvkcRAmBRBRto2dM'
      },
      {
        name: 'Beethoven Haus',
        location: new google.maps.LatLng(50.7369, 7.1012),
        address: 'Bonngasse 18-26, 53111 Bonn, Germany',
        place_id: 'ChIJD-wAAAvhvkcRkEaugn8x4PA'
      },
      {
        name: 'Bonner Münster',
        location: new google.maps.LatLng(50.7334, 7.0995),
        address: 'Münsterpl., 53111 Bonn, Germany',
        place_id: 'ChIJMxIQfp_hvkcROH24RU2mRzw'
      },
      {
        name: 'Botanical Gardens',
        location: new google.maps.LatLng(50.7247, 7.0931),
        address: 'Meckenheimer Allee 171, 53115 Bonn, Germany',
        place_id: 'ChIJFQmeKJvhvkcRb56waUqcEL8'
      },

    ]

  var selection = array[Math.floor(Math.random() * array.length)]
  console.log(selection);


  var input = $('#pac-input');
  input.val(selection.address)
  var autocomplete = new google.maps.places.Autocomplete(input[0]);
  autocomplete.bindTo('bounds', map);
  input.trigger('')
  map.panTo(selection.location);
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindowContent.children['place-name'].textContent = selection.name;
  infowindowContent.children['place-id'].textContent = selection.place_id;
  infowindowContent.children['place-address'].textContent = selection.address;
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map
  });
  marker.setPlace({
    placeId: selection.place_id,
    location: selection.location
  });
  marker.setVisible(true);
  infowindow.open(map, marker);


  // var adr = geocoder.geocode(selection.location, function(results, status) {
  //   console.log(results);
  // });
  // console.log(adr);
  //
  // var marker = new google.maps.Marker({
  //   map: map,
  //   position: selection.location
  // });
  //
  // marker.setPlace({
  //   placeId: 'test',
  //   location: selection
  // });
  // marker.setVisible(true);
  //
  // var infowindow = new google.maps.InfoWindow();
  // var infowindowContent = document.getElementById('infowindow-content');
  // infowindow.setContent(infowindowContent);
  // infowindow.open(map, marker);
  //
  // infowindowContent.children['place-name'].textContent = selection.name;
  // infowindowContent.children['place-id'].textContent = selection.place_id;
  // infowindowContent.children['place-address'].textContent = selection.address;

  //do something with that selection.  You would interact with the map
  // $('.result').text('you clicked the button and we selected' + selection)
};



function setup() {
  // when the elements that match #1 are clicked we call the function onclick
  console.log('setting up...');
  $('#dropdown').on('change', onclick);
}

// We put stuff in document.ready so that the javascript renders after the html.
// this ensures that it can grab html elements. (ie the button and the map)
$(document).ready(setup)
