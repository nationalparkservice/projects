/* globals $, L */

var App = {
  'data': [],
  createPopupDescription: function (hexid) {
    var query = $.grep(App.data, function (n, i) {
      return n['Hex ID'] === hexid;
    });
    var div;
    var ul;

    if (query.length > 0) {
      var yearsSurveyed = [];

      for (var i = 0; i < query.length; i++) {
        yearsSurveyed.push(query[i]['Survey Year']);
      }

      div = document.createElement('div');
      ul = document.createElement('ul');

      div.innerHTML = '<i>Click on a year below to view survey results</i>';
      div.appendChild(ul);

      for (i = 0; i < yearsSurveyed.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.addEventListener('click', function () {
          var resultIndex;
          var popup = NPMap.config.L._popup;
          popup._html = popup.getContent();

          for (i = 0; i < query.length; i++) {
            if (query[i]['Survey Year'] === Number(this.innerHTML)) {
              resultIndex = i;
            }
          }

          var yearPopupConfig = {
            'title': 'Hex {{"Hex ID"}} {{"Survey Year"}} Survey Results',
            'description': function (data) {
              var html;
              var photo;
              var fisherDetails;

              if (data['Fisher Photo']) {
                var image = document.getElementById('modalImage');
                image.setAttribute('src', 'assets/img/' + data['Survey Year'] + '-' + data['Hex ID'] + '.jpg');
                image.setAttribute('alt', 'Camera Station Photo of Fisher');
                document.getElementById('pictureModalLabel').innerHTML = 'Hex ' + data['Hex ID'] + ' ' + data['Survey Year'] + ' Camera Station Photograph';
                photo = '' +
                  '<div><i>Click the image below to view it full size</i></div>' +
                  '<a data-toggle = "modal" data-target = "#pictureModal">' +
                    '<img src = ' + 'assets/img/' + data['Survey Year'] + '-' + data['Hex ID'] + '-thumb.jpg ' +
                      'style="height:200px;max-width:220px !important;" alt="Camera Station Photograph of Fisher">' +
                  '</a>' +
                '';
              } else {
                photo = '';
              }

              if (data['# Fishers Detected'] > 0) {
                fisherDetails = '' +
                  '<tr>' +
                    '<td>Gender</td>' +
                    '<td>' + data['Gender'] + '</td>' +
                  '</tr>' +
                  '<tr>' +
                  '<tr>' +
                    '<td>Fisher ID</td>' +
                    '<td>' + data['Fisher ID'] + '</td>' +
                  '</tr>' +
                  '<tr>' +
                '';
              } else {
                fisherDetails = '';
              }

              html = '' +
                '<div style = "margin-bottom:10px;text-align:center;">' +
                  photo +
                '</div>' +
                '<table>' +
                  '<tbody>' +
                    '<tr>' +
                      '<td># Fishers Detected</td>' +
                      '<td>' + data['# Fishers Detected'] + '</td>' +
                    '</tr>' +
                    fisherDetails +
                    '<tr>' +
                      '<td>Other Species Detected</td>' +
                      '<td>' + (data['Other Species'] ? data['Other Species'] : 'None') + '</td>' +
                    '</tr>' +
                  '</tbody>' +
                '</table>' +
              '';
              return html;
            },
            'actions': [{
              'handler': function () {
                popup._back();
              },
              'text': '&#171; Back'
            }]
          };
          popup.setContent(popup._resultToHtml(query[resultIndex], yearPopupConfig)).update();
        });
        a.innerHTML = yearsSurveyed[i];
        li.appendChild(a);
        ul.appendChild(li);
      }

      return div;
    } else {
      return 'Not surveyed';
    }
  }
};

var NPMap = {
  baseLayers: [
    'nps-parkTiles',
    'nps-parkTilesImagery',
    'nps-parkTilesSlate'
  ],
  center: {
    lat: 47.5830,
    lng: -123.4561
  },
  description: '2013-2014 Results of Fisher Camera Trap Surveys',
  div: 'map',
  fullscreenControl: true,
  hooks: {
    preinit: function (callback) {
      L.npmap.util._.appendJsFile([
        'https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'
      ], function () {
        L.npmap.util._.appendJsFile([
          'https://www.nps.gov/lib/bootstrap/3.3.2/js/nps-bootstrap.min.js'
        ], function () {
          L.npmap.util._.appendCssFile([
            'https://www.nps.gov/lib/bootstrap/3.3.2/css/nps-bootstrap.min.css'
          ], function () {
            $.getJSON('data/data.json', function (json) {
              $.each(json, function (key, val) {
                App.data = json;
              });
            });
          });
        });
      });
      callback();
    }
  },
  infoboxControl: true,
  legendControl: {
    html: '' +
      '<h3>Legend</h3>' +
        '<img src="assets/img/legend.svg" width="200" alt="Map Legend">' +
      '',
    position: 'bottomright'
  },
  maxBounds: [
    [45.310, -127.225],
    [49.499, -120.552]
  ],
  minZoom: 9,
  overlays: [{
    popup: {
      title: 'Hex ID: {{hexid}}',
      description: function (data) {
        return App.createPopupDescription(data.hexid);
      }
    },
    styles: {
      polygon: function (data) {
        if (data.fisher === true) {
          return {
            'fill': '#d39800',
            'fill-opacity': 0.2,
            'stroke': '#d39800',
            'stroke-opacity': 1,
            'stroke-width': 0.5
          };
        } else if (data.fisher === false && data.surveyed === true) {
          return {
            'fill': '#ff0000',
            'fill-opacity': 0.2,
            'stroke': '#d39800',
            'stroke-opacity': 1,
            'stroke-width': 0.5
          };
        } else {
          return {
            'fill': 'transparent',
            'stroke': '#d39800',
            'stroke-opacity': 1,
            'stroke-width': 0.5
          };
        }
      }
    },
    tooltip: 'Hex ID: {{hexid}}',
    type: 'geojson',
    url: 'data/hex-grid.geojson'
  }],
  title: 'Olympic National Park Fisher Surveys',
  zoom: 9
};

(function () {
  var s = document.createElement('script');
  s.src = 'https://www.nps.gov/lib/npmap.js/3.0.15/npmap-bootstrap.min.js';
  document.body.appendChild(s);
})();
