$(function() {
        
        // preloader
        $(window).on('load', function(){
            $('.spinner_hol').fadeIn('fast');
            $('.spinner svg').css('visibility', 'visible');

            function animate() {
                TweenMax.set('.house-icon-line', {drawSVG: 0});
                TweenMax.to('.house-icon-line', 3, {drawSVG: true});
                TweenMax.to('.house-icon-line', 3, {drawSVG: '100% 100%', delay: 3});
            }

            animate();
            setTimeout(function(){
                $('.spinner_hol').fadeOut('slow', function(){
                    $('.spinner svg').css('visibility', 'hidden');
                    
                });
            }, 2000);
        });

        $('#fullpage').fullpage({

            //Navigation
            menu: false,
            lockAnchors: false,
            anchors: ['Home', 'Operations', 'Technology', 'Marketing', 'Servicing', 'Contact-Us'],
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
           
            fixedElements: '.nav-wrapper, .menu, .form-contact, .logo-wrapper',
            responsiveWidth: 768,
            responsiveHeight: 0,
            responsiveSlides: true,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide-2',

            //events
            onLeave: function(index, nextIndex, direction){

                if(index == 2 && nextIndex == 1 ){
                   
                    $('video').get(0).play();
                    $('#fp-nav').css('display', 'none');
                    $('.logo-wrapper').css('display', 'block');
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
                }else{
                    $('.logo-wrapper').css('display', 'none');
                }
                if(index == 2){
                    $('.logo-wrapper').css('display', 'none');
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

                $('#sec-4 .play, #sec-4 .close-video').click(function(){
                    $('#video-sec-4').toggleClass('active');
                });
                
                function submitForm() {
                    var form = $('#recruiting-site-form');
                    var formData = $(form).serialize();

                    if ($('#recruiting-site-form')[0].checkValidity()) {
                        document.getElementById('form-submit').setAttribute('disabled', 'true');
                        $.ajax({
                            type: 'POST',
                            url: '../assets/php-email-services/recruiting-site-email-service.php',
                            data: formData
                        })
                            .done(function(response) {
                                $('#recruiting-site-form')[0].reset();
                                // Make sure that the formMessages div has the 'success' class.

                                setTimeout(function() {
                                    $('.form-contact').addClass('success');
                                    document.getElementById('form-submit').disabled = false;
                                }, 500);

                            })
                            .fail(function(data) {
                                // Make sure that the formMessages div has the 'error' class.
                            });
                    } else {
                        $('#recruiting-site-form :input:visible[required="required"]').each(function() {
                            if (!this.validity.valid) {
                                $(this).focus();
                                return false;
                            }
                        });
                    }
                }

            }
      
        	// scrollOverflow: true,
        	// normalScrollElements: '.history-block'
        });
    // } //end of mobile check
});

