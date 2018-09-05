'use strict';

$(function(){
// dot-scroll
    var sections = $('.section'),
        sectionContent = $('.maincontent'),
        inScroll = false;

        var md = new MobileDetect(window.navigator.userAgent),
        isMobile = md.mobile();



    var performTransition = function(sectionEq){

        if(inScroll) return
            inScroll = true;
            var position = (sectionEq * -100) + '%';

            sectionContent.css({
                'transform' : 'translateY(' + position + ')',
             '-webkit-transform' : 'translateY(' + position + ')'
            });

        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');

        setTimeout(function(){
            inScroll = false;
            $('.dot-scroll__item').eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
        }, 800);

    };

var defineSections = function(sections){
    var activeSection = sections.filter('.active');
    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
};

// для мобильных устройств
var scrollToSection = function(direction){
    var section = defineSections(sections);

    if (direction == 'up' && section.nextSection.length){ //  scrollDown
        performTransition(section.nextSection.index());
     }

    if (direction == 'down' && section.prevSection.length){ // scrollUp
         performTransition(section.prevSection.index());       
               
     }

};

$('.wrapper').on({
    wheel: function(e){
        var deltaY = e.originalEvent.deltaY;
        // var direction = "";

        // if(deltaY > 0){
        //     direction = 'up';
        // }  else {
        //     direction = 'down';
        // }

        var direction = deltaY > 0 ? 'up':'down';

        scrollToSection(direction)
    },
    touchmove: function(e){
        e.preventDefault; //чтобы экран не дергался на мобильном

    }
});

$(document).on('keydown', function(e){

    var section = defineSections(sections);
    
    if (e.keyCode == 40  && section.nextSection.length){ //  scrollDown
        performTransition(section.nextSection.index());
     }

    if (e.keyCode == 38 && section.prevSection.length){ // scrollUp
         performTransition(section.prevSection.index());       
               
    }


});

$('[data-scroll-to]').on('click', function(e){
    e.preventDefault();
    var elem = $(e.target);
    var sectionNum = parseInt(elem.attr('data-scroll-to'));
    performTransition(sectionNum);
});


if (isMobile) {
$(window).swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    //   $(this).text("You swiped " + direction ); 
    // alert("You swiped " + direction ); 
    scrollToSection(direction);
    }
  });
}
});
//=============== T E A M - A C C O R D I O N ===================
$('.team-acco__item').on('click', function(){
  $(this).toggleClass('active').siblings().removeClass('active');
});

//=============== M E N U - A C C O R D I O N ====================

$('.menu-acco__item').on('click', function(){
  $(this).toggleClass('active').siblings().removeClass('active');
});

$('menu-acco__title').on('tap', function(){
    $(this).css('color', '$yellow');
});



//==============   O V E R L A Y - M E N U ======================
if($("#hamburger-btn").length){
    overlaymenu.init();
}
//==============   M A P ======================
/*global google*/

if($("#map").length){
    google.maps.event.addDomListener(window, 'load', map.init);
}
  