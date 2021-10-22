document.body.onscroll = function () {
  let scrollY = window.scrollY;

  let candle = document.getElementById("candle");
  let wick = document.getElementById("wick");
  let wax = document.getElementById("candleWax");
  let night = document.getElementById("night");
  let fireSub = document.getElementById("fireSub");
  let queen = document.getElementById("queen");
  
  let block1 = document.getElementById("block1");
  let blockCamp = document.getElementById("blockCampfire");
  let blockCandle = document.getElementById("blockCandle");
  let block2 = document.getElementById("block2");
  let block3 = document.getElementById("block3");

  let scale = 1 - (scrollY - 2500) * 0.001;
  let blockOffTAndCampOffW = block1.offsetTop + blockCamp.offsetWidth;
  let scrollaftercand = block1.offsetTop + blockCamp.offsetWidth + blockCandle.offsetWidth + block2.offsetTop;

  document.querySelector("#yyy").innerText = scrollY;
  document.body.style.setProperty("--scrollY", scrollY);
  document.body.style.setProperty("--h", scrollY / 10);

// change #night bg, #land bg & opacity fire candle
  if (scrollY >= night.offsetTop) {
    document.querySelector("#night").style.backgroundImage =
      "url('https://static.typingclub.com/m/tpmedia/img/sky2.png')";

    document.querySelector("#land").src =
      "https://cdn.discordapp.com/attachments/884365403856437268/886639421183651890/image2D.png";
  } 
  else {
    document.querySelector("#land").src =
      "https://cdn.discordapp.com/attachments/884365403856437268/886639423658274846/image2L.png";

    document.querySelector("#night").style.backgroundImage = "url('')";
  
    document.getElementsByClassName("fire-sub")[0].style.opacity = "0";
  }

// reduce opacity mountain and campfire
  if(scrollY >= blockOffTAndCampOffW + 500){
    document.querySelector("#land").style.opacity = "calc( 1 - ((var(--scrollY) - 2000) * 0.001))";
    document.getElementsByClassName("fire-sub")[0].style.opacity = "calc( 0 + ((var(--scrollY) - 2800) * 0.001))";
  }

// change position mountain from fixed to static
  if(scrollY >= block2.offsetTop){
    document.querySelector("#land").style.position = "static";
  }
  else{
    document.querySelector("#land").style.position = "fixed";
  }

// scaling candle and fire
  if(scrollY >= block2.offsetTop - 600 && scrollY < block2.offsetTop + 300){
    let b2_6 = block2.offsetTop - 600;
    candle.style.transform = "scale(calc(1 - ((var(--scrollY) - "+ b2_6 +") * 0.001)))";
    wax.style.transform = "scale(calc(1 - ((var(--scrollY) - "+ b2_6 +") * 0.001)))";
    if (scrollY >= block2.offsetTop - 100){
      candle.style.transform = "scale(calc(1 - ((var(--scrollY) - "+ b2_6 +") * 0.001))) translateY(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * 0.5vh)) translateX(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * -0.033%))";
    }
    if (scrollY >= block2.offsetTop + 100){
      candle.style.transform = "scale(0.33) translateY(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * 0.5vh)) translateX(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * -0.033%))";
    }
  }
  else{
    candle.style.transform = "scale(1) translateY(0)";
    wax.style.transform = "scale(1)";
  }

  if(scrollY >= block2.offsetTop + 300){
    candle.style.transform = "scale(0.33) translateY(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * 0.5vh)) translateX(calc((var(--scrollY) - "+ (block2.offsetTop - 100) +") * -0.033%))";
  }
  // if(scrollY >= block2.offsetTop + 400){
  //   candle.style.transform = "scale(0.33) translateY(calc(90% + (var(--scrollY) - "+ (block2.offsetTop - 100) +") * 0.2vh)) translateX(-15.25%)";
  // }
  if(scrollY >= queen.offsetTop - 350){
    candle.style.transform = "scale(0.33) translateY(2050px) translateX(-15.25%)";
  }
 

  // if(scrollY >= block3.offsetTop - 700){
  //   candle.style.opacity = "calc( 1 - ((var(--scrollY) -  "+ (block3.offsetTop - 700) +") * 0.05))";
  // }

// opacity wax candle & wick candle
  if(scrollY >= block2.offsetTop - 300 && scrollY < block2.offsetTop){
    wax.style.opacity = "calc( 0 + ((var(--scrollY) - "+ (block2.offsetTop - 300) +") * 0.001))";
    wick.style.opacity = "calc( 0 + ((var(--scrollY) - "+ (block2.offsetTop - 300) +") * 0.001))";
  }
  else if(scrollY >= block2.offsetTop){
    wax.style.opacity = 0;
    wick.style.opacity = 0;
  }
  else{
    wax.style.opacity = 1;
    wick.style.opacity = 1;
  }


};

var vwWidth = window.innerWidth;
var controller = new ScrollMagic.Controller();

//for horizontal scrolling
var horizontalSlide = new TimelineMax()
  .to(".block1", 0.2, { x: 0, ease: Power1.easeOut })
  .to(".block1", 1, { x: -vwWidth, ease: Power1.easeOut })
  .to(".block1", 0.2, { x: -vwWidth, ease: Power1.easeOut });

new ScrollMagic.Scene({
  triggerElement: ".block1",
  duration: "350%",
  offset: 0,
  triggerHook: -0.02
})
  .setPin(".block1")
  .setTween(horizontalSlide)
  .addTo(controller);