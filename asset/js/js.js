
function showSlides(n){
let sliders=document.querySelectorAll(".slider")
var slider
for(var i=0;i<sliders.length;i++){
    slider=sliders[i];
    slider.classList.remove("active-slider")
}
sliders[n].classList.add("active-slider")
sliders[n].classList.add("fade-in")
}
const add=(i)=>{
    showSlides(i)
}
const next=()=>{
    let sliders=document.querySelectorAll(".slider")
    for(var i=0;i<sliders.length;i++){
        setTimeout(add(i),5000)
    }
}

$(document).ready(function(){
  $('.carosel-all').slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
        }
      }
    ]

  });
});
$(document).ready(function(){
  $('.footer').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ]

  });
});
var toggle=false
var bars=document.querySelector(".bars")
var navmobile=document.querySelector(".sub-nav-mobile")
const addNavMobile=()=>{
 if(toggle){
    navmobile.classList.remove("active-nav-mobile")
    toggle=!toggle
 }else{
  navmobile.classList.add("active-nav-mobile")
  toggle=!toggle
 }
}
bars.addEventListener("click",addNavMobile)