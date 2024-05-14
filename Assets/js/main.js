/* =======Change Bakground header======= */

const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scrollbar is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >=50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =======Show Scroll Up======= */

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
   //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll Sections Active Link ======= */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYoffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    } else {
         sectionsClass.classList.remove('active-link')
    }   

    })
}
window.addEventListener('scroll', scrollActive)

/*=======  Scroll Reveal Animation =======  */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true // Animations repeat
})
sr.reveal(`.home-data, .products-data, .steps-content,
           .footer-container`)
sr.reveal(`.home-img`, {origin: 'bottom'})
sr.reveal(`.products-card`, {interval: 100})
sr.reveal(`.about-img, .testmonial-img`, {origin: 'right'})
sr.reveal(`.about-data, .testmonial-data`, {origin: 'left'})

