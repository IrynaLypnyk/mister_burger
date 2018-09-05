let map = (function(){
    let init = function(){

        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            //center: {lat: 50.4561854, lng: 30.5434603},
            center: {lat: 50.4679387, lng: 30.5028748},
            scrollwheel: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_LEFT
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            fullscreenControl: true,
            styles: [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers': [{'color': '#444444'}],
                },
                {
                    'featureType': 'administrative.country',
                    'elementType': 'geometry.fill',
                    'stylers': [{'visibility': 'off'}],
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers': [{'color': '#f2f2f2'}],
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': [{'visibility': 'off'}],
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers': [{'saturation': -100},{'lightness': 45}],
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers': [{'visibility': 'simplified'}],
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers': [{'visibility': 'on'}],
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers': [{'visibility': 'off'}],
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': [{'color': '#f9b43b'},{'visibility': 'on'}],
                },
            ],
        });

        let markerpic = {
            url: './img/decor/map-marker.png',
            size: new google.maps.Size(46, 57),
            //origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            //anchor: new google.maps.Point(0, 0),
            // scaledSize: new google.maps.Size(30, 45),
        };

        //let infowindow = new google.maps.InfoWindow();
        var places = [
            {
                position: {lat: 50.4673036, lng: 30.5208456},
                contentString: 'ул.Почайнинская, 16/27',
                content: 'г. Киев, Почайнинская, 16/27'
            },
            {
                position: {lat: 50.4909873, lng: 30.4546762},
                contentString: 'ул.Сырецкая, 25',
                content: 'г. Киев, ул.Сырецкая, 25'
            },
            {
                position: {lat: 50.4760836, lng: 30.531828},
                contentString: 'пр-т Генерала Ватутина, 2т',
                content: 'г. Киев, пр-т Генерала Ватутина, 2т'
            }
        ];
        places.forEach(function(place) {
            var marker = new google.maps.Marker({
                position: place.position,
                icon: markerpic,
                map: map,
                title: place.contentString,
                animation: google.maps.Animation.DROP,
            });
            marker.addListener('mouseover', function() {
               // infoWindow.setContent(place.content);
                //infoWindow.open(map, marker);
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(null);
                }, 2100);
            });
        });
    };

    return{
        init: init
    }
})();

