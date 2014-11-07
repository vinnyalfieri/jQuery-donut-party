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