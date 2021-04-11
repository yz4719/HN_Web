// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nLXFyaSIsImEiOiJjazZncWRkZGowb3kyM25vZXkwbms2cW0xIn0.lbwola6y7YDdaKLMdjif1g';

// set central points and z-level
var initialCenterPoint = [-105.3414953, 37.1341374]
var initialZoom = 2.5

// a helper function for Lookup for looking up all the provinces and their status quo
var nameLookup = (code) => {
  switch (code) {
    //>10,000
    case 1:
      return {
        color: '#8B3626',
          description: 'New York',
      };
      //1,000-9,999
    case 2:
      return {
        color: '#CD4F39',
          description: 'Washington',
      };
    case 3:
      return {
        color: '#CD4F39',
          description: 'California',
      };
    case 4:
      return {
        color: '#CD4F39',
          description: 'New Jersey',
      };

      //500-999
    case 5:
      return {
        color: '#EE5C42',
          description: 'Michigan',
      };
    case 6:
      return {
        color: '#EE5C42',
          description: 'Florida',
      };
    case 7:
      return {
        color: '#EE5C42',
          description: 'Louisiana',
      };
    case 8:
      return {
        color: '#EE5C42',
          description: 'Illinois',
      };
    case 9:
      return {
        color: '#EE5C42',
          description: 'Georgia',
      };
    case 10:
      return {
        color: '#EE5C42',
          description: 'Texas',
      };
    case 11:
      return {
        color: '#EE5C42',
          description: 'Massachusetts',
      };

      //100-499
    case 12:
      return {
        color: '#FF6347',
          description: 'Colorado',
      };
    case 13:
      return {
        color: '#FF6347',
          description: 'Pennsylvania',
      };
    case 14:
      return {
        color: '#FF6347',
          description: 'Tennessee',
      };
    case 15:
      return {
        color: '#FF6347',
          description: 'Wisconsin',
      };
    case 16:
      return {
        color: '#FF6347',
          description: 'North Carolina',
      };
    case 17:
      return {
        color: '#FF6347',
          description: 'Ohio',
      };
    case 18:
      return {
        color: '#FF6347',
          description: 'Connecticut',
      };
    case 19:
      return {
        color: '#FF6347',
          description: 'Maryland',
      };

    case 20:
      return {
        color: '#FF6347',
          description: 'South Carolina',
      };
    case 21:
      return {
        color: '#FF6347',
          description: 'Virginia',
      };
    case 22:
      return {
        color: '#FF6347',
          description: 'Nevada',
      };
    case 23:
      return {
        color: '#FF6347',
          description: 'Mississippi',
      };
    case 24:
      return {
        color: '#FF6347',
          description: 'Oregon',
      };
    case 25:
      return {
        color: '#FF6347',
          description: 'Minnesota',
      };
    case 26:
      return {
        color: '#FF6347',
          description: 'Utah',
      };
    case 27:
      return {
        color: '#FF6347',
          description: 'Alabama',
      };
    case 28:
      return {
        color: '#FF6347',
          description: 'Indiana',
      };
    case 29:
      return {
        color: '#FF6347',
          description: 'Arkansas',
      };
    case 30:
      return {
        color: '#FF6347',
          description: 'Arizona',
      };
      //10-99
    case 31:
      return {
        color: '#fed0c8',
          description: 'Washington, D.C.',
      };
    case 32:
      return {
        color: '#fed0c8',
          description: 'Kentucky',
      };
    case 33:
      return {
        color: '#fed0c8',
          description: 'Missouri',
      };
    case 34:
      return {
        color: '#fed0c8',
          description: 'Iowa',
      };
    case 35:
      return {
        color: '#fed0c8',
          description: 'Maine',
      };
    case 36:
      return {
        color: '#fed0c8',
          description: 'Rhode Island',
      };
    case 37:
      return {
        color: '#fed0c8',
          description: 'New Hampshire',
      };
    case 38:
      return {
        color: '#fed0c8',
          description: 'Kansas',
      };
    case 39:
      return {
        color: '#fed0c8',
          description: 'New Mexico',
      };
    case 40:
      return {
        color: '#fed0c8',
          description: 'Oklahoma',
      };
    case 41:
      return {
        color: '#fed0c8',
          description: 'Vermont',
      };
    case 42:
      return {
        color: '#fed0c8',
          description: 'Hawaii',
      };
    case 43:
      return {
        color: '#fed0c8',
          description: 'Delaware',
      };
    case 44:
      return {
        color: '#fed0c8',
          description: 'Idaho',
      };
    case 45:
      return {
        color: '#fed0c8',
          description: 'Nebraska',
      };
    case 46:
      return {
        color: '#fed0c8',
          description: 'Montana',
      };
    case 47:
      return {
        color: '#fed0c8',
          description: 'North Dakota',
      };
    case 48:
      return {
        color: '#fed0c8',
          description: 'Wyoming',
      };
    case 49:
      return {
        color: '#fed0c8',
          description: 'Puerto Rico',
      };
    case 50:
      return {
        color: '#fed0c8',
          description: 'Guam',
      };
    case 51:
      return {
        color: '#fed0c8',
          description: 'South Dakota',
      };
    case 52:
      return {
        color: '#fed0c8',
          description: 'Alaska',
      };
    case 53:
      return {
        color: '#fed0c8',
          description: 'West Virginia',
      };


    default:
      return {
        color: '#CD3700',
          description: 'other',
      };
  }
};

