var s = skrollr.init();
AOS.init();
gsap.registerPlugin(TextPlugin);



let tl = gsap.timeline({
    defaults :{ease: 'power1.out'},
});


tl.fromTo('nav',{opacity:0}, {opacity:1, duration : 2})
tl.fromTo('.tagline',{opacity:0}, {opacity:1, duration : 2}, '-=2')

gsap.to('.tagline', {duration: 10, text:{
value : 'MyPhone12',
newClass : 'heading-class-2'
} , ease: "power2", delay : 2});
