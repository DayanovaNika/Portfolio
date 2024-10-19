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

gsap.from('#invite',{
    opacity:0,
    x: -300,
    scrollTrigger:{
        // markers: true,
        trigger: '#footer',
        start: 'top 90%',
        end:'30% 80%',
        scrub: 1,
    }
})

gsap.from('#contacts-list',{
    opacity:0,
    x: 300,
    scrollTrigger:{
        // markers: true,
        trigger: '#footer',
        start: 'top 90%',
        end:'30% 80%',
        scrub: 1,
    }
})

function paralax() {
    const preview = document.querySelector('#welcome');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;
    
    
    gsap.to(
        '#picture-avatar-one', 
        {
            rotationX: -mouseX * 0.02, 
            rotationY: mouseY * 0.02, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
        
    gsap.to(
        '#picture-avatar-two', 
        {
            rotationX: mouseX * 0.025, 
            rotationY: -mouseY * 0.025,
            x:-mouseX * 0.02,
            y: mouseY * 0.02, 
            ease: 'power2.out' ,
        },);
        
    gsap.to(
        '#picture-avatar-photo', 
        {
            rotationX: -mouseX * 0.03, 
            rotationY: -mouseY * 0.03, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
    }) 
}

paralax()





