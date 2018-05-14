$(document).ready(function() {
    //Работа блока поиск
    $('.bottom_header .user_block .search_block').click(function(){
        $('.bottom_header .user_block .search_block form').fadeToggle(300);
        $('.shadow').fadeToggle(300);
    });
    $('.bottom_header .user_block .search_block form .close').click(function(){
        $('.bottom_header .user_block .search_block form').fadeOut(300);
        $('.shadow').fadeOut(300);
    });
     $('.bottom_header .user_block .search_block form').click(function(e) {
        e.stopImmediatePropagation();
     });

    /*Меню*/
  $('.navbar-toggle').click(function () {
    $('.navbar-toggle').toggleClass('active');
    $('.menu-categories').slideToggle();
    // $('.categories-sublist').hide();
    $('.categories-item').each(function (item) {
      $(this).children('a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggleClass('display');
      })
    });
    $('.category-item').each(function (item) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).children('ul').toggleClass('display');
      })
    })


  });

	$('.page_product .views_catalog .add_basked').removeAttr('href');
	
    //Кнопка на верх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*Мини слайдера*/

    $('.slider_photo').bxSlider({
        pager: false,
        auto: true,
        autoHover: false,
        pause: 3000
    });

    var w = $(window).width();
    if (w > 1200) {
        /*При навидении на ров новости всплывает инфо*/
        var img = $('.views_news .row .photo_news img').height();
        var m = 60;
        var b_h = img + m;
        $('.views_news .row .content_row').hover(
            // Hover
            function(){
                $(this).css('height', b_h + "px");
                $(this).css('margin-top', "-" + img + "px");
            },
            // Unhover
            function(){
                $(this).css('height', '60px');
                $(this).css('margin-top', "0");
            }
        );

        /*При навидении на ров Магазина всплывает инфо*/
        var imgs = $('.our_score .content_score .row .photo_score img').height();
        var ms = 44;
        var b_hs = imgs + ms;
        $('.our_score .content_score .row .adress').hover(
            // Hover
            function(){
                $(this).parent().find('.adress').css('height', b_hs + "px");
                $(this).parent().find('.adress').css('margin-top', "-" + imgs + "px");
            },
            // Unhover
            function(){
                $(this).parent().find('.adress').css('height', '44px');
                $(this).parent().find('.adress').css('margin-top', "0");
            }
        );

    }

    /*Работа меню в сайт баре*/
    $('.bar_menu li span.top_link').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.second_level').toggle(50, function(){
            setTimeout(function(){
                setMenuPosition();
            });
        });
    });
    $('.bar_menu li span.second_link').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.three_level').toggle(50, function(){
            setTimeout(function(){
                setMenuPosition();
            });
        });
    });
    var expanded = true;
	$('.category_aside .bar_menu li span.tl.top_link').click(function(){
        var $el = $(this).parents('.block_inside');

        if (expanded) {
            expanded = false;
            $el.find('.views_catalog, .views_gallery').removeClass('five_grid');
            $el.find('.views_catalog, .views_gallery').addClass('full_grid');
            $el.find('.page_product').addClass('full_width');
        }
        else {
            expanded = 1;
            $el.find('.views_catalog, .views_gallery').addClass('five_grid');
            $el.find('.views_catalog, .views_gallery').removeClass('full_grid');
            $el.find('.page_product').removeClass('full_width');

        }
	});




    $('.sort select').sSelect();

    /*Всплывашка написать нам*/
    $('.map_block .write, .node .send_messenge').click(function(){
        var a = $('.fixed_line').offset();
        $('.content_form').css('top', a.top + 'px');
        $('.shadow_form').fadeIn(500);
        $('.content_form').fadeIn(500);
    });
    $('.page_product .views_catalog .add_basked').click(function(){
        var a = $('.fixed_line').offset();
        $('.block_add_basked').css('top', a.top + 'px');
        $('.shadow_form').fadeIn(500);
        $('.block_add_basked').fadeIn(500);
    });
    $('.product_page .info_product .product_link').click(function(){
        var a = $('.fixed_line').offset();
        $('.size_pab').css('top', a.top + 'px');
        $('.shadow_form').fadeIn(500);
        $('.size_pab').fadeIn(500);
    });		
	
    $('.content_form .form_vn .close, .shadow_form, .block_add_basked .close, .size_pab .close').click(function(){
        $('.shadow_form').fadeOut(500);
        $('.content_form, .block_add_basked, .size_pab').fadeOut(500);
    });
    $('.content_form .form_vn, .block_add_basked .inside_add').click(function(e) {
        e.stopImmediatePropagation();
    });

    /*Табы Мои заказы*/
    $('.lk_page .nav_order .link span.one').click(function(){
        $('.lk_page .nav_order .link span').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.table_conteiner').css('display', 'none');
        $(this).parent().parent().parent().find('.table_conteiner.one').css('display', 'block');
    });
    $('.lk_page .nav_order .link span.second').click(function(){
        $('.lk_page .nav_order .link span').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.table_conteiner').css('display', 'none');
        $(this).parent().parent().parent().find('.table_conteiner.second').css('display', 'block');
    });
    $('.lk_page .nav_order .link span.three').click(function(){
        $('.lk_page .nav_order .link span').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.table_conteiner').css('display', 'none');
        $(this).parent().parent().parent().find('.table_conteiner.three').css('display', 'block');
    });

	 /*Переключалка типа пользователя*/
	 $('.order_button div').click(function(){
		$(this).parent().parent().find('.form_block_order').show('300', function(){
            ftop = $('#footer').offset().top;
            setMenuPosition();
        });
	 });

	$('.form_block_order .type_pay .radio.fiz').click(function(){
		$(this).parent().parent().find('.right_grup').removeClass('ip');
		$(this).parent().parent().find('.right_grup').removeClass('ooo');
		$(this).parent().parent().find('.right_grup').addClass('fiz');
	});
	$('.form_block_order .type_pay .radio.ip').click(function(){
		$(this).parent().parent().find('.right_grup').removeClass('fiz');
		$(this).parent().parent().find('.right_grup').removeClass('ooo');
		$(this).parent().parent().find('.right_grup').addClass('ip');
	});
	$('.form_block_order .type_pay .radio.ooo').click(function(){
		$(this).parent().parent().find('.right_grup').removeClass('ip');
		$(this).parent().parent().find('.right_grup').removeClass('fiz');
		$(this).parent().parent().find('.right_grup').addClass('ooo');
	});

    /*Фотобокс*/
     $('.gallery_franchising, .gallery .content_gallery, .views_gallery').photobox('a',{ time:0 });
    $('.article_content').photobox('.row > a',{ time:0 });




    /*Слайдер продукта*/
    $('.photo_product .image_product').each(function(i){
        var $parent = $(this).parents('.photo_product'),
            $pager = $parent.find('#pager');
        $pager.addClass('c-pager-' + i);

        $pager.on('mouseenter', 'a', function(){
            var $self = $(this);
            if ($pager.data('clicked')) {
                clearTimeout($pager.data('clicked'));
            }
            $pager.data('clicked', setTimeout(function(){
                $self.trigger('click');
            }, 200))
        });
        var $self = $(this);
        $self.bxSlider({
            pagerCustom: '.c-pager-' + i,
            onSlideAfter: function($slideElement){

                $self.find('.imag_box a').attr('href', $slideElement.find('img').attr('src'));
            },
            onSliderLoad: function(){

                $parent.find('.image_product').photobox('a',{ time:0 });
            }
        });

        $parent.find('.imag_box').click(function(){
            $parent.find('.row_s[aria-hidden="false"]')[0].click();
			console.log($parent.find('.row_s[aria-hidden="false"]'));
            return false;
        });
    });

    // $('.imag_box').on('click', function(){
    //     var $parent = $(this).parents();
    // });


    /*Работа кнопок +-*/
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    /*Стилизация карты*/
    /*Делаем метки*/

    /*Работа фильтров - сворачивание*/
    /*Работа меню в сайт баре*/
    $('.filter_block .filter_grup .filter .t_f').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.content_item, .remnants').toggle(200);
    });
    $('.filter_grup .title_filter').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.cotent_filter').toggle(200);
    });
    $('.filter_block .filter_grup .title_filter .clear').click(function(e) {
        e.stopImmediatePropagation();
    });

	$('.filter_block .apply').click(function(){
		 $(this).toggleClass('active');
		 $(this).parent().parent().parent().find('.views_catalog').toggleClass('show_size');

	});

	/*Табы*/
    $('.content_desc .tabs_node .tabs').click(function(){
        if($(this).hasClass('active'))
            return false;
        var tabs = $(this).parents('.tabs_node'),
            rep = $(this).attr('class').replace('tabs ','');
        tabs.find('.active').removeClass('active');
        tabs.siblings().hide();
        $(this).addClass('active').parents('.content_desc').children('.block_'+rep).show();
    });

    // Для полосы меню http://prntscr.com/h9tayq, нужно сделать такой эффект https://codepen.io/anon/pen/qbqBxy
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st == 0 || st <= 290){
            $('#main-menu').removeClass('fixed');
            $('#main-menu').removeClass('scolled-down');
        }
        else {
            if (!$('#main-menu').hasClass('scolled-down')) {
                $('#main-menu').addClass('scolled-down');
                setTimeout(function(){
                    $('#main-menu').addClass('fixed');
                });
            }
        }
        lastScrollTop = st;
    });

    $('#pbCaption').on('mouseenter', '.pbThumbs a', function(){
        $(this).trigger('click');
    });

    // setTimeout(function(){
    //     $('.cursorshade').on('mouseenter', function(){
    //         console.log('over');
    //         $('.main_photo_pr').addClass('active');
    //     });
    //     $('.cursorshade').on('mouseleave', function(){
    //         console.log('leave');
    //         $('.main_photo_pr').removeClass('active');
    //     });
    // }, 1000);

    if ($('.menu_sitebar').length) {

        var mtop = $('.menu_sitebar').offset().top;
        var ftop = $('#footer').offset().top;

        $(window).scroll(function(e){
            var _scrollTop = $(this).scrollTop();
            setMenuPosition(_scrollTop);

        });

        var checked_height = $('#content').height() <= $('.menu_sitebar').height();

        function setMenuPosition(_scrollTop) {
            if (checked_height) {
                return false;
            }
            if (!expanded) {
                $('.menu_sitebar').removeClass('side-fixed');
                return;
            }
            _scrollTop = _scrollTop || $(window).scrollTop();

            // console.log(_scrollTop, $('.menu_sitebar').height(), ftop, $('.menu_sitebar').hasClass('side-fixed'));

            if (_scrollTop + $('.menu_sitebar').height() >= ftop && $('.menu_sitebar').hasClass('side-fixed')) {
                $('.menu_sitebar').addClass('side-to-footer');
                $('.menu_sitebar').css('top', (ftop - $('.menu_sitebar').height()) + 'px');
            }
            else if (_scrollTop >= mtop) {
                $('.menu_sitebar').addClass('side-fixed');
                $('.menu_sitebar').removeClass('side-to-footer');
                $('.menu_sitebar').css('top', '0');
            }
            else {
                $('.menu_sitebar').removeClass('side-fixed');
                $('.menu_sitebar').removeClass('side-to-footer');
                $('.menu_sitebar').css('top', '74px');
            }
        }

        setTimeout(function(){
            setMenuPosition();
        });
    }


    if ($(".slide_price").length) {

        var slider_min = 0;
        var slider_max = 1000;
        var slider_selected_min = 241;
        var slider_selected_max = 659;

        $(".slide_price").slider({
            range: true,
            min: slider_min,
            max: slider_max,
            values: [slider_selected_min, slider_selected_max],
            slide: function(event, ui) {
                $('#minCost').val(ui.values[0]);
                $('#maxCost').val(ui.values[1]);
            }
        });

        $('#minCost').val($(".slide_price").slider("values", 0));
        $('#maxCost').val($(".slide_price").slider("values", 1));

        var prev_min_value = slider_selected_min;
        $('#minCost').on('input', function(e){
            if (!/^[0-9]+$/.test($(this).val())) {
                if ($(this).val() == '' || $(this).val() < 0) {
                    prev_min_value = '0';
                }

                $(this).val(prev_min_value);
            }
            if (parseInt($(this).val()) > slider_max) {
                prev_min_value = slider_max - 1;
                $(this).val(prev_min_value);
            }
            prev_min_value = $(this).val();
            $(".slide_price").slider( "values", 0, prev_min_value);

        });

        var prev_max_value = slider_selected_max;
        $('#maxCost').on('input', function(e){
            if (!/^[0-9]+$/.test($(this).val())) {
                if ($(this).val() == '') {
                    prev_max_value = '1';
                }

                $(this).val(prev_max_value);
            }
            if ($(this).val() <= '0') {
                prev_max_value = '1';
                $(this).val(prev_max_value);
            }
            if (parseInt($(this).val()) > slider_max) {
                prev_max_value = slider_max;
                $(this).val(prev_max_value);
            }
            prev_max_value = $(this).val();
            $(".slide_price").slider( "values", 1, prev_max_value);

        });
    }
});
