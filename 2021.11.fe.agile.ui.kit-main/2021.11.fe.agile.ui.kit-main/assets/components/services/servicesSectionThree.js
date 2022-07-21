class servicesSectionThree extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-3">
            <div class="slider-outer-wrapper w-1334">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slide-inside">
                    <div class="container">
                        <div class="img-bg" style="background-image:url(assets/imgs/services/third-section-services.png)">
                        </div>
                        <div class="small-box">
                        <div class="small-box-inner-wrapper bg-dark-blue white">
                            <h4 class="lh-4 title white">
                            Case — Helping Trivadis thriving on digital transformation</h4>
                            <p class="description lh-4">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from generation X
                            is on the runway heading towards a streamlined cloud solution.
                            </p>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pagination-desktop"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-inside">
                    <div class="container">
                        <div class="img-bg" style="background-image:url(assets/imgs/case-study/roche_top.jpg)"></div>
                        <div class="small-box">
                        <div class="small-box-inner-wrapper bg-dark-blue white">
                            <h4 class="lh-4 title white">
                            Case — Helping Trivadis thriving on digital transformation
                            </h4>
                            <p class="description lh-4">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from generation X
                            is on the runway heading towards a streamlined cloud solution.
                            </p>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pagination-desktop"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-inside">
                    <div class="container">
                        <div class="img-bg" style="background-image:url(assets/imgs/case-study/roche_top.jpg)"></div>
                        <div class="small-box">
                        <div class="small-box-inner-wrapper bg-dark-blue white">
                            <h4 class="lh-4 title white">
                            Case — Helping Trivadis thriving on digital transformation
                            </h4>
                            <p class="description lh-4">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from generation X
                            is on the runway heading towards a streamlined cloud solution.
                            </p>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pagination-desktop"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-inside">
                    <div class="container">
                        <div class="img-bg" style="background-image:url(assets/imgs/case-study/roche_top.jpg)"></div>
                        <div class="small-box">
                        <div class="small-box-inner-wrapper bg-dark-blue white">
                            <h4 class="lh-4 title white">
                            Case — Helping Trivadis thriving on digital transformation
                            </h4>
                            <p class="description lh-4">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from generation X
                            is on the runway heading towards a streamlined cloud solution.
                            </p>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pagination-desktop"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-inside">
                    <div class="container">
                        <div class="img-bg" style="background-image:url(assets/imgs/case-study/roche_top.jpg)"></div>
                        <div class="small-box">
                        <div class="small-box-inner-wrapper bg-dark-blue white">
                            <h4 class="lh-4 title white">
                            Case — Helping Trivadis thriving on digital transformation
                            </h4>
                            <p class="description lh-4">
                            Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal that has evolved from generation X
                            is on the runway heading towards a streamlined cloud solution.
                            </p>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pagination-desktop"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination pagination-mobile visible-mobile"></div>
            </div>
            </div>
        </section>
        `
    }
}


customElements.define('services-three', servicesSectionThree);



if (window.matchMedia("(min-width: 901px)").matches) {
    var servicesThree = new Swiper('#services-3 .swiper-container', {
        slidesPerView: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

    });
}
if (window.matchMedia("(max-width: 900px)").matches) {
    var servicesThree = new Swiper('#services-3 .swiper-container', {
        slidesPerView: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
}