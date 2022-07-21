class SectionThree extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-3" class="w-1334">
      <h3 class="h4 font-regular text-center o-hidden">
      <div class="content coral">We implemented 750+ client&nbsp;projects</div>
      </h3>
      <div class="image-wrapper">
      <img src="assets/imgs/logos.png" alt="clients logos">
      </div>
      <div class="image-wrapper-mobile swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
          <img src="./assets/imgs/logos-mobile.png" alt="clients logos">
          </div>
          <div class="swiper-slide">
          <img src="./assets/imgs/logos-mobile.png" alt="clients logos">
          </div>
      </div>
      <div class="swiper-pagination"></div>
      </div>
</section>
        `
    }
   
}

customElements.define('section-three', SectionThree);

var homepage3TitleTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#homepage-3 h3',
        start: 'end bottom',
    }
});

homepage3TitleTimeLine.slideInFromBottom('#homepage-3 h3 .content');

//homepage 3 slider - clients
var homepageClients = new Swiper('#homepage-3 .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});