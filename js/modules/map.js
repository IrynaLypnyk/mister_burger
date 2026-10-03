window.initMap = function () {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    let map = new google.maps.Map(mapElement, {
        zoom: 13,
        center: {lat: 50.4673036, lng: 30.5208456},
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
        // Replace the demo ID with a styled map ID from Google Cloud for production.
        mapId: mapElement.dataset.mapId || 'DEMO_MAP_ID'
    });

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
    places.forEach(function (place) {
        const icon = document.createElement('img');
        icon.src = './img/decor/map-marker.png';
        icon.width = 46;
        icon.height = 57;
        icon.alt = '';

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: place.position,
            map: map,
            title: place.contentString
        });
        marker.append(icon);

        // Animate the icon, leaving Google's marker positioning intact.
        let animation;
        icon.addEventListener('mouseenter', function () {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            if (animation) animation.cancel();
            animation = icon.animate([
                {transform: 'translateY(0)'},
                {transform: 'translateY(-15px)', offset: 0.5},
                {transform: 'translateY(0)'}
            ], {duration: 700, iterations: 3, easing: 'ease-in-out'});
        });
    });
};
