/* globals $, L, mapID: paste your NPMap ID here!!! */

var data = {
  type: 'Feature',
  geometry: {
    type: 'MultiPoint',
    coordinates: [[long1, lat1], [long2, lat2], ..., [longN, latN]] /* paste your [long, lat] array here */
  },
  properties: {
    time: [timeStamp1, timeStamp2, ..., timeStampN] /* paste your timestamp array here */
  }
};
var NPMap = {
  div: 'map',
  baseLayers: [
    'mapbox-outdoors'
  ],
  center: {
    lat: 37.720425, /* set center latitude here... */
    lng: -119.372319 /* ...and center longitude here, both in decimal degrees */
  },
  fullscreenControl: true,
  hooks: {
    init: function (callback) {
      L.npmap.util._.appendCssFile('http://www.nps.gov/npmap/dev/yose/sierra-nevada-bighorn-sheep/assets/css/app.css');
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
        $('div.leaflet-bottom.leaflet-left').prepend('<p><b>RAM S295: 3/28/2015 to 5/17/2015</b></p>'); /* set time-slider text here */
      });
      callback();
    }
  },
  
  plugins: [{
    js: 'http://www.nps.gov/npmap/dev/yose/sierra-nevada-bighorn-sheep/assets/libs/LeafletPlayback.min.js'
  }, {
    js: 'https://code.jquery.com/jquery-1.11.0.min.js'
