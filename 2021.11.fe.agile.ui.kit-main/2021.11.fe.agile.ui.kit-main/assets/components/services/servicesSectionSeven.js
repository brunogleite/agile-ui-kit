class servicesSectionSeven extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-7" class="bg-coral">
                <div class="w-1136">
                    <h2 class="font-regular underlined-coral-glyph">
                    Development
                    </h2>
                </div>
                <div class="content-bottom">
                    <div class="w-1334">
                    <div class="img-wrapper">
                    </div>
                    </div>
                    <div class="w-1136">
                    <div class="development-content">
                        <div class="flex-container">
                        <div class="w-33-p title-wrapper">
                            <h3 class="white">Always perfectly developed</h3>
                            <a href="javascript;" class="open-contacts visible-desktop custom-href href-underlined">Contact
                            us</a>
                        </div>
                        <div class="w-33-p text-wrapper white">
                            We offer concept development, consulting and implementation for: eCommerce, content management, customer
                            relationship management, search and crawling, big data, websites and landing pages, accessing a
                            marketplace, integration of third party systems via interfaces, connection of offline and online world,
                            mobile apps, UX, customer journey, interaction and visual design.
                        </div>
                        <div class="w-33-p text-wrapper white">
                            YMC utilizes its agile services with a one-of-a-kind DevOps technology, which allows new or modified
                            software to be deployed within seconds. This battle-tested infrastructure integrates and automates the
                            development, deployment and operation of software. It makes delayed or incomplete projects and risky
                            go-lives a thing of the past.
                            <br>
                            <a href="javascript;" class="open-contacts visible-mobile custom-href href-underlined">Contact
                            us</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            </section>
        `
    }
}


customElements.define('services-seven', servicesSectionSeven);