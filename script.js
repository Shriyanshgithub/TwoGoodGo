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




function videoplay(){
    var play = document.querySelector("#play")
var move = document.querySelector("#video-container")

 move.addEventListener("mouseenter",function(){
     play.style.opacity = 1
     play.style.scale = 0.7
     
})

move.addEventListener("mousemove",function(dets){
    play.style.left = dets.x-100 + "px"
    play.style.top = dets.y-100 + "px"
})

move.addEventListener("mouseleave",function(){
    play.style.opacity = 0
    play.style.scale = 0
    
})

}
videoplay()

gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger: 0.4
})
gsap.from("#page1 #video-container",{
    scale : 0.8,
    opacity:0,
    delay:1.2,
    duration:0.3
})

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
       
        left: dets.x,
        top: dets.y
    })
})

function cursors(){
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(1)"
            
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(1)"
            
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(1)"
            
        })
    })
    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(1)"
            
        })
    })
    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%,-50%) scale(0)"
            
        })
    })
}
cursors()

function navbar(){
    gsap.to("#nav-part1 svg",{
        transform: "translateY(-100%)",
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            
           start: "top 0",
           end:"top -5%",
           scrub:true
        }
    })
    gsap.to("#nav-2 #links",{
        transform: "translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            
           start: "top 0",
           end:"top -5%",
           scrub:true
        }
    })
}
navbar()
gsap.to("#logo img",{
    scale:1,
    scrollTrigger:{
        trigger:"#logo img",
        scroller: "#main",
     scrub:true
    }
})
