class aboutSectionTwo extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="about-2">
      <div class="w-80vw-grid"></div>
      <div class="centered-text">
        <div class="content">
          Agile team centered
          <br>
          <span class="underlined-light-blue-glyph">
            <span class="text">around you</span>
          </span><span class="visible-desktop">.</span>
        </div>
      </div>
      <div class="visible-desktop">
      <svg width="1541" height="1134" viewBox="0 0 1121 1121" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="560.5" cy="560.5" r="559.5" stroke="#202430" stroke-width="0.6"/>
          <circle cx="560.5" cy="560.5" r="327.5" stroke="#202430" stroke-width="0.6"/>
          <circle cx="560.5" cy="560.5" r="446.5" stroke="#202430" stroke-width="0.6"/>
          <circle cx="560.5" cy="560.5" r="212.5" stroke="#202430" stroke-width="0.6"/>
          <circle cx="1040.5" cy="862.5" r="47.5" fill="var(--secondary-color)"/>
          <ellipse cx="914.5" cy="272" rx="39.5" ry="39" fill="var(--secondary-color)"/>
          <ellipse cx="197" cy="992.5" rx="55" ry="54.5" fill="var(--secondary-color)"/>
          <circle cx="368.5" cy="289.5" r="58.5" fill="var(--secondary-color)"/>
          <mask id="mask0_7_27" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="310" y="231" width="117" height="117">
          <circle cx="368.5" cy="289.5" r="58.5" fill="white"/>
          </mask>
          <g mask="url(#mask0_7_27)">
          </g>
        </svg>
        <div class="person person-1" style="background-image: url(assets/imgs/about/team-pic-1.png);"></div>
        <div class="person person-2" style="background-image: url(assets/imgs/about/team-pic-2.png);"></div>
        <div class="person person-3" style="background-image: url(assets/imgs/about/team-pic-3.png);"></div>
        <div class="person person-4" style="background-image: url(assets/imgs/about/team-pic-4.png);"></div>
        <div class="person person-5" style="background-image: url(assets/imgs/about/team-pic-5.png);"></div>
      </div>
      <div class="visible-mobile">
        <div class="swiper-container">
        <svg width="375" height="493" viewBox="0 0 375 493" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="186.725" cy="246.725" r="180.125" stroke="#202430" stroke-width="0.5"/>
        <circle cx="186.725" cy="246.725" r="245.575" stroke="#202430" stroke-width="0.5"/>
        <circle cx="297" cy="27" r="21" fill="var(--secondary-color)"/>
        <circle cx="282" cy="465" r="21" fill="var(--secondary-color)"/>
        <circle cx="71" cy="93" r="21" fill="var(--primary-color)"/>
      </svg>
      <div class="swiper-wrapper">
         
      <div class="swiper-slide">
        <div class="person person-1" style="background-image: url(../assets/imgs/about/team-pic-1.png);"></div>
      </div>
      <div class="swiper-slide">
        <div class="person person-2" style="background-image: url(../assets/imgs/about/team-pic-2.png);"></div>
      </div>
      <div class="swiper-slide">
        <div class="person person-3" style="background-image: url(../assets/imgs/about/team-pic-3.png);"></div>
      </div>
      <div class="swiper-slide">
        <div class="person person-4" style="background-image: url(../assets/imgs/about/team-pic-4.png);"></div>
      </div>
      <div class="swiper-slide">
        <div class="person person-5" style="background-image: url(../assets/imgs/about/team-pic-5.png);"></div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
      </div>
    </section>
        
        `
    }
}


customElements.define('about-two', aboutSectionTwo);


if (window.matchMedia("(max-width: 900px)").matches) {
  var servicesThree = new Swiper('#about-2 .swiper-container', {
      slidesPerView: 2,
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