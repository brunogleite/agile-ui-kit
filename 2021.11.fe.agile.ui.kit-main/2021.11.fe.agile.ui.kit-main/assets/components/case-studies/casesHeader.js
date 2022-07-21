class casesHeader extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="cases-header" class="w-80vw-grid">
        <div class="cases-header-wrapper">
          <div class="cases-header-bg">
            <h1 class="text-right o-hidden" id="top-title">
              <div class="content">Our Work</div>
            </h1>
            <div class="text h4 font-regular">
              We do projects that we identify with and that we are proud to support, celebrate and share. That way, we are
              sure that our customers love it, too.
            </div>
          </div>
          <div class="cases-header-first-shadow"></div>
          <div class="cases-header-last-shadow"></div>
        </div>
    </section>
        
        `
        
    }
}

customElements.define("cases-header", casesHeader)

/*Animation */

var headerTimeline = gsap.timeline({
  scrollTrigger: '#cases-header',
});


gsap.from('#cases-header h1', {
opacity: 0,
duration: 1,
y: 50,
delay: 0.5
});

gsap.from('#cases-header .h4', {
opacity: 0,
duration: 1,
y: 50,
delay: 0.8
});