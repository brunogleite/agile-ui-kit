class servicesSectionFour extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-4">
                <div class="main-container w-1334">
                    <div class="w-1136">
                    <div class="w-80-p">
                        <div class="hightlight">
                        <div class="hightlight-text">
                            "At YMC, we live and breath digitality. Our all-encompassing approach to software development is driven
                            by
                            our dedication to continuous learning and optimization."
                        </div>
                        <div class="hightlight-author o-hidden">
                            <div class="content">
                            <div class="hightlight-name">
                                — Thomas Schieke,
                            </div>
                            <div class="hightlight-role">
                                Co-Founder of YMC
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-four', servicesSectionFour);