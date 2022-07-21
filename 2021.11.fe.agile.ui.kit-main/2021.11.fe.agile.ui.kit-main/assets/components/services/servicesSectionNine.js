class servicesSectionNine extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
            <section id="services-9" class="bg-beige">
                <div class="slider-outer-wrapper w-1334">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inside">
                        <div class="title h4">
                            Managing your health in the palm of your hand.</div>
                        <div class="content">
                            <div class="client">Target</div>
                            <div class="client-img" style="background-image:url(../assets/imgs/services/logo-target.svg)"></div>
                            <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum facilisis massa, amet finibus odio volutpat ac. Sed tempus pretium ante, a luctus enim tempor eget. Nulla facilisi. Curabitur nulla ipsum, lacinia ac eros et, pharetra tempus libero. Nam ac erat rutrum, tempor tellus ac, venenatis ligula.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inside">
                        <div class="title h4">
                            Boring hotel services are over. Smart Check-in.</div>
                        <div class="content">
                            <div class="client">Booking</div>
                            <div class="client-img" style="background-image:url(../assets/imgs/services/logo-booking.svg)">
                            </div>
                            <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum facilisis massa, amet finibus odio volutpat ac. Sed tempus pretium ante, a luctus enim tempor eget. Nulla facilisi. Curabitur nulla ipsum, lacinia ac eros et, pharetra tempus libero. Nam ac erat rutrum, tempor tellus ac, venenatis ligula.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inside">
                        <div class="title h4">
                            Fighting for a better planet with Agyle Teams</div>
                        <div class="content">
                            <div class="client">Greenpeace</div>
                            <div class="client-img" style="background-image:url(../assets/imgs/services/logo-greenpeace.svg)">
                            </div>
                            <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum facilisis massa, amet finibus odio volutpat ac. Sed tempus pretium ante, a luctus enim tempor eget. Nulla facilisi. Curabitur nulla ipsum, lacinia ac eros et, pharetra tempus libero. Nam ac erat rutrum, tempor tellus ac, venenatis ligula.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inside">
                        <div class="title h4">
                            Managing your health
                            in the palm of your hand.</div>
                        <div class="content">
                            <div class="client">Roche</div>
                            <div class="client-img" style="background-image:url(assets/imgs/services/logo-roche.svg)"></div>
                            <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum facilisis massa, amet finibus odio volutpat ac. Sed tempus pretium ante, a luctus enim tempor eget. Nulla facilisi. Curabitur nulla ipsum, lacinia ac eros et, pharetra tempus libero. Nam ac erat rutrum, tempor tellus ac, venenatis ligula.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!-- Add Scrollbar -->
                    <div class="swiper-scrollbar"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </div>
            </section>
        `
    }
}


customElements.define('services-nine', servicesSectionNine);


var servicesNine = new Swiper('#services-9 .swiper-container', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
});
