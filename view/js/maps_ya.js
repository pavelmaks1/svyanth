$(document).ready(function() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 6
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([53.2649,34.3606], {
            hintContent: 'Главный отдел оптовых и розничных продаж'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/css/icon_map.png',
            // Размеры метки.
            iconImageSize: [40, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myPlacemark.events.add('click', function (e) {
            var geoObject = e.get('target');
            showLabel(geoObject.label);
        })
        .add('mouseenter', function () {
            $('.map_block .m-a-block').removeClass('active-point').filter(':eq(0)').addClass('active-point');
            myPlacemark.options.set('iconImageHref', '../images/css/icon_map_act.png');
        })
        .add('mouseleave', function () {
            $('.map_block .m-a-block').removeClass('active-point');
            myPlacemark.options.set('iconImageHref', '../images/css/icon_map.png');
        });

        var myPlacemarkWithContent = new ymaps.Placemark([55.6779,37.7794], {
            hintContent: 'Отдел оптовых и розничных продаж'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/css/icon_map.png',
            // Размеры метки.
            iconImageSize: [40, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myPlacemarkWithContent.events.add('click', function (e) {
            var geoObject = e.get('target');
            showLabel(geoObject.label);
        })
        .add('mouseenter', function () {
            $('.map_block .m-a-block').removeClass('active-point').filter(':eq(1)').addClass('active-point');
            myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map_act.png');
        })
        .add('mouseleave', function () {
            $('.map_block .m-a-block').removeClass('active-point');
            myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map.png');
        });

        $(document).click(function(e){
            if (!$(e.target).hasClass('.active-point') && !$(e.target).parents('.active-point').length && !$(e.target).is('ymaps')) {
                $('.active-point').removeClass('active-point');
                myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map.png');
                myPlacemark.options.set('iconImageHref', '../images/css/icon_map.png');
            }
        });

        $('.map_block').on('mouseover', '.m-a-block', function () {
            if ($(this).index() == 1) {
                myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map_act.png');
            }
            else {
                myPlacemark.options.set('iconImageHref', '../images/css/icon_map_act.png');
            }

        })
        .on('mouseout', '.m-a-block', function () {
            if ($(this).index() == 1) {
                myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map.png');
            }
            else {
                myPlacemark.options.set('iconImageHref', '../images/css/icon_map.png');
            }
        })
        .on('click', '.m-a-block', function () {
            $(this).addClass('active-point');
            $(this).siblings().removeClass('active-point');
            if ($(this).index() == 1) {
                myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map_act.png');
                myPlacemark.options.set('iconImageHref', '../images/css/icon_map.png');
            }
            else {
                myPlacemark.options.set('iconImageHref', '../images/css/icon_map_act.png');
                myPlacemarkWithContent.options.set('iconImageHref', '../images/css/icon_map.png');
            }
        });

        var showLabel = function (label) {
            myMap.setCenter([label.lat, label.lng], 16);
        }

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});








































});
