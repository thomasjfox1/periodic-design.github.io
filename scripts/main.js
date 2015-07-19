// javascript wizardry

$(function(){
  $('.center-logo').css('position','absolute');
  $('.center-logo').css('top', Math.max(0, (($(window).height() - $('.center-logo').outerHeight()) / 2) + $(window).scrollTop()) + "px");
  $('.center-logo').css('left', Math.max(0, (($(window).width() - $('.center-logo').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  $(window).resize(function() {
    $('.center-logo').css('position','absolute');
    $('.center-logo').css('top', Math.max(0, (($(window).height() - $('.center-logo').outerHeight()) / 2) + $(window).scrollTop()) + "px");
    $('.center-logo').css('left', Math.max(0, (($(window).width() - $('.center-logo').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  });
});

$(function(){
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $('body').css('height', viewportHeight + 'px');
  $('body').css('width', viewportWidth + 'px');

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('body').css('height', viewportHeight + 'px');
      $('body').css('width', viewportWidth + 'px');
  });
});

function svg_animation(){
  // new Vivus('center', {type: "oneByOne"});
}

svg_animation();
