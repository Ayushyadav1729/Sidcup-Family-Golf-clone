var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #91B508"
        crsr.style.backgroundColor = "#91B508"
    })
})

//  var h4all = document.querySelectorAll(".card")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 4
//         crsr.style.border = "0.1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #91B508"
//         crsr.style.backgroundColor = "#91B508"
//     })
// })

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"105px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
    trigger:    "#main",
    scroller:"body",
    // markers:true,
    start:"top -50%",
    end:"top -100%",
    scrub:"2"
}
})
gsap.from("#about-us",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#colon1,#colon2",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1,#colon2",
        scroller:"body",
        // markers:true,
        scrub:3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})