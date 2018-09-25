$(function(){
    $(".menu-acco__title-container").on("click", function(){

        var $this = $(this),
            acco = $(".menu-acco"),
            items = acco.find(".menu-acco__item"),
            item = $(this).closest(".menu-acco__item"),
            content = item.find(".menu-acco__dropdown-text"),
            contents = acco.find(".menu-acco__dropdown-text"),
            duration = 200;

        if(!item.hasClass("active")){
            items.removeClass('active');
            contents.stop(true, true).animate({width:"0"},duration);
            item.addClass("active");
            content.stop(true, true).animate({width:"60vw"},duration);

        } else {
            content.stop(true, true).animate({width:"0"},duration);
            item.removeClass("active");
        }

    })
});
