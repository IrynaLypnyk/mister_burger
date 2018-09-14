var slider = (function() {
    //private
    var flag = true,
        timer = 0,
        timerDuration = 5000;

    return {
        init: function() {
            var _this = this;
            //включим автопереключение
             //_this.autoSwitch();
            $(".slider__controls-btn").on("click", function(e) {
                e.preventDefault();
                var $this = $(this),
                    slides = $this.closest(".slider").find(".slider__item"),
                    activeSlide = slides.filter(".active"),
                    nextSlide = activeSlide.next(),
                    prevSlide = activeSlide.prev(),
                    firstSlide = slides.first(),
                    lastSlide = slides.last(),
                    reqPos = 0;
                _this.clearTimer();

                if ($this.hasClass("slider__controls-btn_next")) {
                    if (nextSlide.length) {
                        _this.moveSlide(nextSlide, "forward");
                    } else {
                        _this.moveSlide(firstSlide, "forward");
                    }
                } else {
                    if (prevSlide.length) {
                        _this.moveSlide(prevSlide, "backward");
                    } else {
                        _this.moveSlide(lastSlide, "backward");
                    }
                }
            });
          },

        moveSlide: function(slide, direction) {
            var _this = this,
                slider = slide.closest(".slider"),
                slides = slider.find(".slider__item"),
                activeSlide = slides.filter(".active"),
                slideWidth = slides.width(),
                duration = 700,
                reqCssPosition = 0,
                reqSlideShift = 0;

            if (flag) {
                flag = false;
                if (direction === "forward") {
                    reqCssPosition = slideWidth;
                    reqSlideShift = -slideWidth;
                } else if (direction === "backward") {
                    reqCssPosition = -slideWidth;
                    reqSlideShift = slideWidth;
                }
                slide.css("left", reqCssPosition).addClass("inslide");

                var movableSlide = slides.filter(".inslide");
                activeSlide.animate({ left: reqSlideShift }, duration);
                movableSlide.animate({ left: 0 }, duration, function() {
                    var $this = $(this);
                    slides.css("left", "0").removeClass("active");
                    $this.toggleClass("inslide active");
                    flag = true;
                });
            }
        },
        autoSwitch: function(){
            var
                _this = this;
            timer = setInterval(function(){
                var
                    slides = $(".slider__list .slider__item"),
                    activeSlide = slides.filter(".active"),
                    nextSlide = activeSlide.next(),
                    firstSlide = slides.first();

                if (nextSlide.length) {
                    _this.moveSlide(nextSlide, "forward");
                } else {
                    _this.moveSlide(firstSlide, "forward");
                }

            },timerDuration)

        },
        clearTimer: function(){
            if(timer){
                clearInterval(timer),
                    this.autoSwitch();
            }
        }
    };
})();

