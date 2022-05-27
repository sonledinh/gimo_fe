
$('.slide-banner').slick({
  autoplay: false,
  arrow: false,
  dots: true, 
  speed: 400, 
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: '', 
  nextArrow: '',
});

$('.slide-life').slick({
  autoplay: false,
  arrow: false,
  dots: true, 
  speed: 400, 
  slidesToShow: 2.5, 
  infinite: false,
  prevArrow: '', 
  nextArrow: '',
});

$('.title-quess').click(function(e) {
    e.preventDefault();  
    $(".title-quess").removeClass('active');
    
    var $this = $(this); 
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(400);
    } else {
        $this.parent().parent().find('.answer').removeClass('show');
        $this.parent().parent().find('.answer').slideUp(400);
        $this.toggleClass('active'); 
        $this.next().toggleClass('show');
        $this.next().slideToggle(400);
    }
});

$(document).ready(function() {
  var $slider = $('.slide-member');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    $progressBarLabel.css('width', calc + '%');;
    // $progressBarLabel.text( calc + '% completed' );
  });
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: '<a href="javascript:void(0)" class="arr-lef"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45 1V45H23H12H1V34V23V1H45Z" stroke="#CFD1D9" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"/><path d="M13.4004 22.8001L12.6933 22.093V23.5072L13.4004 22.8001ZM19.9071 17.7076L20.6142 17.0005L19.2 15.5863L18.4929 16.2934L19.9071 17.7076ZM18.4929 29.3068L19.2 30.0139L20.6142 28.5997L19.9071 27.8926L18.4929 29.3068ZM13.4004 23.8001L31.4004 23.8001V21.8001L13.4004 21.8001L13.4004 23.8001ZM14.1075 23.5072L19.9071 17.7076L18.4929 16.2934L12.6933 22.093L14.1075 23.5072ZM12.6933 23.5072L18.4929 29.3068L19.9071 27.8926L14.1075 22.093L12.6933 23.5072Z" fill="#CFD1D9"/></svg></a>',
    nextArrow: '<a href="javascript:void(0)" class="arr-right"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 45.0006V1H45.0006V45.0006H1Z" stroke="#CFD1D9" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"/><path d="M12.0002 21.771H11.0002L11.0002 23.771H12.0002L12.0002 21.771ZM32.6255 22.771L33.3326 23.4781L33.3205 22.052L32.6255 22.771ZM26.4454 15.4065L25.7264 14.7115L24.3364 16.1495L25.0554 16.8445L26.4454 15.4065ZM25.0433 28.939L24.3362 29.6461L25.7504 31.0603L26.4575 30.3532L25.0433 28.939ZM12.0002 23.771L32.6255 23.771V21.771L12.0002 21.771L12.0002 23.771ZM33.3205 22.052L26.4454 15.4065L25.0554 16.8445L31.9305 23.49L33.3205 22.052ZM31.9184 22.0639L25.0433 28.939L26.4575 30.3532L33.3326 23.4781L31.9184 22.0639Z" fill="#CFD1D9"/></svg></a>',
  });   
});


$(document).ready(function() {
  var $slider_say = $('.slide-saying');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  $slider_say.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    $progressBarLabel.css('width', calc + '%');;
    // $progressBarLabel.text( calc + '% completed' );
  });
  $slider_say.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: '',
    nextArrow: '',
  });   
});





$('.tab-top a').click(function(){
  var tab_id = $(this).attr('data-tab');
  $('.tab-top a').removeClass('active');
  $('.tab-content-slide').removeClass('active');
  $(this).addClass('active');
  $("#"+tab_id).addClass('active');
})

var swiper_app_1 = new Swiper('.slide-tab-home-1', {
    pagination: '.swiper-pagination-1',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    // speed: 1,
    effect: 'fade'
}); 

var swiper_app_2 = new Swiper('.slide-tab-home-2', {
    pagination: '.swiper-pagination-2',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    // speed: 1,
    effect: 'fade'
}); 

var swiper_app_3 = new Swiper('.slide-apps', {
    pagination: '.swiper-pagination-3',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    // speed: 1,
    effect: 'fade'
}); 

AOS.init({
  duration: 1200,
})


$(document).ready(function(){

  $('.clc-tab').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.clc-tab').removeClass('active-show');
    $('.item-apps').removeClass('active-show');
    $(this).addClass('active-show');
    $("#"+tab_id).addClass('active-show');
  })

  $('.tab-strs').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-strs').removeClass('active');
    $('.content-stories').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  })
  
})





window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
  if ( document.querySelectorAll('.video-animated-demo').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('.video-animated-demo');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        // thisVideoEl.play();
      } else {
        // thisVideoEl.pause();   
      }
    } 
  }
} 

window.addEventListener('load', anm_strive);
window.addEventListener('scroll', anm_strive);
function anm_strive() {
  if ( document.querySelectorAll('lottie-player').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('lottie-player.anm-lott');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.stop();
      }
    }
  }
}


window.addEventListener('load', anm_title);
window.addEventListener('scroll', anm_title);
function anm_title() {
  if ( document.querySelectorAll('lottie-player.lot-title').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('lottie-player.lot-title');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        setTimeout(function() {
          thisVideoEl.play();
        }, 800);
      } else {
        thisVideoEl.stop();
      }
    }
  }
}

const links = document.querySelectorAll(".item-stories");
const visibleClass = "visible";
links.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const player = this.querySelector(".item-stories lottie-player");
    player.classList.add(visibleClass);
    player.play();
  });
  link.addEventListener("mouseleave", function () {
    const player = this.querySelector(".item-stories lottie-player");
    player.classList.remove(visibleClass);
    player.stop();
  });
});

$('.clc-tab').click(function () {
  // $('.tab-content-slide .title-tab-item').empty(); 
  $('.tab-content-slide .title-tab-item').append('<lottie-player class="anm-lott" src="gif_animated/tab-lott.json" background="transparent" autoplay speed="1"></lottie-player>');
});

$('.list-leader ul li').hover(function() {
  $('.list-leader ul li').removeClass('hver-active');
  $(this).addClass('hver-active');
});