/* globals $, L, mapID: 97eb88b3-5f0f-4acc-9ad3-fdc926b525d6 */

var NPMap = {
  "baseLayers": [
    "esri-topographic",
    "nps-parkTiles"
  ],
  "center": {
    "lat": 37.267495764381856,
    "lng": -118.4381103515625
  },
  "div": "map",
  "homeControl": true,
  "locateControl": false,
  "mapId": "84cc391e-6157-4943-a51b-5429a487e311",
  "maxBounds": [
    [
      35.58138418324621,
      -122.310791015625
    ],
    [
      38.91668153637508,
      -114.5654296875
    ]
  ],
  "maxZoom": 19,
  "measureControl": true,
  "minZoom": 4,
  "overlays": [
    {
      "opacity": 1,
      "table": "trails",
      "type": "cartodb",
      "user": "nps",
      "sql": "SELECT * FROM trails WHERE unit_code='yose'",
      "name": "Yosemite Trails",
      "styles": {
        "stroke": "#d39800",
        "stroke-width": "1",
        "stroke-opacity": "0.8"
      }
    },
    {
      "opacity": 1,
      "table": "trails",
      "type": "cartodb",
      "user": "nps",
      "sql": "SELECT * FROM trails WHERE unit_code='seki'",
      "name": "Sequoia and Kings Canyon Trails",
      "styles": {
        "stroke": "#d39800",
        "stroke-width": "1",
        "stroke-opacity": "0.8"
      }
    },
    {
      "type": "geojson",
      "url": "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/AllCanisterAreas/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson",
      "name": "Canister Area",
      "styles": {
        "polygon": {
          "fill": "#332288",
          "fill-opacity": "0.3",
          "stroke": "#d39800",
          "stroke-width": "3",
          "stroke-opacity": "0.8"
        }
      },
      "popup": {
        "description": "{{canister_a}} Canister Required Area&lt;BR&gt;\n&lt;BR&gt;\n&lt;a href=&quot;{{URL}}&quot; target=&quot;_blank&quot;&gt;More Information&lt;/a&gt;",
        "title": "{{Agency_Nam}} &lt;BR&gt; {{Wilderness}}"
      }
    },
    {
      "type": "geojson",
      "url": "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/John_Muir_Trail/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson",
      "name": "John Muir Trail",
      "styles": {
        "line": {
          "stroke": "#aa4499",
          "stroke-width": "3",
          "stroke-opacity": "0.8"
        }
      },
      "popup": {
        "description": "Agency: {{Agency}}",
        "title": "John Muir Trail"
      }
    }
  ],
  "overviewControl": {
    "layer": "nps-parkTiles"
  },
  "smallzoomControl": true,
  "zoom": 8
};
var s = document.createElement('script');

s.src = 'https://www.nps.gov/lib/npmap.js/3.0.14/npmap-bootstrap.min.js';
document.body.appendChild(s);
