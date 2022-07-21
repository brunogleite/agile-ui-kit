class aboutSectionFive extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="about-5">
        <div class="w-1136">
          <div class="title-line flex-container">
            <div class="w-80-p">
              <h2 class="font-regular">
                <div class="line-1">
                  <span class="inline-block dash">—</span>
                  <span class="inline-block">Empathy &</span>
                </div>
                <div class="line-2">
                  <span class="inline-block tag-line">Cooperation</span>
                </div>
                <div class="line-3">
                  <span class="underlined-light-blue-glyph">
                    <span class="text">Hand in Hand</span>
                  </span>
                </div>
              </h2>
            </div>
          </div>
          <div class="facts-wrapper">
            <div class="flex-container justify-space-between">
              <div class="fact">
                <div class="fact-value o-hidden">
                  <div class="content">
                    +14
                  </div>
                </div>
                <div class="fact-key">
                  Years in business
                </div>
              </div>
              <div class="fact">
                <div class="fact-value o-hidden">
                  <div class="content">
                    +25
                  </div>
                </div>
                <div class="fact-key">
                  Collaborators
                </div>
              </div>
              <div class="fact">
                <div class="fact-value o-hidden">
                  <div class="content">
                    6
                  </div>
                </div>
                <div class="fact-key">
                  Family Fathers
                </div>
              </div>
              <div class="fact">
                <div class="fact-value o-hidden">
                  <div class="content">
                    35.97
                  </div>
                </div>
                <div class="fact-key">
                  Average Age
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        `
    }
}


customElements.define('about-five', aboutSectionFive);