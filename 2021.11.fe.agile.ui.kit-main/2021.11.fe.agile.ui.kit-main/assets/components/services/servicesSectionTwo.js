class servicesSectionTwo extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-2" class="w-80vw-grid">
            <div class="w-1136">
            <div class="flex-container justify-space-between">
                <div class="w-40-p">
                <h2 class="font-regular title">Innovation</h2>
                <div class="text-wrapper white">
                    <div class="line-1">We help our customers in all phases of business, from vision to operation.
                    Furthermore, we ensure that the project becomes a cycle of ideas.</div>
                    <div class="line-2">We achieve this by applying agile tools and processes in all business areas. We like
                    to outsmart ourselves and our customers in order to achieve optimal results.</div>
                    <div class="line-3">We face the truth unconditionally with our clients in order to constantly find
                    realistic solutions.</div>
                </div>
                <a href="javascript;" class="contact-cta custom-href href-underlined grey">Contact us</a>
                </div>
                <div class="w-40-p">
                <h5 class="accordion-title">Methods and Technologies</h5>
                <div class="fake-accordion-content">
                    <div class="accordion-item">
                    <h3 class="h5 white minus-glyph">Lean Startup</h3>
                    <span class="description">
                        Getting a desired product to customers'<span class="br-desktop"></span> hands faster by working
                        smarter.</span>
                    </span>
                    </div>
                    <div class="accordion-item">
                    <h3 class="h5 white minus-glyph">Agile Programming</h3>
                    <span class="description">
                        Breaking up projects into several stages
                        and involving constant collaboration.
                    </div>
                    <div class="accordion-item">
                    <h3 class="h5 white minus-glyph">DevOps</h3>
                    <span class="description">
                        We use cutting-edge technology to develop and deploy software faster and better through automation.
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>        
        `
    }
}


customElements.define('services-two', servicesSectionTwo);