
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
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    }

);
  });