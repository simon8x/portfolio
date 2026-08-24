$(document).ready(function(){
    $(".navigation__close").on("click", closeModalNav);
    $(".navigation__item").on("click", closeModalNav);
    $("#menu").on("click", openModalNav);
    $("#menu").on("click",showCrossMorphing);


    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:4
            },
            // 600:{
            //     items:3
            // },
            1000:{
                items:4
            }
        }
    });
});

const openModalNav = () => {
    $("#modal-nav").removeClass("d-none");
} 

const showCrossMorphing = () =>{
  
  if($(".hamburger-btn__btn").hasClass("cross-morphing")){
    $(".hamburger-btn__btn").removeClass("cross-morphing");
    closeModalNav();
  }else{
    $(".hamburger-btn__btn").addClass("cross-morphing");
    openModalNav();
  }
}

const closeModalNav = () => {
    $("#modal-nav").addClass("d-none");    
} 
const swiper = new Swiper('.swiper-page', {
    // Optional parameters
      direction: 'vertical',
      loop: false,  
      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
      },
      cssMode: true,
      // And if we need scrollbar
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      // mouseweel controler

      //mousewheel: {
      //  invert: true,
      //},
      // crossfading 
      //coverflowEffect: {
      //  rotate: 30,
      //  slideShadows: false,
      //},

});

swiper.on('slideChange', function () {
    $(".navbar__item").removeClass("navbar__item--active");
    $('*[data-order="'+swiper.activeIndex+'"]').addClass("navbar__item--active");
    if(swiper.activeIndex == 1)
    {
        $("#character-name").fadeIn(200, function() {
            $("#character-lastname").fadeIn(200, function() {
                $("#character-description-container").addClass('animated');
                $("#character-selection").addClass('animated');
            });
        });
    }

    //if(swiper.activeIndex == 1){
    //    $("#second-section").addClass('animate');
    //}
    if(swiper.activeIndex == 2){
        $(".material[data-v-72b47178]").addClass('animated');
    }
    if(swiper.activeIndex != 0){
      $(".navbar__item").addClass("navbar__item--reduce");
			$(".navbar-boku").addClass("navbar-boku--reduce");
			$(".navbar__logo").addClass("navbar__logo--reduce");
      $(".navbar__right").addClass("navbar__right--reduce");
		}else{
      $(".navbar__item").removeClass("navbar__item--reduce");
			$(".navbar-boku").removeClass("navbar-boku--reduce");
			$(".navbar__logo").removeClass("navbar__logo--reduce");
      $(".navbar__right").removeClass("navbar__right--reduce");
    }
});
const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
    });

    const materialSwiper = new Swiper('.material-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        //slidesPerGroup: 3,
         //loopFillGroupWithBlank: true,
         width: 500,
               navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        loop: true,
        });
const materialTop = new Swiper('.material-top', {   
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    thumbs: {
      swiper: materialSwiper,
    },
});

//ENABLE AND DISABLE PRE REGISTER SEND EMAIL DEPENDIN ON CHECKS
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function checkFormData(){
    if (validateEmail(document.getElementById('preRegisterUserEmail').value) && document.getElementById('tosCheck').checked){
        document.getElementById('preRegisterButton').disabled = false;
    }else{
        document.getElementById('preRegisterButton').disabled = true;
    }
}


function send_encripted_email(email, marketing){
  	
  let body = {
    "appName":"MyHero",
    "source":"website",
    "email": email,
    "optInMarketing": marketing
  };
	
  //$("#spinner").css("visibility", "visible");
  $('#register-success').modal('show');
  
  const apiUrl = 'https://d6k6pmcmd8.execute-api.us-east-1.amazonaws.com/prod/prereg';
  postData(apiUrl, body)
  .then(data => {
	//$("#spinner").css("visibility", "hidden");
    //$('#register-success').modal('show');
  });
}

async function postData(url = '', data = '') {

  const response = await fetch(url, {
    method: 'POST', 
	mode: 'no-cors', 
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
    "data": data
    })
  });
  return response;
}

// /*
//     Carousel
// */
// $('#carousel-chars').on('slide.bs.carousel', function (e) {

//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 4;
//     var totalItems = $('.carousel-item').length;
 
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i = 0; i < it ; i++) {
//             // append slides to end
//             if (e.direction == "left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });