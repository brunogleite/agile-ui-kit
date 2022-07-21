class aboutSectionOne extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="about-header" class="w-92vw-grid">
        <div id="header" class="bg-dark-blue">
          <h1 id="top-title">
            <div class=" o-hidden">
              <div class="content">
                We are aGile
              </div>
            </div>
          </h1>
          <div class="img-container">
            <div class="img-wrapper">
              <div class="o-hidden">
                <div class="img"></div>
              </div>
              <div class="img-wrapper-shadow-first"></div>
              <div class="img-wrapper-shadow-last"></div>
            </div>
          </div>
        </div>
        <div id="introduction">
          <div class="w-1334">
            <div class="title-line flex-container">
              <div class="w-85-p">
                <h2 class="font-regular">
                    Creating software passionately, one line code at a time.
                </h2>
              </div>
            </div>
            <div class="text-line flex-container">
              <div class="offset-60-p w-30-p">
                <div class="text-wrapper">
                  <p>Perspectives help to understand the world. Software helps shape the world. We combine perspectives to
                    create sucessful digital projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        `
    }
}


customElements.define('about-one', aboutSectionOne);

/*Animation */

var headerTimeline = gsap.timeline({
  scrollTrigger: '#about-header',
});

headerTimeline
  .from(
      '#about-header .img', {
          duration: DEFAULT_DURATION,
          translateX: '100%',
          scale: 2,
          ease: 'power2.out'
      },
  )

gsap.from('#about-header h1 .content', {
opacity: 0,
duration: 1,
y: 50,
delay: 0.5
});
