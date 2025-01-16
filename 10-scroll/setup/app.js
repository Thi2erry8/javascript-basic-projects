// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date') ;
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navbar = document.getElementById('nav') ;
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll',() =>{
const scrollHeigt =  window.pageYOffset;   

});
// ********** smooth scroll ************
// select links
