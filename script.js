var tl = gsap.timeline()

tl.from("#page1 svg",{
    y:-45,
    opacity:0,
    duration:0.6,
    delay:0.3,
  
   
    
})
tl.from("#page1 img",{
    scale:0.3,
    delay:-0.5,
    duration:1.3,
    // ease: Power3.easeOut
    // ease: SlowMo.ease.config(0.7, 0.7, false)
    ease:Cubic.easeOut
    // ease: Expo.easeOut

})
.from("#nav",{
    y:-40,
    opacity:0,
    duration:0.5,

})
gsap.to("#page1 svg",{
    scale:0.12,
    marginTop:"-70px",
    // position:fixed,
    scrollTrigger:{
        trigger:"#page1 svg ",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -6%",
        scrub:1,
        // pins:true

    }
})
