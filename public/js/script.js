var canvas = document.getElementById('canvas')
  , context = canvas.getContext('2d')
  , images = {
    img: new Image(),
    img2: new Image()
  }
  , w
  , h
  , offset
  , glitchInterval
  , imgState = {
    state: "miss",
    pic: images.img
  }

canvas.addEventListener("click", function(){
  document.location.href = "mailto:anthony.thunder@gmail.com";
})
images.img.src = 'img/missingno2.png'
images.img2.src = "img/email.png"


for(var i in images){
  images[i].onload = function() {
    init();
  	window.onresize = init;
  };

}

var switchPic = function(){
  if(imgState.state === "miss"){
    imgState.pic = images.img2
    imgState.state = "email"
  } else {
    imgState.pic = images.img
    imgState.state = "miss"
  }
}

var init = function() {
	clearInterval(glitchInterval);
	canvas.width = w = window.innerWidth;
	offset = w * .1;
	canvas.height = h = ~~(200 * ((w - (offset * 2)) / imgState.pic.width));
  canvas.style.marginTop = ((window.innerHeight / 2) - (h/2)) + "px"
	glitchInterval = setInterval(function() {
		clear();
		context.drawImage(imgState.pic, 0, 110, imgState.pic.width, 175, offset, 0, w - (offset * 2), h);
		setTimeout(glitchImg, randInt(250, 1000));
	}, 500);
};

var clear = function() {
	context.rect(0, 0, w, h);
  context.fillStyle = "#fbecdc"
	context.fill();
};

var glitchImg = function() {
	for (var i = 0; i < randInt(1, 120); i++) {
		var x = Math.random() * w;
		var y = Math.random() * h;
		var spliceWidth = w - x;
		var spliceHeight = randInt(5, h / 3);
		context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
		context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
	}
  switchPic()
};

var randInt = function(a, b) {
	return ~~(Math.random() * (b - a) + a);
};
