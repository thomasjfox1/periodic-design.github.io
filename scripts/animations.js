jQuery(document).ready(function(){
  var analogclock = new analogClock();
  var colorbackground = new colorBackground();
  window.setInterval(function(){
    analogclock.run();
    colorbackground.run();
    }, 1000);
});

function analogClock(){}
analogClock.prototype.run = function() {
	// var date = new Date();
  // var second = date.getSeconds()* 6;
  // var minute = date.getMinutes()* 6 + second / 60;
  // var hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;
  setInterval(function() {
    function r(el, deg) {
      el.setAttribute('transform', 'rotate('+ deg +' 250 250)');
    }
    var d = new Date();
    r(sec, 6*d.getSeconds());
    r(min, 6*d.getMinutes());
    r(hour, 30*(d.getHours()%12) + d.getMinutes()/2);
  }, 1000);
};

function colorBackground(){}
colorBackground.prototype.run = function() {
  function checkTime(i) {
    if (i<10) {
      i = "0" + i;
    }
    return i;
  }
  var date = new Date();
  var h = checkTime(date.getHours());
  var m = checkTime(date.getMinutes());
  var s = checkTime(date.getSeconds());
  var twentyFour = 10.625;
  var sixty = 4.25;
  var c1 = Math.round(twentyFour*h).toString(16);
  var c2 = Math.round(sixty*m).toString(16);
  var c3 = Math.round(sixty*s).toString(16);

  while (c1.length != 2){
    c1 = "0"+c1;
  }
  while (c2.length != 2){
    c2 = "0"+c2;
  }
  while (c3.length != 2){
    c3 = "0"+c3;
  }
  $('body').css('background-color', "#" + c1 + c2 + c3);
};

window.setTimeout(function draw(){
  $('.center-logo').show(0).delay(2000).show();
  var first = new Vivus('center', {type : 'delayed', duration: 200});
  var second = new Vivus('text', {type : 'delayed'});
}, 2000);
