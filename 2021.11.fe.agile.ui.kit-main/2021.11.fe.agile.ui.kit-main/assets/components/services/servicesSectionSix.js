class servicesSectionSix extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-6">
                <div class="w-1136">
                    <div class="title-line flex-container">
                        <div class="offset-15-p w-85-p">
                            <h2 class="font-regular">
                            <div class="line-1">
                                <span class="inline-block dash visible-desktop">—</span>
                                <span class="inline-block"><span class="inline-block dash visible-mobile">—</span> We bring a
                                wide&nbsp;range </span>
                            </div>
                            <div class="line-2">
                                of knowledge and
                                <span class="text">experience</span>
                            </div>
                            <div class="line-3 text-right">
                                <span class="inline-block tag-line">from over <span class="br-mobile">750 digital</span>
                            </div>
                            <div class="line-4 text-right">
                                <span class="br-mobile">customer </span>projects to the table.
                            </div>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-six', servicesSectionSix);