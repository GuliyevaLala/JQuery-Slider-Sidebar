let left = $(".slider .left");
let right = $(".slider .right");

function rightSlider() {
  let activeImg = $(".active-img");
  activeImg.removeClass("active-img");
  if (activeImg.next().length > 0) {
    activeImg.next().addClass("active-img");
  } else {
    activeImg.parent().children().first().addClass("active-img");
  }
}

function leftSlider() {
  let activeImg = $(".active-img");
  activeImg.removeClass("active-img");
  if (activeImg.prev().length > 0) {
    activeImg.prev().addClass("active-img");
  } else {
    activeImg.parent().children().last().addClass("active-img");
  }
}

right.on("click", rightSlider);
left.on("click", leftSlider);

setInterval(rightSlider, 5000);

