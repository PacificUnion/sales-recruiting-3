
$(function() {
    // ios8 test
    var isIOS8 = function() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
    }

    if( isIOS8() == true ){
        $('.spinner_hol').css('display', 'none');
    }
});


var bgVideoOptions = {
    version: 'v1',
    autoPlay: true,
    controlsVisibleOnLoad: false,
    fullscreenButton: false,
    playbar: false,
    playButton: false,
    volumeControl: false,
    volume: 0,
    settingsControl: false,
    endVideoBehavior: 'loop',
    pauseButton: false,
    playbackRateControl: false,
    smallPlayButton: false,
    qualityMax: 720,
    plugin: {
       cropFill: {
            src: '//fast.wistia.com/labs/crop-fill/plugin.js'
        }
    }
}

window._wq = window._wq || [];

_wq.push({ 
    id: 'po4lpneq0t', //our-people-Loop
    onReady: function(video1) {
        video1.play();
    },
    options: bgVideoOptions
});

$(function() {

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
           
            fixedElements: '.nav-wrapper, .menu, .form-contact, .logo-wrapper, .video-overlay',
            responsiveWidth: 768,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide-2',

            //events
            onLeave: function(index, nextIndex, direction){

                if(index == 2 && nextIndex == 1 ){
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

           
            afterLoad: function(anchorLink, index){
                if(index == 1 || index >= 11){
               
                }
                if(index == 1 ){
                    $('.local a[href="#Operations"]').addClass('active');
                    $('nav .nav-title a').css('text-shadow', 'none');
                }else{
                    $('.logo-wrapper').css('display', 'none');
                    $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
                }
                if(index == 2){
                    $('.local a[href="#Operations"]').addClass('active');
                    $('.logo-wrapper').css('display', 'none');
                }else{
                    $('.local a[href="#Operations"]').removeClass('active');
                }
                if(index == 3){
                    $('.local a[href="#Technology"]').addClass('active');
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                }else{
                    $('.local a[href="#Technology"]').removeClass('active');
                }
                if(index == 4){
                    $('.local a[href="#Marketing"]').addClass('active');
                }else{
                    $('.local a[href="#Marketing"]').removeClass('active');
                }

                if(index == 5){
                    $('.local a[href="#Servicing"]').addClass('active');
                }else{
                    $('.local a[href="#Servicing"]').removeClass('active');
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

                $('#contact-button, .nav-contact').click(function(){
                    $('.form-contact').addClass('active');
                });
                $('.form-contact .close').click(function(){
                    $('.form-contact').removeClass('active');
                });

                               
            }
      
        	// scrollOverflow: true,
        	// normalScrollElements: '.history-block'
        });
});

