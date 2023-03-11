let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');

console.dir(logoNavbar)

window.addEventListener('scroll' , ()=>
{ let scrolled = window.scrollY;

if(scrolled > 0){
    navbar.classList.remove('bg-redd');
    navbar.classList.add('bg-redl');
    navbar.style.height='140px';
    links.forEach( (link) =>{
        link.style.color= 'var(--redd)';
    })  
} else {
    navbar.classList.add('bg-redd');
    navbar.classList.remove('bg-redl');
    navbar.style.height='80px'; 
    links.forEach( (link) =>{
        link.style.color= 'var(--white)';
    })  
    
    }
});