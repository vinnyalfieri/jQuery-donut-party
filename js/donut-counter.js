$(function(){ 
  var donutCounter = new DonutCounter();
});

function DonutCounter(){
  this.$donutCount = $('#donuts h3 span');
  this.$guestCount = $('#guests h3 span');
  this.addListeners();
}

DonutCounter.prototype.addListeners = function() {
  this.addIncrementerListeners();
  this.addDecrementerListeners();
  this.addCheckListener();
};

DonutCounter.prototype.addIncrementerListeners = function() {
  $('#donuts button:first-of-type, #guests button:first-of-type').click(function(){
    var $span = $(this).parent().find("h3 span");
    $span.text( Number($span.text()) + 1 );
  });
};

DonutCounter.prototype.addDecrementerListeners = function() {
  $('#donuts button:last-of-type, #guests button:last-of-type').click(function(){
    var $span = $(this).parent().find("h3 span");
    if ( Number($span.text()) > 0 ) {
      $span.text( Number($span.text()) - 1 );
    }
  });
};

DonutCounter.prototype.addCheckListener = function() {
  var self = this;
  $('#check').click(function(){
    var donutCount = Number( self.$donutCount.text() ),
        guestCount = Number( self.$guestCount.text() );

    if (donutCount === 0 && guestCount === 0) {
      $('#status').text('Invite someone you jerk!');
    } else if ( donutCount > guestCount && guestCount === 0 ) {
      $('#status').text('Invite someone you jerk!');
    } else if ( donutCount > (guestCount * 4) ) {
      $('#status').text('ARE YOU TRYING TO KILL US ALL!?');
    } else if ( donutCount >= guestCount ) {
      $('#status').text('Guests are having a blast!');
    } else {
      $('#status').text('Guests are sad :(');
    }
  });
};