var rect =document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    // console.log(rect.getBoundingClientRect());
    var rectanglelocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectanglelocation.left;

    if(insiderectval<rectanglelocation.width/2){
        // console.log("left");
        var redcolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width / 2,
            255,
            0,
            insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease : Power4,
        });
    }
    else{
        // console.log("right");
        var bluecolor = gsap.utils.mapRange(
            rectanglelocation.width / 2,
            rectanglelocation.width,
            0,
            255,
            insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease : Power4,
        });
    }
});

rect.addEventListener("mouseleave",function(){
    // rect.style.backgroundColor = "white";
    gsap.to(rect,{
        backgroundColor: 'white',
    })
})