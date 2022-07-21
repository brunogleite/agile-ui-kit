class servicesSectionEight extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-8">
                <div class="w-1136">
                    <div class="title-line flex-container">
                        <div class="w-80-p">
                            <h2 class="font-regular">
                            <span class="inline-block dash visible-desktop">—</span>
                            <span class="inline-block"><span class="inline-block dash visible-mobile">—</span>
                                Facts & <span>
                                <span class="text">Figures</span>
                                </span>
                            </span>
                            </h2>
                        </div>
                    </div>
                    <div class="facts-wrapper">
                        <div class="flex-container justify-space-between">
                            <div class="fact">
                                <div class="fact-value o-hidden">
                                    <div class="content"> +766 </div>
                                </div>
                                <div class="fact-key">
                                    Projects
                                </div>
                                <div class="fact-img"></div>
                            </div>
                            <div class="fact">
                                <div class="fact-value o-hidden">
                                    <div class="content"> +125 </div>
                                </div>
                                <div class="fact-key">
                                    Customers
                                </div>
                                <div class="fact-img"></div>
                            </div>
                            <div class="fact">
                                <div class="fact-value o-hidden">
                                    <div class="content"> 728 </div>
                                </div>
                                <div class="fact-key">
                                    Sprints
                                </div>
                                <div class="fact-img wider">
                                </div>
                            </div>
                            <div class="fact">
                                <div class="fact-value o-hidden">
                                    <div class="content"> 89K </div>
                                </div>
                                <div class="fact-key">
                                    Hours of client<br>conversations
                                </div>
                                <div class="fact-img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-eight', servicesSectionEight);