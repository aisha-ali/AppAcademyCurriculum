/* jshint esversion: 6 */

function View($el) {
  this.$el = $el;
  this.setupEasel();
}

window._randomColorString = function () {
  return '#' + Math.random().toString(16).substr(-6);
};

View.prototype.exercise0 = function () {
  $('li').removeClass("square");
};

View.prototype.exercise1 = function () {
  $("li").addClass("orange");
};

View.prototype.exercise2 = function () {
  $('.square').remove();
};

View.prototype.exercise3 = function () {
  const h1 = $("<h1>").text("I love jQuery");
  $("#easel").append(h1);
};

View.prototype.exercise4 = function () {
  $(".square:nth-child(even)").text("Jeff");
};

View.prototype.exercise5 = function () {
  $('.square').on("click", e => {
    const $sq = $(e.currentTarget);
    alert($sq.attr("data-pos"));
  });
};

View.prototype.exercise6 = function () {
  $('.square').each((idx, el) => {
    var $sq = $(el);
    $sq.css("background-color", _randomColorString());
  })
};

View.prototype.exercise7 = function () {
  $('#easel').on("mouseenter", ".square", e => {
    const $sq = $(e.currentTarget);
    console.log($sq.css("background-color"));
  });
};


module.exports = View;


