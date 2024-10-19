gsap.registerPlugin(ScrollTrigger)

gsap.from('#hero', {
    scale:3,
    duration:2.5,
    opacity:0,
    ease:'bounce',
}) 

gsap.from('[data-card]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers: true,
        trigger: '#skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('[works]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers: true,
        trigger: '#works',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})