var defaultText = '<p> Get more inormation about the statistics of each state. </p>'
$('#feature-info').html(defaultText)

var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// wait for the initial style to Load
map.on('style.load', function() {

  // add a geojson source to the map using our external geojson file
  map.addSource('Yimusanfendi', {
    type: 'geojson',
    data: './usa.geojson',
  });

  // let's make sure the source got added by logging the current map state to the console
  console.log(map.getStyle().sources)

  // add  layer for filling different provinces
  map.addLayer({
    id: 'fill-map-province',
    type: 'fill',
    source: 'Yimusanfendi',
    paint: {
      'fill-color': {
        type: 'categorical',
        property: 'NAME',
        stops: [
          [
            'New York',
            nameLookup(1).color,
          ],
          [
            'Washington',
            nameLookup(2).color,
          ],
          [
            'California',
            nameLookup(3).color,
          ],
          [
            'New Jersey',
            nameLookup(4).color,
          ],
          [
            'Michigan',
            nameLookup(5).color,
          ],
          [
            'Florida',
            nameLookup(6).color,
          ],
          [
            'Louisiana',
            nameLookup(7).color,
          ],
          [
            'Illinois',
            nameLookup(8).color,
          ],
          [
            'Georgia',
            nameLookup(9).color,
          ],
          [
            'Texas',
            nameLookup(10).color,
          ],
          [
            'Massachusetts',
            nameLookup(11).color,
          ],
          [
            'Colorado',
            nameLookup(12).color,
          ],
          [
            'Pennsylvania',
            nameLookup(13).color,
          ],
          [
            'Tennessee',
            nameLookup(14).color,
          ],
          [
            'Wisconsin',
            nameLookup(15).color,
          ],
          [
            'North Carolina',
            nameLookup(16).color,
          ],
          [
            'Ohio',
            nameLookup(17).color,
          ],
          [
            'Connecticut',
            nameLookup(18).color,
          ],
          [
            'Maryland',
            nameLookup(19).color,
          ],
          [
            'South Carolina',
            nameLookup(20).color,
          ],
          [
            'Virginia',
            nameLookup(21).color,
          ],
          [
            'Nevada',
            nameLookup(22).color,
          ],
          [
            'Mississippi',
            nameLookup(23).color,
          ],
          [
            'Oregon',
            nameLookup(24).color,
          ],
          [
            'Minnesota',
            nameLookup(25).color,
          ],
          [
            'Utah',
            nameLookup(26).color,
          ],
          [
            'Alabama',
            nameLookup(27).color,
          ],
          [
            'Indiana',
            nameLookup(28).color,
          ],
          [
            'Arkansas',
            nameLookup(29).color,
          ],
          [
            'Arizona',
            nameLookup(30).color,
          ],
          [
            'Washington, D.C.',
            nameLookup(31).color,
          ],
          [
            'Kentucky',
            nameLookup(32).color,
          ],
          [
            'Missouri',
            nameLookup(33).color,
          ],
          [
            'Iowa',
            nameLookup(34).color,
          ],
          [
            'Maine',
            nameLookup(35).color,
          ],
          [
            'Rhode Island',
            nameLookup(36).color,
          ],
          [
            'New Hampshire',
            nameLookup(37).color,
          ],
          [
            'Kansas',
            nameLookup(38).color,
          ],
          [
            'New Mexico',
            nameLookup(39).color,
          ],
          [
            'Oklahoma',
            nameLookup(40).color,
          ],
          [
            'Vermont',
            nameLookup(41).color,
          ],
          [
            'Hawaii',
            nameLookup(42).color,
          ],
          [
            'Delaware',
            nameLookup(43).color,
          ],
          [
            'Idaho',
            nameLookup(44).color,
          ],
          [
            'Nebraska',
            nameLookup(45).color,
          ],
          [
            'Montana',
            nameLookup(46).color,
          ],
          [
            'North Dakota',
            nameLookup(47).color,
          ],
          [
            'Wyoming',
            nameLookup(48).color,
          ],
          [
            'Puerto Rico',
            nameLookup(49).color,
          ],
          [
            'Guam',
            nameLookup(50).color,
          ],
          [
            'South Dakota',
            nameLookup(51).color,
          ],
          [
            'Alaska',
            nameLookup(52).color,
          ],
          [
            'West Virginia',
            nameLookup(53).color,
          ],
        ]
      }
    }
  });

  // add a layer for provincal borders
  map.addLayer({
    id: 'line-map-province',
    type: 'line',
    source: 'Yimusanfendi',
    before: ['fill-map-province'],
    //  layout: {
    //    'visibility': 'visible',
    //    'line-join': 'round',
    //    'line-cap': 'round'
    //      },
    paint: {
      'line-color': 'white',
      'line-width': 1,
    }
  });

  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });

  map.addLayer({
    id: 'highlight-line',
    type: 'line',
    source: 'highlight-feature',
    paint: {
      'line-width': 6,
      'line-color': 'lightblue',
    }
  });

  // listen for the mouse moving over the map and react when the cursor is over our data

  map.on('mousemove', function(e) {
    // query for the features under the mouse, but only in the lots layer
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['fill-map-province'],
    });

    // if the mouse pointer is over a feature on our layer of interest
    // take the data for that feature and display it in the sidebar
    if (features.length > 0) {
      map.getCanvas().style.cursor = 'pointer'; // make the cursor a pointer

      var hoveredFeature = features[0]
      var featureInfo = `
        <h4>${hoveredFeature.properties.NAME}</h4>
        <p><strong>Total Confirmed Cases:</strong> ${hoveredFeature.properties.TCC}</p>
        <p><strong>Dead Cases:</strong> ${hoveredFeature.properties.CC}</p>
      `
      $('#feature-info').html(featureInfo)

      // set this lot's polygon feature as the data for the highlight source
      map.getSource('highlight-feature').setData(hoveredFeature.geometry);
    } else {
      // if there is no feature under the mouse, reset things:
      map.getCanvas().style.cursor = 'default'; // make the cursor default

      // reset the highlight source to an empty featurecollection
      map.getSource('highlight-feature').setData({
        type: 'FeatureCollection',
        features: []
      });

      // reset the default message
      $('#feature-info').html(defaultText)
    }
  })

})
