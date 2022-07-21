class aboutSectionFour extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="about-4">
      <div class="container w-1334">
        <div class="swiper-container testimonials-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide testimonial-item">
              <div class="flex-container">
                <div class="w-60-p">
                  <div class="text-wrapper">
                    <div class="comment">
                      “The YMC engineers are excellent and had tons of experience building apps. We felt like a real
                      team from day one.”
                    </div>
                    <div class="author">
                      <div class="author-name">
                        — Samuel,
                      </div>
                      <div class="author-role">
                        Head of Digital IMC Bank
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-40-p parallax-foreground-1">
                  <div class="img-wrapper">
                    <div class="img" style="background-image: url(assets/imgs/about/head-of-digital.png);">
                    </div>
                    <div class="img-wrapper-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next visible-desktop"></div>
          <div class="swiper-button-prev visible-desktop"></div>
          <!-- Add Pagination -->
          <div class="swiper-pagination white visible-mobile"></div>
        </div>
      </div>

    </section>
        
        `
    }
}


customElements.define('about-four', aboutSectionFour);