class aboutSectionThree extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="about-3" class="section-bg-img-box-text inverse w-1334">
      <div class="container parallax-background">
        <div class="img-bg parallax-foreground-1"> 
        </div>
        <div class="container-border"></div>
        <div class="small-box parallax-foreground-2">
          <div class="small-box-inner-wrapper">
            <h4 class="lh-4 title">
              A team of risk-takers,
              believers and doers.
            </h4>
            <p class="description lh-4">At YMC, we love to engage in meaningful projects, take feasible risks, ... and
              go to the max to make our clients happy.</p>
            <a href="services.html" class="custom-href href-underlined light-blue text-20">View our services</a>

          </div>
        </div>

    </section>
        
        `
    }
}


customElements.define('about-three', aboutSectionThree);