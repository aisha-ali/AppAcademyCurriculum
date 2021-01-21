document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "pink";
  ctx.fillRect(100, 100, 300, 300);

});
