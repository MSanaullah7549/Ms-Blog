

         var map, Marker1;

    function initMap1() {
      map = new mappls.Map('map', {
        center: [25.86, 85.78],
        zoomControl: true,
        location: true
      });
      Marker1 = new mappls.Marker({
        map: map,
        position: {
          "lat": 25.6972,
          "lng": 85.77885
        },
        fitbounds: false,
        icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
      });
    }