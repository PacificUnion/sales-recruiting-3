$(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('mobile phone')
    }else{

        $('#fullpage').fullpage({

            //Navigation
            menu: false,
            lockAnchors: false,
            anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            navigation: false,
            navigationPosition: 'left',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
           
            fixedElements: '#header, .footer, #navigation, .nav-wrapper, .menu, .form-contact',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide-2',

            //events
            onLeave: function(index, nextIndex, direction){

                if(index == 2 && nextIndex == 1 ){
                   
                    $('video').get(0).play();
                    $('#fp-nav').css('display', 'none'); 

                }

                if(index == 2 && nextIndex == 3  ){
                    $('.block-1').addClass('active'),
                    $('.map-wrapper').addClass('active');
                }

                if(index == 3 && nextIndex != 3  ){
                    $('.block-1').removeClass('active'),
                    $('.map-wrapper').removeClass('active');
                }

                if(index == 10 && nextIndex == 11 ){
                   
                    $('#fp-nav').css('display', 'none'); 

                }

            },

            // $.preloadImages = function() {
            //     for (var i = 0; i < arguments.length; i++) {
            //         $("<img />").attr("src", arguments[i]);
            //     }
            // }
            // $.preloadImages("img/yellowstone-thermal.jpg","img/yosemite-rock.jpg","img/big-bend.jpg","img/canyonlands.jpg","img/grand-canyon-2.jpg","img/grand-teton.jpg","img/great-sand-dunes.jpg","img/hawaii-volcano.jpg","img/redwood-path.jpg","img/roosevelt-sitting.jpg","img/smoky-mountains.jpg");
            afterLoad: function(anchorLink, index){
                if(index == 1 || index >= 11){
               
                }
                if(index == 1 ){
                    $('video').get(0).play();
                }
                if(index == 2){
             
                }
                if(index == 3){
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                }
                if(index == 4){
              
                }
               
            },
           
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
            afterRender: function () {
                $('#nav-icon').click(function(){
                    $(this).toggleClass('open'),
                    $('.menu').toggleClass('active'),
                    $('.nav-local').toggleClass('active');
                });

              
                $('video').get(0).play();

                $('.block-1').click(function(){
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                });
                $('.block-2').click(function(){
                    $('.block-2').addClass('active'),
                    $('.block-1').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').removeClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').addClass('active');

                });
                $('.block-3').click(function(){
                    $('.block-3').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-1').removeClass('active'),
                    $('.map-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active'),
                    $('.achievements-wrapper').addClass('active');
                });

                $('.video-frame-1, #video-testimonial-1 ').click(function(){
                    $('#video-testimonial-1').toggleClass('active');
                });
                $('.video-frame-2, #video-testimonial-2 ').click(function(){
                    $('#video-testimonial-2').toggleClass('active');
                });
                $('.video-frame-3, #video-testimonial-3 ').click(function(){
                    $('#video-testimonial-3').toggleClass('active');
                });

                $('#contact-us').click(function(){
                    $('.form-contact').addClass('active');
                });
                $('.form-contact .close').click(function(){
                    $('.form-contact').removeClass('active');
                });

            }
      
        	// scrollOverflow: true,
        	// normalScrollElements: '.history-block'
        });
    } 
});

