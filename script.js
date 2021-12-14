// Intro Book
let next = document.querySelector("#f1");
let book = document.getElementById("book");
let start = document.getElementById("btn-start");
let paper1 = document.querySelector("#p1");

// Event Listener
next.addEventListener("click", goNextPage);
start.addEventListener("click", goToBook);

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goToBook() {
  document.querySelector("#first-page").style.display = "none";
  book.style.display = "flex";
}


// scrolling horizontal
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
 
// scrolling action
document.body.onscroll = function () {
  let scrollY = window.scrollY;

  let candle = document.getElementById("candle");
  let wick = document.getElementById("wick");
  let wax = document.getElementById("candleWax");
  let night = document.getElementById("night");
  let queen = document.getElementById("queen");
  let prism = document.getElementById("prism");
  let light1 = document.getElementById("light1");
  let lightspec = document.getElementsByClassName("light");
  let space2 = document.getElementById("space2");
  let blocklight = document.getElementById("blocklight");
  let smoke = document.getElementById("smoke");
  
  let blockSunstar = document.getElementById("blockSunstar");
  let block1 = document.getElementById("block1");
  let blockCamp = document.getElementById("blockCampfire");
  let block2 = document.getElementById("block2");
  let block5 = document.getElementById("block5");
  let block7 = document.getElementById("block7");
  let block8 = document.getElementById("block8");
  let block9 = document.getElementById("block9");
  let block10 = document.getElementById("block10");

  let blockOffTAndCampOffW = block1.offsetTop + blockCamp.offsetWidth;

  document.querySelector("#yyy").innerText = scrollY;
  document.body.style.setProperty("--scrollY", scrollY);
  document.body.style.setProperty("--h", scrollY / 10);
  document.body.style.setProperty("--prismTop", block5.offsetTop);

  // button Sun
  if(scrollY >= blockSunstar.offsetTop - 100 && scrollY < blockSunstar.offsetTop + 1200){
    document.getElementById("titleSun").style.display = "block";
    document.getElementById("titleSun").style.opacity = 1;
  }else{
    document.getElementById("titleSun").style.display = "none";
    document.getElementById("titleSun").style.opacity = 0;
  }

  // button Moon and Star
  if(scrollY >= blockSunstar.offsetTop + 1200 && scrollY < blockSunstar.offsetTop + 2300){
    document.getElementById("titleMoonStar").style.display = "block";
    document.getElementById("titleMoonStar").style.opacity = 1;
  }else{
    document.getElementById("titleMoonStar").style.display = "none";
    document.getElementById("titleMoonStar").style.opacity = 0;
  }

  //button Campfire
  if(scrollY >= blockSunstar.offsetTop + 2300 && scrollY < block2.offsetTop){
    document.getElementById("titleCamp").style.display = "block";
    document.getElementById("titleCamp").style.opacity = 1;
  }else{
    document.getElementById("titleCamp").style.display = "none";
    document.getElementById("titleCamp").style.opacity = 0;
  }

  //button Candle
  if(scrollY >= blockOffTAndCampOffW + 2000){
    document.getElementById("titleCandle").style.display = "block";
    document.getElementById("titleCandle").style.opacity = 1;
  }else{
    document.getElementById("titleCandle").style.display = "none";
    document.getElementById("titleCandle").style.opacity = 0;
  }
  
  //button Torch
  if(scrollY >= queen.offsetTop - 350 && scrollY < queen.offsetTop + queen.offsetHeight){
    document.getElementById("titleTorch").style.display = "block";
    document.getElementById("titleTorch").style.opacity = 1;
  }
  else{
    document.getElementById("titleTorch").style.display = "none";
    document.getElementById("titleTorch").style.opacity = 0;
  }

  //button Oil Lamp
  if(scrollY >= queen.offsetTop + queen.offsetHeight && scrollY < block5.offsetTop - 300){
    document.getElementById("titleOil").style.display = "block";
    document.getElementById("titleOil").style.opacity = 1;
  }
  else{
    document.getElementById("titleOil").style.display = "none";
    document.getElementById("titleOil").style.opacity = 0;
  }

  //button Prism
  if(scrollY >= block5.offsetTop && scrollY < block5.offsetTop + (block5.offsetHeight/1.35)){
    document.getElementById("titlePrism").style.display = "block";
    document.getElementById("titlePrism").style.opacity = 1;  
  }else{
    document.getElementById("titlePrism").style.display = "none";
    document.getElementById("titlePrism").style.opacity = 0;
  }

  //button Gas Lamp
  if(scrollY >=  block7.offsetTop - 300 && scrollY < block8.offsetTop + (space2.offsetHeight/2)){
    document.getElementById("titleGas").style.display = "block";
    document.getElementById("titleGas").style.opacity = 1;  
  }else{
    document.getElementById("titleGas").style.display = "none";
    document.getElementById("titleGas").style.opacity = 0;
  }

  //button Light Bulb
  if(scrollY >= block8.offsetTop + space2.offsetHeight && scrollY < block8.offsetTop + space2.offsetHeight + 2000){
    document.getElementById("titleLightB").style.display = "block";
    document.getElementById("titleLightB").style.opacity = 1; 
  }else{
    document.getElementById("titleLightB").style.display = "none";
    document.getElementById("titleLightB").style.opacity = 0; 
  }

  //button LED
  if(scrollY >= block8.offsetTop + space2.offsetHeight + 2800 && scrollY < block8.offsetTop + space2.offsetHeight + 5000){
    document.getElementById("titleLed").style.display = "block";
    document.getElementById("titleLed").style.opacity = 1;
  }else{
    document.getElementById("titleLed").style.display = "none";
    document.getElementById("titleLed").style.opacity = 0;
  }

  //button Fluo
  if(scrollY >= block8.offsetTop + space2.offsetHeight + 6000 && scrollY < block9.offsetTop - 1000){
    document.getElementById("titleFlu").style.display = "block";
    document.getElementById("titleFlu").style.opacity = 1;
  }else{
    document.getElementById("titleFlu").style.display = "none";
    document.getElementById("titleFlu").style.opacity = 0;
  }

  //button Spotlight
  if(scrollY >= block9.offsetTop && scrollY < block9.offsetTop + blocklight.offsetHeight){
    document.getElementById("titleSpot").style.display = "block";
    document.getElementById("titleSpot").style.opacity = 1;
  }else{
    document.getElementById("titleSpot").style.display = "none";
    document.getElementById("titleSpot").style.opacity = 0;
  }

  //button Laser
  if(scrollY >= block9.offsetTop + blocklight.offsetHeight + 500 && scrollY < block10.offsetTop - 150){
    document.getElementById("titleLaser").style.display = "block";
    document.getElementById("titleLaser").style.opacity = 1;
  }else{
    document.getElementById("titleLaser").style.display = "none";
    document.getElementById("titleLaser").style.opacity = 0;
  }

// change #night bg, #land bg & opacity fire candle
  if (scrollY >= night.offsetTop) {
    document.querySelector("#night").style.backgroundImage =
      "url('https://static.typingclub.com/m/tpmedia/img/sky2.png')";
  } 
  else {
    document.querySelector("#night").style.backgroundImage = "url('')";  
    document.getElementsByClassName("fire-sub")[0].style.opacity = "0";
  }

// reduce opacity mountain and campfire
  if(scrollY >= blockOffTAndCampOffW + 500){
    document.querySelector("#land").style.opacity = "calc( 1 - ((var(--scrollY) - 6000) * 0.001))";
    document.getElementsByClassName("fire-sub")[0].style.opacity = "calc( 0 + ((var(--scrollY) - 4500) * 0.001))";
  }

// change position mountain from fixed to static 
  if(scrollY <= blockSunstar.offsetTop || scrollY >= block2.offsetTop){
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
  if(scrollY >= queen.offsetTop - 350){
    candle.style.transform = "scale(0.33) translateY(2050px) translateX(-15.25%)";
  }
 
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

// opacity smoke
  if(scrollY >= queen.offsetTop){
    smoke.style.opacity = 1;
  }
  else{
    smoke.style.opacity = 0;
  }

// opacity black
  if(scrollY >= block5.offsetTop){
    prism.style.opacity = 1;  
  }else{
    prism.style.opacity = 0;
  }

// prism width increase ad reduce
  if(scrollY >= block5.offsetTop && scrollY < block5.offsetTop + 900){
    light1.style.width = "calc( ((var(--scrollY) - var(--prismTop)) * 0.05%)";
  }
  if(scrollY >= block5.offsetTop + 1000 && scrollY < block5.offsetTop + 3000){
    light1.style.width = "50%";
    for (let i = 0; i < 7; i++) {
      lightspec[i].style.width = "calc( ((var(--scrollY) - " + (block5.offsetTop + 900) + ") * 1px) + 1px)";
    }
  }
  if(scrollY >= block5.offsetTop + 3000){
    for (let j = 0; j < 7; j++) {
      lightspec[j].style.width = "60%";
    }
  }

// light bulb 
  if(scrollY < block8.offsetTop + space2.offsetHeight){
    document.getElementById("lightneon").style.boxShadow = "0 0 50px 10px #fae30e";
  }
  if(scrollY >= block8.offsetTop + space2.offsetHeight){
    document.getElementById("lightline").style.width =  "5.25vw";
    document.getElementById("lightneon").style.animation = "effect1 1 2s";
    document.getElementById("lightneon").style.boxShadow = "0 0 300px 60px #fae30e";
  }
  else{
    document.getElementById("lightline").style.width =  "0vw";
    document.getElementById("lightneon").style.animation = "effect2 1 2s";
  }

  if(scrollY >= block8.offsetTop + space2.offsetHeight + 1500 && scrollY <= block8.offsetTop + space2.offsetHeight + 2500){
    document.getElementById("lightline").style.opacity = "calc( 1 - ((var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 1500) +") * 0.001))";
    document.getElementById("lightneon").style.opacity = "calc( 1 - ((var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 1500) +") * 0.001))";
    document.getElementById("lightbulb").style.opacity = "calc( 1 - ((var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 1500) +") * 0.001))";
  }
  if(scrollY > block8.offsetTop + space2.offsetHeight + 2500){
    document.getElementById("lightline").style.opacity = 0;
    document.getElementById("lightneon").style.opacity = 0;
    document.getElementById("lightbulb").style.opacity = 0;
  }

  // led light
  if(scrollY >= block8.offsetTop + space2.offsetHeight + 2500 && scrollY <= block8.offsetTop + space2.offsetHeight + 3500){
    document.getElementById("ledbulb").style.opacity = "calc( ((0 + var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 2500) +") * 0.001))";
  }
  if(scrollY >= block8.offsetTop + space2.offsetHeight + 3500 && scrollY <= block8.offsetTop + space2.offsetHeight + 5000){
    document.getElementById("ledbulb").style.top = "27%";
    document.getElementById("bulbbase").style.opacity = 1;
    document.getElementById("ledbulb").style.opacity = 1;
    document.getElementById("ledbulb").style.transform = "scale(1, 1)";
  }

  if(scrollY >= block8.offsetTop + space2.offsetHeight + 5000 && scrollY <= block8.offsetTop + space2.offsetHeight + 6000){
    document.getElementById("ledbulb").style.transform = "scale(5, 0.15)";
    document.getElementById("ledbulb").style.top = "35%";
    document.getElementById("bulbbase").style.opacity = "calc( ((1 - var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 5000) +") * 0.001))";
    document.getElementById("ledbulb").style.opacity = 1;
   }

   if(scrollY >= block8.offsetTop + space2.offsetHeight + 6000 && scrollY <= block8.offsetTop + space2.offsetHeight + 7000){
    document.getElementById("bulbbase").style.opacity = 0;
    document.getElementById("ledbulb").style.opacity = "calc( ((1 - var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 6000) +") * 0.001))";
    document.getElementById("flu_img").style.opacity = "calc( ((0 + var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 6000) +") * 0.001))";
   }

   if(scrollY >= block8.offsetTop + space2.offsetHeight + 7000 && scrollY <= block8.offsetTop + space2.offsetHeight + 8500){
    document.getElementById("flu_img").style.opacity = 1;
   }

   if(scrollY >= block8.offsetTop + space2.offsetHeight + 8500 && scrollY <= block8.offsetTop + space2.offsetHeight + 9500){
    document.getElementById("flu_img").style.opacity = "calc( ((1 - var(--scrollY) - "+ (block8.offsetTop + space2.offsetHeight + 8500) +") * 0.001))";
   }
   
   //als
   if(scrollY >= block9.offsetTop){
     document.getElementById("blockrelative").style.opacity = 1;
   }
   else{
    document.getElementById("blockrelative").style.opacity = 0;
   }

   //laser
   if(scrollY >= block9.offsetTop + blocklight.offsetHeight + 1000){
    document.getElementById("blockrelative").style.perspective = "2000px";
    document.getElementById("blockrelative").style.height = "2px";
    document.getElementById("blockrelative").style.width = "";
    document.getElementById("blockrelative").style.transform = "rotatez(25deg)";
    document.getElementById("blockrelative").style.marginLeft = "-3%";

    document.getElementById("als").style.width = "1050%";
    document.getElementById("als").style.height = "100%";
    document.getElementById("als").style.padding = "5%";
    document.getElementById("als").style.backgroundImage = "linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255,0,0,1) 100%)";
   }
   else{
    document.getElementById("blockrelative").style.perspective = "100px";
    document.getElementById("blockrelative").style.height = "200px";
    document.getElementById("blockrelative").style.width = "200px";
    document.getElementById("blockrelative").style.transform = "rotatez(40deg)";
    document.getElementById("blockrelative").style.marginLeft = "3%";

    document.getElementById("als").style.width = "100%";
    document.getElementById("als").style.height = "80%";
    document.getElementById("als").style.padding = "15%";
    document.getElementById("als").style.backgroundImage = "linear-gradient(to right,rgba(255, 255, 255, 0.9), rgba(255,255,255,0.5) 70%, transparent)";
   }
};

// Outro Book
let nextBtn = document.querySelector("#next-btn");
let book2 = document.querySelector("#book2");

let pp1 = document.querySelector("#pp1");
let pp2 = document.querySelector("#pp2");
let pp3 = document.querySelector("#pp3");

nextBtn.addEventListener("click", goNextPage2);

let currentLocation2 = 1;
let numOfPapers2 = 3;
let maxLocation2 = numOfPapers2 + 1;

function closeBook2(isAtBeginning) {
  if (isAtBeginning) {
    book2.style.transform = "translateX(0%)";
  } else {
    book2.style.transform = "translateX(100%)";
  }
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage2() {
  if (currentLocation2 < maxLocation2) {
    switch (currentLocation2) {
      case 1:
        pp2.classList.add("flipped");
        pp2.style.zIndex = 2;
        break;
      case 2:
        pp3.classList.add("flipped");
        pp3.style.zIndex = 3;
        nextBtn.remove();
        closeBook2(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation2++;
  }
}