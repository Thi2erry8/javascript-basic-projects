const slides = document.querySelectorAll('.slide');
const NextBtn = document.querySelector('.nextBtn');
const PrevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%` ;
});
let counter = 0;

function carousel(){
    slides.forEach((slide)=>{
        let Bytimes = counter*100;
       slide.style.transform = `translateX(-${Bytimes}%)`;
    });
 };

NextBtn.addEventListener('click',()=>{
    counter++;
    if(counter > slides.length -1){
       counter = 0;
    };
    carousel();
});
PrevBtn.addEventListener('click',()=>{
    counter--;
    if(counter < 0){
        counter = slides.length -1;
     }
    carousel();
});

