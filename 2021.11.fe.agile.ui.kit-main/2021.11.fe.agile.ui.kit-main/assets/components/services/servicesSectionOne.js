class servicesSectionOne extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-header" class="w-80vw-grid">
            <div id="header">
            <div class="header-content">
                <div class="header-section">
                <h1 id="top-title">
                    <div class="o-hidden">
                    <div class="content text-right">
                        Our Services
                    </div>
                    </div>
                </h1>
                <div class="header-section-bottom">
                    <div class="text h4 font-regular">
                    Everything you need to make your digital project happen.
                    </div>
                    <div class="img-container">
                    <div class="img-wrapper o-hidden">
                        <div class="img"></div>
                        <div class="img-first-shadow"></div>
                        <div class="img-last-shadow"></div>
                    </div>
                    </div>
                    <div class="header-section-bg">
                    <h4 class="w-40-p">Everything you need to make your digital project happen.</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div id="introduction">
            <div class="w-1136">
                <div class="text-line flex-container">
                <div class="offset-40-p w-50-p">
                    <div class="text-wrapper">
                    <p>The aGile approach enables a development acceleration of digital projects with agile methods,
                        incremental improvements, all based on test and learning, reducing risks, time, and money.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        `
    }
}


customElements.define('services-one', servicesSectionOne);


/*Animation */

var headerTimeline = gsap.timeline({
    scrollTrigger: '#services-header',
});

headerTimeline
    .from(
        '#services-header .img', {
            duration: DEFAULT_DURATION,
            translateX: '100%',
            scale: 2,
            ease: 'power2.out'
        },
    )

gsap.from('#services-header h1', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 0.5
});

gsap.from('#services-header h4', {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 0.8
});