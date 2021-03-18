import $ from 'jquery';
import 'slick-carousel';
import 'readmore-js';

(function() {
	// Run only if section exist
    if ($('.home-page').length != 1) { return 0; }
    console.log('home page');


    $(".slider").slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: false,
        draggable: false,
        adaptiveHeight: true,
        fade: true,
        swipe: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".slick-arrow").on('click', function(){
        $('.item ').removeClass('active')
    })
      
       //ticking machine
          var percentTime;
          var tick;
          var time = .1;
          var progressBarIndex = 0;
      
          $('.progressBarContainer .progressBar').each(function(index) {
              var progress = "<div class='inProgress inProgress" + index + "'></div>";
              $(this).html(progress);
          });
      
          function startProgressbar() {
              resetProgressbar();
              percentTime = 0;
              tick = setInterval(interval, 10);
          }
      
          function interval() {
              if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                  progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                  startProgressbar();
              } else {
                  percentTime += 1 / (time + 5);
                  $('.inProgress' + progressBarIndex).css({
                      width: percentTime + "%"
                  });
                  $('.inProgress' + progressBarIndex).parent().parent().addClass('active')
                  if (percentTime >= 100) {
                      $('.single-item').slick('slickNext');
                      progressBarIndex++;
                      if (progressBarIndex > 2) {
                          progressBarIndex = 0;
                      }
                      $('.inProgress').parent().parent().removeClass('active')
                      startProgressbar();
                  }
              }
          }
      
          function resetProgressbar() {
              $('.inProgress').css({
                  width: 0 + '%'
              });
              clearInterval(tick);
          }
          startProgressbar();
          // End ticking machine
      
          $('.item').click(function () {
              clearInterval(tick);
              var goToThisIndex = $(this).find("span").data("slickIndex");
              $('.single-item').slick('slickGoTo', goToThisIndex, false);
              $('.inProgress').parent().parent().removeClass('active')
              startProgressbar();
          });
      
      
      $('.one').click(function () {
              clearInterval(tick);
              // var goToThisIndex = $(this).find("span").data("slickIndex");
              $('.home-page').css('overflow','auto');
              $('.page-carousel').addClass('active');
              $('.single-item').slick('slickGoTo', 0, false);
              $('.inProgress').parent().parent().removeClass('active')
              window.scrollTo(0,0);
              startProgressbar();
      });
      $('.two').click(function () {
              clearInterval(tick);
              // var goToThisIndex = $(this).find("span").data("slickIndex");
              $('.home-page').css('overflow','auto');
              $('.page-carousel').addClass('active');
              $('.single-item').slick('slickGoTo', 1, false);
              $('.inProgress').parent().parent().removeClass('active')
              window.scrollTo(0,0);
              startProgressbar();
      });
      $('.three').click(function () {
              clearInterval(tick);
              // var goToThisIndex = $(this).find("span").data("slickIndex");
              $('.home-page').css('overflow','auto');
              $('.page-carousel').addClass('active');
              $('.single-item').slick('slickGoTo', 2, false);
              $('.inProgress').parent().parent().removeClass('active')
              window.scrollTo(0,0);
              startProgressbar();
      });
      $('.four').click(function () {
            clearInterval(tick);
            // var goToThisIndex = $(this).find("span").data("slickIndex");
            $('.home-page').css('overflow','auto');
            $('.page-carousel').addClass('active');
            $('.single-item').slick('slickGoTo', 3, false);
            $('.inProgress').parent().parent().removeClass('active')
            window.scrollTo(0,0);
            startProgressbar();
        });
      
      
      $('.pause').on('click', function() {
          // $('.single-item').slick('slickPause');
          clearInterval(tick);
          console.log('pause')
      });
      
      $('.cont').on('click', function() {
          // $('.single-item').slick('slickPause');
          startProgressbar()
          console.log('cont')
      });

      $('.back-btn').on('click', function(){
        $('.home-page').css('overflow','hidden');
        $('.page-carousel').removeClass('active');
      })
      
      
      document.addEventListener('scroll', function(e) {
        if($(window).scrollTop() > 1) {
          clearInterval(tick);
          console.log('pause')
        }else{
          startProgressbar()
          console.log('cont')
        }
      });
      

    function SlideHeightAdjust(){
        var sliderHeight = $('.slick-active').height();
        $('.slick-list').css('height', sliderHeight)
    }

    $('.leaf-icon').on('click',function(){
        $(this).find('.x-icon').toggleClass('minus');
        $(this).parent().find('p').toggleClass("expand");
        SlideHeightAdjust();
    })

    
    $(".scroll-navigator").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".details-content").offset().top
        }, 0);
    });

})();