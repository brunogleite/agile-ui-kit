class SectionSix extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-6">
      <div class="w-1334">
        <div class="next-page-href-wrapper">
          <div class="flex-container">
            <div class="w-40-p offset-60-p"><a href="services.html" class="h3 lh-3 next-page-href">Need our
                services <span class="br-mobile">for&nbsp;your next project?</span>
              </a></div>
          </div>
        </div>
      </div>
      <div class="full-content white">
        <div class="w-1136">
          <div class="flex-container">
            <div class="w-40-p">
              <h3>Why people love to&nbsp;ride with us ?</h3>
              <div class="fake-accordion-content">
                <div class="accordion-item">
                  <h5 class="white minus-glyph">Beyond technology</h5>
                  <span class="description">
                    Experts in every programming skillset.<br>
                    Plenty of experiente in managing complex projects.</span>
                </div>
                <div class="accordion-item" >
                  <h5 class="white minus-glyph">Time-to-Market</h5>
                  <span class="description">
                    All the programming, technical, and mentoring resources for you to move fast in the digital
                    age.</span>
                </div>
                <div class="accordion-item">
                  <h5 class="white minus-glyph">Scale Your Way </h5>
                  <span class="description">
                    Our teams as well as our development and deployment infrastructure grows seamlessly with
                    demand.</span>
                </div>
              </div>
            </div>
            <div class="w-60-p image-wrapper parallax-background parallax-foreground-1">
              <div class="img">
  
              </div>
              <div class="img-shadow"></div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
        `
    }
   
}

customElements.define('section-six', SectionSix);

/*animation */

gsap.utils.toArray('#homepage-6 .accordion-item').forEach((item, i) => {
    var homepage6AccordionItemTimeline = gsap.timeline();

    homepage6AccordionItemTimeline
        .fadeIn(item, { duration: 0.5 });

    ScrollTrigger.create({
        trigger: item,
        start: '50% bottom',
        animation: homepage6AccordionItemTimeline,
        markers: false,
        id: 'item-' + i,
    })
});