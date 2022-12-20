
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', (e) =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// Swiper js

let swiperProjects = new Swiper(".projects__container", {
    // cssMode: true,
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});


// email js

const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    contactProject = document.getElementById("contact-project"),
    contactMessage = document.getElementById("contact-message")
// console.log(contactForm,contactName,contactEmail,contactProject,contactMessage);


// const sendEmail = (e)=> {
//     // console.log("ok");
    
// }
// contactForm.addEventListener('submit', (e)=> {
//     e.preventDefault()

//     if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
//         contactMessage.classList.remove("color-blue")
//         contactMessage.classList.add("color-red")

//         contactMessage.innerText = "Write all the inpud fields 📩"
//     }else{
//         emailjs.sendForm('service_a7u3kh1','template_shd4bti','#contact-form','fVxofWhjcToQZHxfw')
//             .then(()=>{
//                 contactMessage.classList.add('color-blue')
//                 contactMessage.textContent = 'Message sent ✅'

//                 setTimeout(()=>{
//                     contactMessage.textContent = ''
//                 }, 5000)
//             })
//     }
// })