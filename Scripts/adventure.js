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

  // var array = [
  //   new google.maps.LatLng(50.6687, 7.2064),
  //   new google.maps.LatLng(50.7369, 7.1012),
  //   new google.maps.LatLng(50.7334, 7.0995),
  //   new google.maps.LatLng(50.7247, 7.0931),
  // ];

    landmarks = [
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

    eat = [
      {
        name: 'YUNICO - JAPANESE FINE DINING',
        location: new google.maps.LatLng(50.717958, 7.152408),
        address: 'Am Bonner Bogen 1, 53227 Bonn, Germany',
        place_id: 'ChIJOQ8y5KzmvkcRy8A_Sn4dJa8'
      },
      {
        name: 'El Tarascon',
        location: new google.maps.LatLng(50.724233, 7.089445),
        address: 'Clemens-August-Straße 2, 53115 Bonn, Germany',
        place_id: 'ChIJg3-s05rhvkcRe29SnKEFCUU'
      },
      {
        name: 'Strandhaus',
        location: new google.maps.LatLng(50.742320, 7.09155),
        address: 'Georgstraße 28, 53111 Bonn, Germany',
        place_id: 'ChIJcTa11brhvkcRN-t8LauRgV0'
      },
    ]

    study = [
      {
        name: 'Bibliothek der Friedrich-Ebert-Stiftung',
        location: new google.maps.LatLng(50.7020, 7.1346),
        address: 'Godesberger Allee 149, 53175 Bonn, Germany',
        place_id: 'ChIJDzxLyfrjvkcRpTHlbOqjJcY'
      },
      {
        name: 'University and District Library Bonn-Rhein-Sieg',
        location: new google.maps.LatLng(50.7802,  7.1821),
        address: 'Grantham-Allee 20, 53757 Sankt Augustin, Germany',
        place_id: 'ChIJq2OHOEXnvkcR_eSEFv-Ocow'
      },
      {
        name: 'Stadtbibliothek Bonn - Central Library',
        location: new google.maps.LatLng(50.7338, 7.0970),
        address: ' (Haus der Bildung), Mülheimer Pl. 1, 53111 Bonn, Germany',
        place_id: 'ChIJa_vr5aHhvkcRXUx3kj7n6XU'
      },
    ]

    shop = [
      {
        name: 'Schildergasse',
        location: new google.maps.LatLng(50.935162926, 6.951496194),
        address: 'Schildergasse, 50667 Köln, Germany',
        place_id: 'ChIJKSLrhK4lv0cRB5CRuSH0Rr8'
      },
      {
        name: 'Zeil',
        location: new google.maps.LatLng(50.108666232, 8.683497266),
        address: 'Zeil, 60547 Frankfurt am Main, Germany',
        place_id: 'ChIJj_7-laQOvUcRSqO9exFl-SU'
      },
      {
        name: 'Königsallee',
        location: new google.maps.LatLng(	51.222282, 6.779263),
        address: 'Königsallee, Düsseldorf, Germany',
        place_id: 'ChIJJ4K2Bj3KuEcR7JZ_1-86iIE'
      },
    ]

     culture = [
      {
        name: 'Oktoberfest-Zimmerfrei.de',
        location: new google.maps.LatLng(48.125499498 , 11.542831162),
        address: 'Maistraße 10, 80337 München, Germany',
        place_id: 'ChIJqX2wzVvfnUcR29qh-tEQst4'
      },
    ]

    var arrays = {}
    arrays[$('#landmarks').val()] = landmarks;
    arrays[$('#eat').val()] = eat;
    arrays[$('#study').val()] = study;
    arrays[$('#shop').val()] = shop;
    arrays[$('#culture').val()] = culture;



    var array = arrays[$(this).find(':selected').val()];
    if (array === undefined) {
      console.log('invalid input');
      return;
    }


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
