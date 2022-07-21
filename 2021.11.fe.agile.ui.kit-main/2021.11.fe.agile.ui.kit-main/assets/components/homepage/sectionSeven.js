class SectionSeven extends HTMLElement{
    constructor(){
        super()
        .innerHTML = `
        <section id="homepage-7" class="section-bg-img-box-text w-1334">
            <div class="container parallax-background">
                <div class="img-bg parallax-foreground-1"></div>
                <div class="img-bg-shadow parallax-foreground-1"></div>
                <div class="small-box parallax-foreground-2">
                <div class="small-box-inner-wrapper">
                    <h4 class="lh-4 title">Our engineers have made 
                        <span>15969</span> contributions to
                     897 open source projects
                    </h4>
                    <p class="description lh-4">We pride ourselves of being avid open source contributors. Do you think you can
                    improve our code? Just go ahead.</p>
                    <a href="" class="custom-href href-underlined text-20">View our Github</a>

                </div>
                </div>
            </div>
        </section>

        `
    }
   
}

customElements.define('section-seven', SectionSeven);

/*animation */

var homepage7Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#homepage-7',
        start: 'end bottom',
    }
});


homepage7Timeline
    .slideInFromLeft('#homepage-7 .img-bg')
    .fadeIn('#homepage-7 .small-box','<0.5')
    .fadeIn('#homepage-7 .small-box .square','<')
    .from(
        '#homepage-7 .small-box .triangle img', {
            duration: DEFAULT_DURATION,
            translateY: '-100%',
            scaleX: 0,
            rotate: 90,
            ease: 'power2.out'
        },
        '<'
    )
    .growTopDown('#homepage-7 .small-box .circle img','<');

    
