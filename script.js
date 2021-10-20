document.body.onscroll = function () {
  let scrollY = window.scrollY;

  let candle = document.getElementById("candle");
  let wax = document.getElementById("candleWax");
  let night = document.getElementById("night");
  
  let block1 = document.getElementById("block1");
  let blockCamp = document.getElementById("blockCampfire");
  let blockCandle = document.getElementById("blockCandle");
  let block2 = document.getElementById("block2");

  let scale = 1 - (scrollY - 2500) * 0.001;
  let blockOffTAndCampOffW = block1.offsetTop + blockCamp.offsetWidth;
  let scrollaftercand = block1.offsetTop + blockCamp.offsetWidth + blockCandle.offsetWidth + block2.offsetTop;

  document.querySelector("#yyy").innerText = scrollY;
  document.body.style.setProperty("--scrollY", scrollY);
  document.body.style.setProperty("--h", scrollY / 10);

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

  if(scrollY >= blockOffTAndCampOffW + 500){
    document.querySelector("#land").style.opacity = "calc( 1 - ((var(--scrollY) - 2000) * 0.001))";
    document.getElementsByClassName("fire-sub")[0].style.opacity = "calc( 0 + ((var(--scrollY) - 3200) * 0.001))";
  }


  if(scrollY >= block2.offsetTop){
    document.querySelector("#land").style.position = "static";
  }
else{
  document.querySelector("#land").style.position = "fixed";
}
  // if (scrollY >= block1.offsetTop + blockCamp.offsetWidth + blockCandle.offsetWidth - 500) {
  //   document.getElementsByClassName("fire-sub")[0].style.opacity = "calc( 0 + ((var(--scrollY) - 4500) * 0.001))";
  // }
  // if (scrollY >= 1600 && scrollY < 2500) {
  //   document.getElementsByClassName("fire-sub")[0].style.opacity = "1";
  // }

  // if (scrollY == block2.offsetTop) {
  //   alert();
  //   candle.style.transform =
  //     "scale(calc(1 - ((var(--scrollY) - 4500) * 0.001)))";
  //   wax.style.transform = "scale(calc(1 - ((var(--scrollY) - 2500) * 0.001)))";
  // } else if (scrollY > 3001) {
  //   candle.style.transform = "scale(0.5)";
  //   wax.style.transform = "scale(0.5)";
  // } else {
  //   candle.style.transform = "scale(1)";
  //   wax.style.transform = "scale(1)";
  // }

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