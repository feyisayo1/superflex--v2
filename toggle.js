const testimonials = document.querySelectorAll('.active__card');
const dots = document.querySelectorAll('.active__dots');

// const mainn = document.querySelector('.main');
let timer = 0;
const counter = setInterval(() => {
    for (let i = 0; i < testimonials.length; i++) {
        // const element = testimonials[i];
        // element.classList.toggle('main');
        testimonials[i].classList.remove('main');
        

    }

    for (let i = 0; i < dots.length; i++) {
        // const element = array[i];
        dots[i].classList.remove('main__dots');
    }

    timer++;
    console.log(timer);
    if(timer > 3){
        timer = 0;
    }
    testimonials[timer].classList.add('main');
    dots[timer].classList.add('main__dots');

  
}, 2000);




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}


