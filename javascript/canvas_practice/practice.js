document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, 300, 300);
  
  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
});
