let overlaymenu = (function(){
    let init = function(){
         $("#hamburger-btn").on('click', function(){

            $(this).toggleClass('opened');
            $('.header__nav').toggleClass('mobile');

        });
    };

    return{
        init: init
    }
})();