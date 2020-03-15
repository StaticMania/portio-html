$(document).ready(function() {

  // change-navigation-color
	$(window).scroll(function () {
		if ($(document).scrollTop() > 200) {
			$(".navbar").addClass('nav__color__change');
		} else {
			$(".navbar").removeClass('nav__color__change');
		}
  });
  
  
	// Smooth scrolling
  var scrollLink = $('.scroll');
	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
  });
  
  $('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

  // service slider
  $('.service__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  // skill count
  
	$('.skill__progress').waypoint(function(){
    $('.progress-value span').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3000,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
    });
    $('.skill__progress_item').addClass('js-animation');
    this.destroy();
  },{ offset: '50%' });
  
  // Testimonial slider
  $('.testimonial__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  // Modal Popup
  $('.popup-button').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: 'v=',
          src: '//www.youtube.com/embed/tgbNymZ7vqY'
        },
      }
    }
  });

});