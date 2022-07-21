var headerTimeline = gsap.timeline({
    scrollTrigger: '#services-header',
});

headerTimeline
    .slideInFromTop('#services-header .header-top-section .list-text', { stagger: 0.4 })
    .fadeIn('#services-header .header-top-section .list-img', { stagger: 0.4, delay: 0.4 }, '<')
    .fadeIn('#services-header .header-bottom-section .text', '>-0.4')
    .from('#services-header .header-bottom-section .img',
        {
            duration: DEFAULT_DURATION,
            translateX: '-151%',
            scale: 1.5,
            transformOrigin: 'left center',
        },
        '<0.2')
    .slideInFromBottom('#services-header .header-bottom-section #top-title .content', '<0.2')
    .growLeftToRight('#services-header .header-bottom-section #top-title .element', '>-0.2')
    .zoomIn('#services-header .header-bottom-section .circle', '<-0.4');

var introductionTimeline = gsap.timeline({
    scrollTrigger: '#introduction',
});

introductionTimeline
    .slideInFromLeft('#services-header .header-bottom-section .semi-circle img', { stagger: 0.4 });

/**
 * Section 2
 */

var services2Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-2',
        start: 'top center',
        markers: false,
        id: 'section-2'
    },
});

services2Timeline
    .fadeIn('#services-2 .accordion-item', { stagger: 0.4 });

gsap.effects.slideInFromLeft('#services-2 .figures .triangle',
    { scrollTrigger: { trigger: '#services-2 .figures' } });

/**
 * Section 4
 */

gsap.effects.slideInFromBottom('#services-4 .hightlight-author .content',
    {
        scrollTrigger: '#services-4 .hightlight-author .content'
    });

/**
 * Section 5
 */

var services5Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-5',
        start: 'top bottom-=10%',
        markers: false,
        id: 'section-5'
    },
});

services5Timeline
    .slideInFromBottom('#services-5 .text-wrapper .line-1 .content')
    .fadeIn('#services-5 .text-wrapper .line-2', '>-0.3');

var services5FiguresTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-5 #transformation-footer',
        start: 'bottom bottom',
        markers: false,
        id: 'section-5-footer'
    },
});

services5FiguresTimeline
    .growBottomUp('#services-5 .figures .circle:last-child')
    .growTopDown('#services-5 .figures .circle:first-child', '<0.2');


/**
 * Section 6
 */


var services6Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-6',
        start: 'center 60%',
        markers: false,
        id: 'section-6'
    },
});

services6Timeline
    .drawSvgPath('#services-6 .outlined-blue-glyph svg path');


/**
 * Section 7
 */

var services7Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-7 .figures',
        start: 'center 80%',
        markers: false,
        id: 'section-7'
    },
});

services7Timeline
    .slideInFromLeft('#services-7 .figures .square:last-child')
    .slideInFromBottom('#services-7 .figures .square:first-child', '<0.2');

/**
 * Section 8
 */

var services8Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#services-8',
        start: 'center 80%',
        markers: false,
        id: 'section-8'
    },
});

services8Timeline
    .slideInFromBottom('#services-8 .fact .fact-value .content', { stagger: 0.4 })
    .growLeftToRight('#services-8 .title-line .underlined-light-blue-glyph .element', '<')


/**
 * Contact us
 */

var contactUs = gsap.timeline({
    scrollTrigger: '.contact-us',
});

contactUs
    .from('.contact-us .figures .triangle', {
        duration: DEFAULT_DURATION,
        rotate: 90,
        opacity: 0
    })
    .from('.contact-us .figures .semi-circle img', {
        duration: DEFAULT_DURATION,
        rotate: 90,
        translateY: '-100%',
        stagger: 0.6
    },
    '<0.4');