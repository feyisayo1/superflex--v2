// const links = document.querySelectorAll(".links");
// console.log(links);

// const arry = Array.from(links);



// arry.forEach((links, index) => {
//     links.addEventListener('click' , () => {
//         console.log('item clicked ');

//         links.classList.remove('activee');
//         links.classList.add('activee');
        
        
//     })
// })


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









// console.log(main);
// console.log(testimonials);


// give each card the same class called class
// then in css give in a porperty to make them look blurry 
// then in js grab the class 
// then define another class that will caryy opcity class and put it on the first class 
// then set an interval or set time that maybe after eveyr 1000ms it should change and set a counter 
// then counter 0 and increase the couinter by one in the loop 
// then set the active card with the counter 
// set the active 