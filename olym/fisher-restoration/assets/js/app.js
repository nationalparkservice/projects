/* globals $, L */

var App = {
  'data': [],
  createPopupDescription: function (hexid) {
    var query = $.grep(App.data, function (n, i) {
      return n['Hex ID'] === hexid;
    });
    var ul;
    if (query.length > 0) {
      var yearsSurveyed = [];

      for (var i = 0; i < query.length; i++) {
        yearsSurveyed.push(query[i]['Survey Year']);
      }
      ul = document.createElement('ul');
      var lh = document.createElement('lh');
      lh.innerHTML = 'Survey Results by Year';
      ul.appendChild(lh);

      for (i = 0; i < yearsSurveyed.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.addEventListener('click', function () {
          var resultIndex;
          var popup = NPMap.config.L._popup;
          var fields = [
            '# Fishers Detected',
            'Black Bear',
            'Coyote',
            'Cougar',
            'Bobcat',
            'Spotted Skunk',
            'Weasel'
          ];

          popup._html = popup.getContent();

          for (i = 0; i < query.length; i++) {
            if (query[i]['Survey Year'] === Number(this.innerHTML)) {
              resultIndex = i;
              if (query[i]['# Fishers Detected'] > 0) {
                fields.push('Gender', 'Fisher ID');
              }
            }
          }

          var yearPopupConfig = {
            'title': 'Hex {{"Hex ID"}} {{"Survey Year"}} Survey Results',
            'description': {
              'fields': fields,
              'format': 'table'
            },
            'actions': [{
              'handler': function () {
                popup._back();
              },
              'text': '&#171; Back'
            }]
          };

          popup.setContent(popup._resultToHtml(query[resultIndex], yearPopupConfig)).update();

          if (query[resultIndex]['Fisher Photo']) {
            $('.description tr').each(function () {
              $(this).find('td').each(function () {
                if (this.innerHTML === 'Fisher ID') {
                  var picture = document.createElement('a');
                  this.parentElement.appendChild(picture);
                  picture.innerHTML = ' (Picture)';
                  picture.setAttribute('data-toggle', 'modal');
                  picture.setAttribute('data-target', '#pictureModal');
                  picture.addEventListener('click', function () {
                    var image = document.getElementById('modalImage');
                    image.setAttribute('src', './assets/img/' + query[resultIndex]['Survey Year'] + '-' + query[resultIndex]['Hex ID'] + '.jpg');
                  });
                  this.appendChild(picture);
                  document.getElementById('pictureModalLabel').innerHTML = 'Hex ' + query[resultIndex]['Hex ID'] + ' ' + query[resultIndex]['Survey Year'] + ' Camera Trap Photo';
                }
              });
            });
          }
        });
        a.innerHTML = yearsSurveyed[i];
        li.appendChild(a);
        ul.appendChild(li);
      }
      return ul;
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

  hooks: {
    preinit: function (callback) {
      L.npmap.util._.appendJsFile([
        'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'
      ], function () {
        L.npmap.util._.appendJsFile([
          'http://www.nps.gov/lib/bootstrap/3.3.2/js/nps-bootstrap.min.js'
        ], function () {
          L.npmap.util._.appendCssFile([
            'http://www.nps.gov/lib/bootstrap/3.3.2/css/nps-bootstrap.min.css'
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
  s.src = 'http://www.nps.gov/lib/npmap.js/3.0.12/npmap-bootstrap.min.js';
  document.body.appendChild(s);
})();
