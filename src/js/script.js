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

//   blob animation

var tl = new TimelineMax({
  yoyo: true,
  repeat: -1
});
tl.
  to(".blob",3,{attr:{d:'M470.3 133c45.8 42.5 75.3 104.8 60.3 152-15 47.3-74.4 79.6-120.2 110.7-45.8 31.2-78.1 61.3-116.5 67.4-38.4 6.1-83-11.7-110.2-42.8-27.1-31.2-36.9-75.8-44.7-128.1-7.8-52.3-13.5-112.4 13.6-154.9 27.2-42.5 87.3-67.4 148.5-68.5 61.1-1 123.4 21.7 169.2 64.2z'}})
  .to(".blob",3,{attr:{d:'M452.9 141.3c41.2 47 67.6 102.8 56.3 147.4-11.3 44.5-60.4 77.8-101.6 120.6-41.1 42.8-74.4           95.3-117.3 104.9-42.9 9.7-95.4-23.4-122.1-66.2-26.7-42.9-27.4-95.4-32.6-153.2-5.2-57.7-14.8-120.7 11.9-167.7 26.6-47 89.6-78 149-74.5 59.4 3.5 115.2 41.7 156.4 88.7z'}})
  .to(".blob",3,{attr:{d:'M423.5 172.8c30.2 33.9 43.8 80.5 42.9 126.3-.9 45.7-16.5 90.5-46.7 113.1-30.1 22.7-74.9 23.3-124.8 28.3-49.8 5.1-104.7 14.7-146.6-8-41.8-22.7-70.6-77.6-57.8-119.8 12.7-42.2 66.9-71.6 108.7-105.5 41.9-33.8 71.3-72 109.4-80.6 38.1-8.6 84.7 12.4 114.9 46.2z'}})
  .to(".blob",3,{attr:{d:'M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z'}});
});