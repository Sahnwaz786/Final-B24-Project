



gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



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
    scale:.14,
    marginTop:"-80px",
    scrollTrigger:{
        trigger:"#page1 svg ",
        scroller:"#main",
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
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top -50%",
        scrub:2
    }
})


gsap.to("#page2  #svg1,page2 #svg2 ",{
    left:"-20vw",
    scrollTrigger:{
        trigger:"#page2 #svg1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top -20%",
        scrub:2
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
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 35%",
        scrub:2
    }
})


gsap.from("#page3  #bottom-part #part1>h5,#page3 #first-img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1>h5,#page3 #first-img ",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})


gsap.from("#page3  #bottom-part #part1 #exp ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1 #exp ",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})

gsap.from("#page3  #bottom-part #part1>img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part1>img ",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})

gsap.from("#page3  #bottom-part #part2 #sec-img ",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page3 #bottom-part #part2 #sec-img ",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 85%",
        scrub:2
    }
})



  gsap.from("#page4 #first-elem",{
    y:70,
    // delay:0.5,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 #first-elem",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
  })

  gsap.from("#page4 #second-elem",{
    y:70,
    // delay:0.5,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 #second-elem",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
  })

  gsap.from("#page4 #third-elem",{
    y:60,
    delay:0.5,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 #third-elem",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
  })

  gsap.from("#page4 #fourth-elem",{
    y:60,
    delay:0.5,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 #fourth-elem",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
  })

  gsap.from("#page4 #fifth-elem",{
    y:60,
    delay:0.5,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 #fifth-elem",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
  })

  
// swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type:"fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});







