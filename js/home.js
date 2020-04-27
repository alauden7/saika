var saika = new Image();
var moon = new Image();
var orbital = new Image();
function init() {
  saika.src = "/Users/anyalaudenslager/Saika/Saika-text.png";
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  orbital.src = "/Users/anyalaudenslager/Desktop/SAIKA/public/images/Orbital-2.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 500, 500); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 255)';
  ctx.save();
  ctx.translate(150, 150);

  // orbital
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(110, 0);
  ctx.drawImage(orbital, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();
 
  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150, 150, 110, 0, Math.PI * 2, false); // orbital rotation
  ctx.stroke();
 
  ctx.drawImage(saika, 0, 0, 280, 280);

  window.requestAnimationFrame(draw);
}

init();

// experiment for later:
// var logo = document.getElementById("logo");
// logo.addEventListener("click", function() {
//   console.log("hello");
//   logo.classList.add("invisible");
// });