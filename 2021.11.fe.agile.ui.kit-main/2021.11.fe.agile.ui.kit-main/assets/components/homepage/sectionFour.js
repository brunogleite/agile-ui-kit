class SectionFour extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-4" class="w-1334">
        <div class="flex-container">
          <div class="w-85-p offset-15-p bg-primary">
            <div class="box">
              <div class="box-inner-wrapper">
                <h2>Open way to&nbsp;innovation
                  <br>From roadmap to&nbsp;launch</h2>
                <div class="flex-container">
                  <div class="w-33-p">
                    <p class="lh-4">We realize successful digital solutions by agilizing them: learning to learn and
                      automating what was learned with cutting edge technologies and lean management.</p>
                    <a href="services.html" class="custom-href href-underlined highlight-color">Learn more</a>
                  </div>
                </div>
                <div class="box-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `
    }
   
}

customElements.define('section-four', SectionFour);

/*Animation */

var outlinedBluePath = document.querySelector('.outlined-blue-glyph .element path')
var outlineBlueLength = outlinedBluePath.getTotalLength();
gsap.set(outlinedBluePath, {
    strokeDasharray: outlineBlueLength
});

var homepage4FiguresTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#homepage-4',
        start: 'top 80%',
    }
});

homepage4FiguresTimeline
    .slideInFromLeft('#homepage-4 .pre-box-figures .semi-circle img', { stagger: 0.7 })
    .from(
        '#homepage-4 .pre-box-figures .triangle img', {
            duration: DEFAULT_DURATION,
            translateY: '-100%',
            rotate: '90deg',
            ease: 'power2.out',
        },
        '>-0.5'
    )
    .drawSvgPath('.outlined-blue-glyph .element path', ">-0.5")
    .slideInFromLeft('.underlined-coral-glyph .element svg', {duration: 0.4 }, ">-0.1");


var homepage4TextTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#homepage-4 .box-inner-wrapper p',
    }
});

homepage4TextTimeline
    .from(
        '#homepage-4 .box-inner-wrapper p', {
            duration: 0.5,
            opacity: 0,
            transformOrigin: 'center center',
            ease: 'ease.out',
        },
    )
    .from(
        '#homepage-4 .box-inner-wrapper a', {
            duration: 0.5,
            opacity: 0,
            transformOrigin: 'center center',
            ease: 'ease.out',
        },
        '>-0.2'
    )


 //about 4 slider - services
var aboutFour = new Swiper('#about-4 .swiper-container', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  }
});