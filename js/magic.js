gsap.set('.content:not(.initial)', { autoAlpha: 0, y: 20 })
var headlines = gsap.utils.toArray(".text-wrap .text");
var totalDuration = 1000;
var singleDuration = totalDuration / headlines.length;
const lineTimeline = gsap.timeline();
ScrollTrigger.create({    
  trigger: ".pin-up",
  start: "top top",
  end: "+=" + totalDuration,
  pin: true,
  scrub: true,
  animation: lineTimeline,
});
lineTimeline
.to('.sideline', { duration: 1 }, 0)
.to('.sideline', { duration: 0.9, scaleY: 1, ease: "none" }, 0)

headlines.forEach((elem, i) => {    
  const smallTimeline = gsap.timeline();
  const content = document.querySelector('.content-wrap');
  const relevantContent = content.querySelector('.content-' + i);  
  ScrollTrigger.create({ 
    trigger: ".wrapper",
    start: "top -=" + ( singleDuration * i ),
    end: "+=" + singleDuration,
    //markers: true,
    animation: smallTimeline,
    toggleActions: relevantContent.classList.contains('remaining') ? "play none play reverse" : "play reverse play reverse",
  });   
  smallTimeline
    .to(elem,{ duration: 0.25, y: 20}, 0) 
    .to(elem,{ duration: 0.25, y: 20}, 0) 
    .to(relevantContent,{ duration: 0.25, y: 20, autoAlpha: 1 }, 0)
  ;
});


var controller_1 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: ".box-scroll-apps",
  triggerHook: "onLeave", 
  duration: "50%",
})
.setPin(".box-scroll-apps")
.addIndicators({
  indent:100
})
.addTo(controller_1)
.on("progress", function (e) {
  AOS.init({});
  currentIndex = Math.round((e.progress.toFixed(2) * 100) / (100 / 2));
  const swiper3 = document.querySelector('.slide-apps').swiper;
  if (currentIndex == 0) {
       // console.log($('.slide-animation-first lottie-player').attr('autoplay'))
    if ($('.type-animation').val() == 0) {
      $('.type-animation').val(1);
      $('.slide-animation-first').empty();
      $('.slide-animation-first').append('<lottie-player class="anm-lott" src="gif_animated/apps-1.json" background="transparent" autoplay="true" speed="1"></lottie-player><div class="avarta" data-aos="fade-up"><img src="images/ap-1.png" class="img-fluid" alt=""></div>');
    }
    swiper3.slidePrev();
  }
  if (currentIndex == 1) {
    if ($('.type-animation').val() == 1) {
      $('.type-animation').val(0);
      $('.slide-animation-last').empty();
      $('.slide-animation-last').append('<lottie-player class="anm-lott" src="gif_animated/apps-2.json" background="transparent" autoplay="true" speed="1"></lottie-player><div class="avarta" data-aos="fade-up"><img src="images/ap-2.png" class="img-fluid" alt=""></div>');
    }
    swiper3.slideNext();
  }
});

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: ".box-tab-home",
  triggerHook: "onLeave", 
  duration: "50%",
})
.setPin(".box-tab-home")
.addIndicators({
  indent:100
})
.addTo(controller)
.on("progress", function (e) {
  currentIndex = Math.round((e.progress.toFixed(2) * 100) / (100 / 2));
  const swiper1 = document.querySelector('#tab-slide-1 .slide-tab-home').swiper;
  const swiper2 = document.querySelector('#tab-slide-2 .slide-tab-home').swiper;
  if (currentIndex == 1) {
    swiper1.slidePrev();
    swiper2.slidePrev();
  }
  if (currentIndex == 0) {
    swiper1.slideNext();
    swiper2.slideNext();
  }
  $('lottie-player').get(0).play();
});




gsap.registerPlugin(ScrollTrigger)
let container = document.getElementById("container");
gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth
  }
})