/* globals $, L, mapID: 97eb88b3-5f0f-4acc-9ad3-fdc926b525d6 */

var data = {
  type: 'Feature',
  geometry: {
    type: 'MultiPoint',
    coordinates: [
      [ -119.323548, 37.778246 ], [ -119.323046, 37.778139 ], [ -119.323105, 37.778047 ], [ -119.322822, 37.778269 ], [ -119.323346, 37.777808 ], [ -119.323704, 37.779667 ], [ -119.325744, 37.779617 ], [ -119.319754, 37.778654 ], [ -119.319089, 37.778172 ], [ -119.319023, 37.778002 ], [ -119.316871, 37.778098 ], [ -119.319357, 37.777905 ], [ -119.316375, 37.777892 ], [ -119.316438, 37.77798 ], [ -119.313576, 37.777 ], [ -119.31509, 37.7778 ], [ -119.319514, 37.778136 ], [ -119.319401, 37.777931 ], [ -119.319774, 37.777852 ], [ -119.319134, 37.777837 ], [ -119.319018, 37.778182 ], [ -119.316083, 37.777987 ], [ -119.318908, 37.778175 ], [ -119.3205, 37.778703 ], [ -119.320855, 37.777993 ], [ -119.311512, 37.776266 ], [ -119.311039, 37.776068 ], [ -119.313102, 37.776505 ], [ -119.316434, 37.777773 ], [ -119.314801, 37.77749 ], [ -119.316253, 37.777741 ], [ -119.312829, 37.779484 ], [ -119.316254, 37.777768 ], [ -119.31448, 37.776829 ], [ -119.31644, 37.777953 ], [ -119.31958, 37.777856 ], [ -119.315302, 37.778742 ], [ -119.323996, 37.779868 ], [ -119.321555, 37.777564 ], [ -119.325014, 37.776856 ], [ -119.323057, 37.777057 ], [ -119.326308, 37.778245 ], [ -119.32706, 37.779285 ], [ -119.323525, 37.779733 ], [ -119.316576, 37.77814 ], [ -119.317213, 37.778839 ], [ -119.325938, 37.779019 ], [ -119.326289, 37.778516 ], [ -119.316443, 37.777818 ], [ -119.317621, 37.778642 ], [ -119.319216, 37.778403 ], [ -119.320688, 37.778023 ], [ -119.317502, 37.779059 ], [ -119.309781, 37.775741 ], [ -119.308483, 37.777434 ], [ -119.30995, 37.775864 ], [ -119.309474, 37.778117 ], [ -119.310552, 37.776087 ], [ -119.31422, 37.776826 ], [ -119.316488, 37.778205 ], [ -119.317074, 37.77841 ], [ -119.325023, 37.778992 ], [ -119.324458, 37.779652 ], [ -119.316163, 37.777959 ], [ -119.315626, 37.778141 ], [ -119.314687, 37.777519 ], [ -119.314945, 37.777721 ], [ -119.314875, 37.777768 ], [ -119.313024, 37.776011 ], [ -119.313571, 37.776937 ], [ -119.317545, 37.778571 ], [ -119.319153, 37.778459 ], [ -119.319214, 37.778539 ], [ -119.316269, 37.777822 ], [ -119.316346, 37.777703 ], [ -119.317555, 37.778905 ], [ -119.317115, 37.778265 ], [ -119.316964, 37.779457 ], [ -119.319223, 37.778529 ], [ -119.317293, 37.779748 ], [ -119.317461, 37.779898 ], [ -119.318153, 37.779461 ], [ -119.317159, 37.778381 ], [ -119.317574, 37.779823 ]  
    ]
  },
  properties: {
    time: [
      1447574431, 1447617656, 1447660831, 1447704031, 1447747232, 1447790431, 1447833631, 1447876831, 1447920031, 1447963256, 1448049631, 1448092861, 1448136031, 1448179231, 1448222431, 1448265631, 1448308831, 1448352031, 1448395256, 1448438461, 1448481631, 1448568032, 1448611231, 1448654450, 1448697632, 1448740831, 1448784031, 1448827232, 1448870431, 1448913631, 1448956856, 1449000032, 1449043262, 1449086431, 1449129632, 1449216032, 1449259232, 1449302431, 1449345703, 1449388888, 1449432050, 1449475262, 
1449561632, 1449604831, 1449648032, 1449691232, 1449777735, 1449820831, 1449907232, 1449950431, 1449993692, 1450036917, 1450123233, 1450166431, 1450209631, 1450252875, 1450296087, 1450339231, 1450382431, 1450425632, 1450468831, 1450512031, 1450598547, 1450641631, 1450684831, 1450728062, 1450771262, 1450814461, 1450857639, 1450900832, 1450944062, 1450987232, 1451030456, 1451073631, 1451203231, 1451246432, 1451289646, 1451332831, 1451376031, 1451419231, 1451462431, 1451505636, 1451548850, 1451592031
    ]
  }
};
var NPMap = {
  div: 'map',
  baseLayers: [
    'mapbox-outdoors'
  ],
  center: {
    lat: 37.777965,
    lng: -119.317799
  },
  fullscreenControl: true,
  hooks: {
    init: function (callback) {
      L.npmap.util._.appendCssFile('https://www.nps.gov/npmap/dev/yose/sierra-nevada-bighorn-sheep/assets/css/app.css');
      new L.Playback(NPMap.config.L, data, null, {
        dateControl: false,
        marker: {
          icon: L.npmap.icon.maki({
            'marker-color': '#ffa448',
            'marker-size': 'medium',
            'marker-symbol': 'circle-stroked'
          })
        },
        playControl: true,
        sliderControl: true,
        tickLen: 3000
      });
      $(document).ready(function () {
        $('div.leaflet-bottom.leaflet-left').prepend('<p><b>EWE S375: 11/15/2015 to 12/31/2015</b></p>');
      });
      callback();
    }
  },
  
  plugins: [{
    js: 'https://www.nps.gov/npmap/dev/yose/sierra-nevada-bighorn-sheep/assets/libs/LeafletPlayback.min.js'
  }, {
    js: 'https://code.jquery.com/jquery-1.11.0.min.js'
  }],
  zoom: 14,
  maxZoom: 15
};
var s = document.createElement('script');

s.src = 'https://www.nps.gov/lib/npmap.js/3.0.14/npmap-bootstrap.min.js';
document.body.appendChild(s);
