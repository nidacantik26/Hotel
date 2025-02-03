
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

document.querySelectorAll('input[type="number"]').forEach(inputNumbmer => {
   inputNumbmer.oninput = () =>{
      if(inputNumbmer.value.length > inputNumbmer.maxLength) inputNumbmer.value = inputNumbmer.value.slice(0, inputNumbmer.maxLength);
   }
});

var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});
   var swiper = new Swiper(".gallery-slider", {
       loop: true,
       grabCursor: true,
       slidesPerView: 1,
       spaceBetween: 10,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
       pagination: {
           el: ".swiper-pagination",
           clickable: true,
       },
       autoplay: {
           delay: 3000,
           disableOnInteraction: false,
       },
   });

   console.log("Swiper Initialized:", swiper);





var swiper = new Swiper(".reviews-slider", {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
  });

  console.log("Swiper Initialized:", swiper);


