
/**
 * Section 2
 */

var caseStudiesTimeline = gsap.timeline({
    scrollTrigger: '#case-studies',
});

caseStudiesTimeline.growLeftToRight('#case-studies .underlined-coral-glyph .element')


document.querySelectorAll('#case-studies .case-item')
    .forEach(function (item, i) {
        ScrollTrigger.create({
            duration: 1.5,
            trigger: item,
            start: '30% bottom',
            markers: false,
            id: 'case-item-' + i,
            animation: gsap.effects.fadeIn(
                item,
                {
                    delay:
                        i % 2 !== 0 && window.matchMedia('(min-width: 768px)').matches
                            ? 0.5
                            : 0,
                }),
        })
    })
