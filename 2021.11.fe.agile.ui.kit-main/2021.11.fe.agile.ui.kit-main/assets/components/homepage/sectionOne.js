class SectionOne extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-1" class="w-92vw-grid">
        <div class="w-50vw-grid homepage-1-bg">
          <div class="w-80vw-grid flex-container line-1">
            <div class="w-95-p title">
              <h1>
                <div class="title-line">
                  <div class="title-span">aGile</div>
                </div>
                <div class="title-line">
                  <div class="title-span title-span-margin">UI KIT</div>
                </div>
              </h1>
            </div>
          </div>
          <div class="w-80vw-grid flex-container line-2">
            <div class="w-50-p">
              <div class="flex-container align-bottom">
                <div class="w-50-p text-wrapper">
                  <h4 class="font-regular">
                    <div class="title-line">
                      <div class="title-span">
                        We develop software
                      </div>
                    </div>
                    <div class="title-line">
                      <div class="title-span">
                        for you to succeed
                      </div>
                    </div>
                    <div class="title-line">
                      <div class="title-span">
                        in a digital world.
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div class="img-container  w-50-p">
              <div class="img-wrapper">
                <img  class="img" alt="" />
                <div class="img-wrapper-shadow-first"></div>
                <div class="img-wrapper-shadow-last"></div>
              </div>
            </div>
          </div>
        </div> 
      </section>
        `
    }
   
}

customElements.define('section-one', SectionOne);


/*Animation */

var headerTimeline = gsap.timeline({
    scrollTrigger: '#homepage-1',
});

headerTimeline
    .from(
        '#homepage-1 .img', {
            duration: DEFAULT_DURATION,
            translateX: '100%',
            scale: 2,
            ease: 'power2.out'
        },
    )

gsap.from('#homepage-1 h1 .title-span', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 0.5
});

gsap.from('#homepage-1 h4 .title-span', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 0.8
});

gsap.utils.toArray('#homepage-1 .img-container').forEach((img, i) => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: '#homepage-1',
            scrub: true,
            start: 'start start',
            end: 'bottom end',
            markers: false,
            id: 'section-1-img-' + i,
        },
        translateY: '-20%',
        ease: "none"
    });
});


