$(function(){ 
  var donutCounter = new DonutCounter();
});

function DonutCounter(){
  this.$donutCount = $('#donuts h3 span');
  this.$guestCount = $('#guests h3 span');
  this.addListeners();
}

DonutCounter.prototype.addListeners = function() {
  
};

DonutCounter.prototype.incrementerListeners = function() {
  $('#donuts button:first-of-type, #guests button:first-of-type').click(function(){
      var $span = $(this).parent().find("h3 span");
      $span.text( Number($span.text())++ );
    });
};