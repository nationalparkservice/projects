/* globals $, L, mapID:  0301fc5d-d3db-4103-be9e-f296f2774a35 */

var data = {
  type: 'Feature',
  geometry: {
    type: 'MultiPoint',
    coordinates: [
     [ -119.35056, 37.713603 ], [ -119.352813, 37.71345 ], [ -119.356108, 37.714691 ], [ -119.355232, 37.715195 ], [ -119.355121, 37.715107 ], [ -119.356284, 37.715345 ], [ -119.355118, 37.715098 ], [ -119.355816, 37.716138 ], [ -119.355215, 37.714997 ], [ -119.355184, 37.71607 ], [ -119.355148, 37.715133 ], [ -119.35467, 37.715603 ], [ -119.3505, 37.712261 ], [ -119.350761, 37.714671 ], [ -119.350589, 37.712386 ], [ -119.350517, 37.712189 ], [ -119.350818, 37.711723 ], [ -119.346929, 37.710566 ], [ -119.346503, 37.70898 ], [ -119.347105, 37.710545 ], [ -119.346425, 37.708981 ], [ -119.347734, 37.715867 ], [ -119.348131, 37.716463 ], [ -119.344274, 37.717333 ], [ -119.34789, 37.716603 ], [ -119.344763, 37.721748 ], [ -119.332013, 37.731228 ], [ -119.331205, 37.737606 ], [ -119.340044, 37.742676 ], [ -119.340536, 37.743009 ], [ -119.338726, 37.752173 ], [ -119.336314, 37.754194 ], [ -119.33859, 37.752302 ], [ -119.334761, 37.757487 ], [ -119.329735, 37.760056 ], [ -119.327767, 37.758022 ], [ -119.32985, 37.760081 ], [ -119.330812, 37.759971 ], [ -119.305599, 37.754827 ], [ -119.307765, 37.755469 ], [ -119.308152, 37.755497 ], [ -119.313089, 37.757464 ], [ -119.306132, 37.754681 ], [ -119.305027, 37.754567 ], [ -119.309827, 37.756348 ], [ -119.320852, 37.756176 ], [ -119.319614, 37.756273 ], [ -119.316373, 37.757472 ], [ -119.310876, 37.756165 ], [ -119.315727, 37.7578 ], [ -119.308268, 37.755784 ], [ -119.315357, 37.75751 ], [ -119.313164, 37.758166 ], [ -119.306863, 37.754847 ], [ -119.31738, 37.756461 ], [ -119.297187, 37.750999 ], [ -119.29861, 37.748141 ], [ -119.295813, 37.750179 ], [ -119.297788, 37.748923 ], [ -119.302595, 37.746775 ], [ -119.296564, 37.749128 ], [ -119.29671, 37.750494 ], [ -119.289819, 37.749637 ], [ -119.290816, 37.74924 ], [ -119.289264, 37.749405 ], [ -119.289082, 37.749453 ], [ -119.289204, 37.749866 ], [ -119.289351, 37.74752 ], [ -119.294025, 37.760838 ], [ -119.313825, 37.776175 ], [ -119.333855, 37.786702 ], [ -119.343308, 37.792561 ], [ -119.3377, 37.793736 ], [ -119.338572, 37.793809 ], [ -119.337439, 37.793371 ], [ -119.343753, 37.793093 ], [ -119.340741, 37.79309 ], [ -119.342249, 37.792654 ], [ -119.329957, 37.785554 ], [ -119.303745, 37.768515 ], [ -119.293933, 37.760416 ], [ -119.289965, 37.749364 ], [ -119.288796, 37.749189 ], [ -119.290001, 37.749382 ], [ -119.289961, 37.749391 ], [ -119.282843, 37.749295 ], [ -119.288755, 37.749613 ], [ -119.292462, 37.740602 ], [ -119.294622, 37.740857 ], [ -119.295028, 37.739443 ], [ -119.294093, 37.741561 ], [ -119.296207, 37.738348 ], [ -119.294434, 37.737499 ], [ -119.290474, 37.739406 ], [ -119.290954, 37.739694 ], [ -119.285414, 37.729267 ]
    ]
  },
  properties: {
    time: [
      1431846032, 1431889264, 1431932432, 1431975632, 1432018832, 1432062032, 1432105232, 1432148495, 1432191632, 1432234863, 1432278032, 1432321232, 1432364432, 1432407717, 1432450839, 1432494032, 1432537262, 1432666851, 1432710032, 1432753232, 1432796432, 1432839632, 1432882832, 1432926115, 1432969232, 1433012464, 1433055632, 1433098857, 1433142033, 1433185233, 1433228433, 1433271632, 1433314833, 1433358033, 1433401233, 1433444432, 1433487663, 1433530832, 1433617232, 1433660432, 1433703632, 1433746832, 
1433790032, 1433833232, 1433876432, 1433919633, 1433962832, 1434006032, 1434049232, 1434092432, 1434135633, 1434178833, 1434265232, 1434308432, 1434351632, 1434394851, 1434438032, 1434481232, 1434524432, 1434567633, 1434610832, 1434654032, 1434697232, 1434740435, 1434783632, 1434826862, 1434870033, 1434913233, 1434956457, 1434999747, 1435042832, 1435086123, 1435129233, 1435172443, 1435215633, 1435258861, 1435302033, 1435345242, 1435388432, 1435431663, 1435474893, 1435518032, 1435561233, 1435604433, 
1435647632, 1435690857, 1435734033, 1435777232, 1435820432, 1435863653, 1435906863, 1435950093, 1435993263, 1436036465, 1436079771, 1436122864
    ]
  }
};
var NPMap = {
  div: 'map',
  baseLayers: [
    'mapbox-outdoors'
  ],
  center: {
    lat: 37.744275,
    lng: -119.330004
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
        $('div.leaflet-bottom.leaflet-left').prepend('<p><b>EWE S375: 5/17/2015 to 7/5/2015</b></p>');
      });
      callback();
    }
  },
  
  plugins: [{
    js: 'https://www.nps.gov/npmap/dev/yose/sierra-nevada-bighorn-sheep/assets/libs/LeafletPlayback.min.js'
  }, {
    js: 'https://code.jquery.com/jquery-1.11.0.min.js'
  }],
  zoom: 13,
  maxZoom: 15
};
var s = document.createElement('script');

s.src = 'https://www.nps.gov/lib/npmap.js/3.0.8/npmap-bootstrap.min.js';
document.body.appendChild(s);
