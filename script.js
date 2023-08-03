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



 var h2Data = document.querySelectorAll("#page2  h2")

h2Data.forEach(function(elem){
    var textData = elem.textContent
    var splitedText = textData.split("")

    var clutter = ""

   splitedText.forEach(function(e){
   clutter += `<span>${e}</span>`
   
})
   elem.innerHTML = clutter;
})
 

gsap.to("#page2  h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h2 span",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -60%",
        scrub:2
    }
})


gsap.to("#page2  #svg1,page2 #svg2 ",{
    left:"-20vw",
    scrollTrigger:{
        trigger:"#page2 #svg1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top -30%",
        scrub:3
    }
})

var b = document.querySelectorAll("#page3 h2")

b.forEach(function(chacha){
   var bData = chacha.textContent
   var splitedB = bData.split("")

   var clutter = ""

   splitedB.forEach(function(chachi){
    clutter += `<span>${chachi}</span>`
   })
   chacha.innerHTML = clutter
})


gsap.to("#page3  h2 span",{
    // color:"#E3E3C4",
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3 h2 span",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:2
    }
})


gsap.from("#page3  #bottom-part #part1>h5,#page3 #first-img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1>h5,#page3 #first-img ",
        scroller:"body",
        // markers:true,
        start:"top 96%",
        end:"top 75%",
        scrub:1
    }
})


gsap.from("#page3  #bottom-part #part1 #exp ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1 #exp ",
        scroller:"body",
        // markers:true,
        start:"top 97%",
        end:"top 75%",
        scrub:1
    }
})

gsap.from("#page3  #bottom-part #part1>img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1>img ",
        scroller:"body",
        // markers:true,
        start:"top 97%",
        end:"top 75%",
        scrub:1
    }
})

gsap.from("#page3  #bottom-part #part2 #sec-img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part2 #sec-img ",
        scroller:"body",
        // markers:true,
        start:"top 97%",
        end:"top 75%",
        scrub:1
    }
})







