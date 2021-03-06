
    ymaps.ready(init);
  
    var map;
    var points = [{"coordinate":[53.91325807066843,27.575569957672087],"dataCenter":"center-1","placeName":"пр-т Машерова, 10-306"},
    {"coordinate":[53.93953407061931,27.601338999999914],"dataCenter":"center-2","placeName":"ул. Мележа, 1-533, Бизнес-центр 'Парус'"},
    {"coordinate":[53.91090204799343,27.58559706057408],"dataCenter":"center-3","placeName":"ул. Смолячкова, 9-430"},
    {"coordinate":[53.905716905988484,27.447935228836048],"dataCenter":"center-4","placeName":"ул. Притыцкого, 87"},
    {"coordinate":[54.00522057058388,27.680992499999977],"dataCenter":"center-5","placeName":"а/г Лесной, д. 19В, к.8"},
    {"coordinate":[53.851091570712605,27.48352499999999],"dataCenter":"center-6","placeName":"ул. Ежи Гедройца, 20-310Б(Школа №9)"},
    {"coordinate":[53.89125307067017,27.423553499999993],"dataCenter":"center-7","placeName":"ул. Лобанка, 84, 2-ой этаж, левое крыло (Школа №175)"},
    {"coordinate":[53.89617757065368,27.44082799999999],"dataCenter":"center-8","placeName":"ул. Одинцова, 89-27А (Гимназия №20)"},
    {"coordinate":[53.92992907065294,27.50814750000001],"dataCenter":"center-9","placeName":"ул. Орловская, 86, корпус 3"},
]

    function init() {
        const pointsCollection = new ymaps.GeoObjectCollection();
  
        map = new ymaps.Map('map-main', {
            center: [53.90930838, 27.57423705],
            zoom: 13,
            controls: []
        });
     
        map.behaviors.disable('scrollZoom');

        var zoomControl = new ymaps.control.ZoomControl({
        
        });

        map.controls.add(zoomControl);


        var fullscreenControl = new ymaps.control.FullscreenControl({
         
        })

        // Фикс
        fullscreenControl.events.add('click', function (event) {
            event.callMethod('preventDefault');
        });

        map.controls.add(fullscreenControl);

        var imageHref = '../static/images/icons/placemark.svg'
        for (var i = 0; i < points.length; i++) {
            var placemarks = new ymaps.Placemark(points[i].coordinate, {
                dataPlace: points[i].dataCenter,
                hintContent: points[i].placeName
            }, {
                iconLayout: 'default#image',
                iconImageHref: imageHref,
                iconImageSize: [16, 23]
            });

            pointsCollection.add(placemarks);
        }
      
        map.geoObjects.add(pointsCollection);
        map.setBounds(map.geoObjects.getBounds(), {zoomMargin:50});


        pointsCollection.events.add('click', activatePlacemark);
        $(document).on('click', '.map-accordion__link', activateAccordion);

        function activatePlacemark(e, dataPlace, accordioTargetLink) {
            var activeObject,
                dataPlace2;

            if (e !== false) {
                activeObject = e.get('target');
            }

            pointsCollection.each(function (geoObject) {
                geoObject.options.set('iconImageHref', '../static/images/icons/placemark.svg');

                if (geoObject.properties.get('dataPlace') === dataPlace) {
                    activeObject = geoObject;
                }
            });

            map.panTo(activeObject.geometry.getCoordinates(), {delay: 0}).then(function () {
                map.setZoom(14);
            });;;
            activeObject.options.set('iconImageHref', '../static/images/icons/placemark-active.svg');
            dataPlace2 = activeObject.properties.get('dataPlace');

            switchAccordion(dataPlace2, accordioTargetLink);
        }

        function activateAccordion(e) {
            e.preventDefault();

            var dataPlace = $(this).data('center');

            activatePlacemark(false, dataPlace, $(this));
        }

        function switchAccordion(dataPlace, targetLink) {

            var activeLink;

            if (typeof targetLink !== 'undefined') {
                activeLink = targetLink;
            }
            else {
                activeLink = $('.map-accordion').find("[data-center='" + dataPlace + "']");
            }

            var activeItem = activeLink.closest('.map-accordion__item'),
                activeItemClass = 'map-accordion__item--active',
                list = activeLink.closest('.map-accordion'),
                dropDown = activeItem.find('.map-accordion__body');

            list.find('.map-accordion__item').not(activeItem).removeClass(activeItemClass);
            list.find('.map-accordion__body').not(dropDown).slideUp(300);

            activeItem.toggleClass(activeItemClass);
            dropDown.slideToggle(300);
           
        }
    }

    // ymaps.ready(init);
    // function init(){
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчанию: «широта, долгота».
    //         // Чтобы не определять координаты центра карты вручную,
    //         // воспользуйтесь инструментом Определение координат.
    //         center: [55.76, 37.64],
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 7
    //     });
    // }