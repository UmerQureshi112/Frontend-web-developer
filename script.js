const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleRemove() {
    let Xscale = 1;
    let Yscale = 1;

    let Xprevious = 0;
    let Yprevious = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    window.addEventListener("mousemove",(dets)=>{
      let xdiff =   dets.clientX - Xprevious;
      let ydiff =  dets.clientY - Yprevious;

       Xprevious = dets.clientX;
       Yprevious = dets.clientY;

        Xscale =  gsap.utils.clamp(.8, 1.2, xdiff);
        Yscale =  gsap.utils.clamp(.8, 1.2, ydiff);   

        circleMouseFollower(Xscale, Yscale)
    })
}
circleRemove()

function firstPageAnim() {
    let tl = gsap.timeline();
    tl.from("#nav", {
        y: "-10",
        duration: 0.8,
        opacity: 0,
        ease: Expo
        
    }) 

        tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInout,
        duration: 0.5,
        stagger: .2,
        delay: -1,
        
    }) 

       tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInout,
        duration: 1.5,
        delay: -1,
        
    }) 

}

function circleMouseFollower(Xscale, Yscale){
    window.addEventListener("mousemove", (dets)=>{
       let circle = document.querySelector("#minicircle");
       let timer;
         circle.style.display = "block"
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${Xscale}, ${Yscale})` 

        timer = clearTimeout(timer) 

      timer = setTimeout(() => {
            circle.style.display = "none"
        }, 1000);

    })
}

circleMouseFollower();
firstPageAnim();

let elem = document.querySelectorAll(".elem");
let rotate = 0;
let diffrance = 0;

elem.forEach((e)=>{

e.addEventListener("mousemove", (dets)=>{
let diff = dets.clientY - e.getBoundingClientRect().top

 diffrance = dets.clientX - rotate;
 rotate = dets.clientX


 gsap.to(e.querySelector("img"), {
    opacity: 1,
    ease: Power1,
    top: diff,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20, 20, diffrance)

   })
})

e.addEventListener("mouseleave", (dets)=>{
 gsap.to(e.querySelector("img"), {
    opacity: 0,
   })


})

})


function animation() {
    let animated = gsap.timeline()

    animated.to("#animation", {
        height: 0,
        duration: 1,
    })
}

animation();





