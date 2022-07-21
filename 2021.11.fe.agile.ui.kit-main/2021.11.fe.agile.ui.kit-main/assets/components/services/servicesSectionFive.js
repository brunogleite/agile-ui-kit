class servicesSectionFive extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-5" class="w-1334">
                <div class="title-outer-wrapper">
                    <div class="w-1136">
                    <div class="flex-container">
                        <div class="w-50-p">
                        <h2 class="font-regular">Transformation</h2>
                        </div>
                        <div class="w-50-p">
                        <div class="text-wrapper">
                            <div class="line-1 o-hidden">
                            <div class="content">
                                Are you wondering how you can make your about fit for the digital market of the future?
                            </div>
                            </div>
                            <div class="line-2">
                            We analyze and develop strategic solutions and business modelsto approach the digital consumer.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div id="transformation-steps" class="bg-dark-blue">
                    <div id="transformation-steps-inner">
                    <div>
                        <div class="flex-container">
                        <div class="w-33-p">
                            <div class="transformation-step">
                            <div class="step-number">01</div>
                            <div class="step-img"
                                style="background-image:url(assets/imgs/services/section-five-services-img.png)"></div>
                            <div class="step-description">
                                We are available as mentor and doer in the early phase of brainstorming ideas,
                                as well as in the operation of a high-performance Internet application.
                            </div>
                            </div>
                        </div>
                        <div class="w-33-p">
                            <div class="transformation-step active">
                            <div class="step-number">02</div>
                            <div class="step-img"
                                style="background-image:url(assets/imgs/services/section-five-services-img.png)">
                            </div>
                            <div class="step-description">
                                We implement customer projects iteratively as a Minimum Viable Product (MVP): With a low investment
                                for maximum success at minimum risk, a first viable solution is developed and continuously expanded.
                            </div>
                            </div>
                        </div>
                        <div class="w-33-p">
                            <div class="transformation-step">
                            <div class="step-number">03</div>
                            <div class="step-img"
                                style="background-image:url(assets/imgs/services/section-five-services-img.png)"></div>
                            <div class="step-description">
                                We achieve greater speed and minimize risks
                                by breaking large projects down into organizational and technological iterative steps.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="transformation-steps-mobile" class="visible-mobile bg-dark-blue">
                    <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <div class="transformation-step">
                            <div class="step-number">01</div>
                            <div class="step-img" style="background-image:url(assets/imgs/services/Transformation_01.svg)"></div>
                            <div class="step-description">
                            We are available as mentor and doer in the early phase of brainstorming ideas, as well as in the
                            operation of a high-performance Internet application.
                            </div>
                        </div>
                        </div>
                        <div class="swiper-slide">
                        <div class="transformation-step">
                            <div class="step-number">02</div>
                            <div class="step-img" style="background-image:url(assets/imgs/services/Transformation_01.svg)">
                            </div>
                            <div class="step-description">
                            We implement customer projects iteratively as a Minimum Viable Product (MVP): With a low investment
                            for maximum success at minimum risk, a first viable solution is developed and continuously expanded.
                            </div>
                        </div>
                        </div>
                        <div class="swiper-slide">
                        <div class="transformation-step">
                            <div class="step-number">03</div>
                            <div class="step-img" style="background-image:url(assets/imgs/services/Transformation_01.svg)"></div>
                            <div class="step-description">
                            We implement customer projects iteratively as a Minimum Viable Product (MVP): With a low investment
                            for maximum success at minimum risk, a first viable solution is developed and continuously expanded.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div id="transformation-footer">
                    <div class="w-1136">
                    <div class="w-60-p">
                        <div class="footer-text h4">In all phases and areas of the business cycle, our experienced team is the
                        helping
                        hand for our customers' business model. </div>
                        <a href="javascript;" class="open-contacts custom-href href-underlined grey">Contact us</a>
                    </div>
                    </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-five', servicesSectionFive);


if (window.matchMedia("(min-width: 501px)").matches) {
    $('#services-5 .transformation-step').on("mouseenter", function () {
        $('#services-5 .transformation-step').removeClass('active');
        $(this).addClass('active');
    });
}

if (window.matchMedia("(max-width: 768px)").matches) {
    var servicesFive = new Swiper('#services-5 .swiper-container', {
        slidesPerView: "auto",
        effect: 'cards',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    console.log(servicesFive.slideNext())
};
