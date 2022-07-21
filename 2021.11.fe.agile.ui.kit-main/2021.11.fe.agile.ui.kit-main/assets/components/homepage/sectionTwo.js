class SectionTwo extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-2">
        <div class="w-1136">
          <div class="flex-container">
            <div class="w-60-p">
              <h2 class="font-regular">
                <span>Inspire, Try <span class="inline-block go">Go</span><span
                  class="inline-block exclamation-mark">!</span></span>
                <br>
                <span class="inline-block tag-line">That’s how <br> we roll with you.</h2>
              </span>
            </div>
            <div class="w-40-p text-wrapper">
              <p>As a software engineering consultancy, we&nbsp;help your project succeed by fostering a&nbsp;progressive
                culture of learning with pure flexibility and openness to innovation.</p>
            </div>
          </div>
        </div>
  
      </section>
        `
    }
   
}

customElements.define('section-two', SectionTwo);

var homepage2TitleTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#homepage-2 .tag-line',
        start: 'end bottom',
    }
});

homepage2TitleTimeLine
    .growLeftToRight('#homepage-2 .dash', { duration: 0.5 })
    .fadeIn('#homepage-2 .go', { duration: 0.5},'<0.2')
    .growTopDown('#homepage-2 .exclamation-mark', {duration: 0.5},'<0.2')
    .from(
        '#homepage-2 .tag-line', {
            duration: 0.5,
            opacity: 0,
            ease: 'ease.out',
            rotate: 20,
            transformOrigin: 'top left'
        },
        '<0.2'
    )

    //about 2 slider - team (mobile)
if (window.matchMedia("(max-width: 900px)").matches) {
  var aboutTwo = new Swiper('#about-2 .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
}