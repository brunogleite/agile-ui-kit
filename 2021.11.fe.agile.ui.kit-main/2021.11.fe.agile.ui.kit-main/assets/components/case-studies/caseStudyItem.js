class caseStudyItem extends HTMLElement{
    constructor(){
        super();
            var bgImage = this.attributes.bgImg.value
            var firstShadow = this.attributes.firstShadow.value ; 
            this.innerHTML = `
            <div class="case-container-item">
                <div class=" case-item">
                <a href="case-study-template.html">
                    <div class="case-img-wrapper">
                        <div class="case-img" style="background-image:url(${bgImage})"></div>
                        <div class="case-img-first-shadow" style="background-color: ${firstShadow}"></div>
                        <div class="case-img-last-shadow"></div>
                    </div>
                    <div class="case-title h4 font-regular">
                        Case — Helping Trivadis thriving  on digital transformation
                    </div>
                    <div class="case-text">
    
                    We offer the conception, advice and implementation for: 
                    eCommerce, content management, customer relationship management, 
                    search and crawling, big data, websites.. 
    
                    </div>
    
                    <div class="custom-href href-underlined light-blue">Read More</div>
                </a>
                </div>
            </div>
            
            `
    }
        
}

customElements.define("case-study-item", caseStudyItem)