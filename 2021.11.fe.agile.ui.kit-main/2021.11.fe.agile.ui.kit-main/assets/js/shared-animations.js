gsap.registerPlugin(ScrollTrigger);
var DEFAULT_DURATION = 0.9

/**
 * General simple parallax
 */

gsap.utils.toArray('.parallax-foreground-1').forEach((elm, i) => {
    ScrollTrigger.create({
        trigger: elm.closest('.parallax-background') || elm,
        scrub: true,
        markers: false,
        start: 'center-=' + (window.outerHeight * 0.75) + 'px 50%',
        end: 'center+=' + (window.outerHeight * 0.75) + 'px 50%',
        id: 'foreground-1-' + i,
        animation: gsap.fromTo(
            elm, {
            translateY: '100px',
            transformOrigin: 'center center',
        }, {
            translateY: '-100px',
            transformOrigin: 'center center',
        }
        )
    })
});

gsap.utils.toArray('.parallax-foreground-2')
    .forEach((elm, i) => {
        ScrollTrigger.create({
            trigger: elm.closest('.parallax-background') || elm,
            scrub: true,
            markers: false,
            start: 'center-=' + (window.outerHeight * 0.75) + 'px 50%',
            end: 'center+=' + (window.outerHeight * 0.75) + 'px 50%',
            id: 'foreground-2-' + i,
            animation: gsap.fromTo(
                elm, {
                translateY: '110px',
                transformOrigin: 'center center',
            }, {
                translateY: '-110px',
                transformOrigin: 'center center',
            }
            )
        })
    });


/**
 * Shared Effects
 */

gsap.registerEffect({
    name: "growBottomUp",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            scale: 0,
            transformOrigin: 'bottom center',
            ease: 'power2.out'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "growLeftToRight",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            duration: 0.5,
            scaleX: 0,
            ease: 'ease.out',
            transformOrigin: 'center left'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "growTopDown",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            duration: 0.5,
            scale: 0,
            ease: 'ease.out',
            transformOrigin: 'top center'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "slideInAndGrowFromLeft",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            scale: 0,
            translateX: '-110%',
            transformOrigin: 'center left',
            ease: 'power2.out'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "slideInFromBottom",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            translateY: '110%',
            ease: 'power2.out'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "slideInFromTop",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            translateY: '-110%',
            ease: 'power2.out'
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "slideInFromLeft",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            translateX: '-110%',
            transformOrigin: 'left center',
            ease: 'power2.out',
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "slideInFromRight",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            translateX: '110%',
            transformOrigin: 'left center',
            ease: 'power2.out',
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "fadeIn",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            delay: config.delay,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            opacity: 0,
            ease: 'power2.out',
        });
    },
    defaults: { duration: DEFAULT_DURATION, stagger: 0.2 },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "drawSvgPath",
    effect: (targets, config) => {
        var path = targets[0];
        var pathLength = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: pathLength
        });

        return gsap.fromTo(
            targets, {
            strokeDashoffset: pathLength
        }, {
            strokeDashoffset: 0,
            duration: config.duration,
        }
        );
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

gsap.registerEffect({
    name: "fadeInRotatin90Deg",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            translateY: '-5.63rem',
            transformOrigin: 'top center',
            opacity: 0,
            ease: 'ease.out',
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});


gsap.registerEffect({
    name: "zoomIn",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            stagger: config.stagger,
            scrollTrigger: config.scrollTrigger,
            delay: config.delay,
            opacity: 0.5,
            transformOrigin: 'center center',
            scale: 0,
            ease: 'ease.out',
        });
    },
    defaults: { duration: DEFAULT_DURATION },
    extendTimeline: true,
});

/**
 * Footer
 */

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 768px)": function () {
        gsap.utils.toArray('#footer-top-menu-wrapper .content').forEach((item, i) => {
            var footerItemTimeline = gsap.timeline();

            footerItemTimeline
                .from(
                    item, {
                    duration: 0.5,
                    translateY: '110%',
                    ease: 'power2.out'
                }
                )

            ScrollTrigger.create({
                trigger: item,
                start: 'top bottom',
                animation: footerItemTimeline,
                markers: false,
                id: 'item-' + i,
            })
        });

        var footerContactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#footer',
                id: 'footer-contact',
                start: 'top 70%',
            }
        });

        footerContactTimeline
            .from(
                '#footer-top-contact-wrapper', {
                duration: DEFAULT_DURATION,
                translateY: '120%',
                opacity: 0,
                ease: 'power2.out'
            }
            )
            .from(
                '#footer-top-contact-wrapper .triangle-wrapper svg', {
                duration: DEFAULT_DURATION,
                translateX: '-110%',
                scaleY: 0,
                ease: 'power2.out'
            },
                '>-0.5'
            )
            .from(
                '#footer-top-contact-wrapper .circle-wrapper svg', {
                duration: DEFAULT_DURATION,
                scale: '0',
                transformOrigin: 'right center',
                ease: 'power2.out'
            },
                '<0.3'
            )
    }
});
