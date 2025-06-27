/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close');

/*========Menu SHow========= */
/* if navToggle is True */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-nav');
    })
}

/*====Menu Hidden */
/* if navClose is True */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-nav');
    })
}

/*=============== REMOVE MENU MOBILE===============*/
const navLink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');

    // When we Click on each nav__link , we remove the show-nav
    navMenu.classList.remove('show-nav');
}
navLink.forEach((n)=>{
    n.addEventListener('click',linkAction);
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header');
      // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-header class
    (this.scrollY>=350) ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  // Optional parameters
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: "auto",  
    pagination:{
        el:".swiper-pagination",
        dynamicBullets:true,
    },
    breakpoints:{
        768:{
            slidesPerView:3,
        },
        1024:{
            spaceBetween:48,
        },
    },
});


/*=============== MIXITUP FILTER FEATURED ===============*/
let  mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
let linkFeatured=document.querySelectorAll('.featured__item');
function activeFeatured(){
    linkFeatured.forEach((l)=>{
        l.classList.remove('active-featured');
    })
    this.classList.add('active-featured')
}
linkFeatured.forEach((l)=>{
    l.addEventListener('click',activeFeatured);
})

// let linkFeatured=document.querySelectorAll('.featured__item');
// let activeFeatured=(e)=>{
//     linkFeatured.forEach((l)=>{
//         l.classList.remove('active-featured');
//     })
//     e.currentTarget.classList.add('active-featured')
// }
// linkFeatured.forEach((l)=>{
//     l.addEventListener('click',activeFeatured);
// })

// note this that use with declaration function  but cant use with expression func
/*=============== SHOW SCROLL UP ===============*/ 
document.getElementById("scroll-up").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');
let scrollActive=()=>{
    const scrollY=window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop - 58,
            sectionId=current.getAttribute('id'),
            sectionClass=document.querySelector('.nav__menu a[href*='+ sectionId+']');
            if(scrollY>sectionTop && scrollY <=sectionTop+sectionHeight){
                sectionClass.classList.add('active-link');
            } else{
                sectionClass.classList.remove('active-link');
            }
    });
}
window.addEventListener('scroll',scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true, // animation repaet
});
sr.reveal(`.home__title,.popular__container,.features__img,.featured__filters`)
sr.reveal(`.home__subtitle`,{delay:500})
sr.reveal(`.home__elec`,{delay:600})
sr.reveal(`.home__img`,{delay:800})
sr.reveal(`.home__car-data`,{delay:900,interval:100,origin:'bottom'})
sr.reveal(`.home__button`,{delay:1000,origin:'bottom'})
sr.reveal(`.about__group,.offer__data`,{origin:'left'})
sr.reveal(`.about__data,.offer__img`,{origin:'right'})
sr.reveal(`.features__map`,{dealy:600,origin:'bottom'})
sr.reveal(`.features__card`,{interval:300})
sr.reveal(`.featured__card,.logos__content,.footer__content`,{interval:100})
