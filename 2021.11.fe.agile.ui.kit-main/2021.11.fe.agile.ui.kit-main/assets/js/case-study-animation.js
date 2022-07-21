var headerTimeline = gsap.timeline({
    scrollTrigger: '#case-study-info',
});

headerTimeline
    .slideInFromBottom('#case-study-info #top-title .content')
    .fadeIn('#case-study-info #customer-avatar', '<0.4')
    .fadeIn('#case-study-info #customer-avatar #customer-logo', '<0.4')

/**
 * Section 2
 */

var nextCases = gsap.timeline({
    scrollTrigger: '#next-cases',
});

nextCases.slideInFromBottom('#next-cases .next-case-item', { stagger: 0.3 })

