$(function(){ 
  var donutCounter = new DonutCounter();
});

// your code here

function DonutCounter(){
  this.addListenerForPlus();
  // DONT FORGET THIS!
  this.addListenerForMinus();
  this.addCheckListener();
  this.addResetListener();
}

DonutCounter.prototype.addListenerForPlus = function(){
  $("button.add").click(function(){
    var currentCount = $(this).parent().find("h3 span").text();

    var newCount = parseInt(currentCount) + 1;
    $(this).parent().find("h3 span").text(newCount);
    // debugger;
  }); //end .click()

}; //end addListenerForPlus


DonutCounter.prototype.addListenerForMinus = function(){
  $("button.remove").click(function(){
    var currentCount = $(this).parent().find("h3 span").text();
      if (eval(currentCount) > 0){
        var newCount = parseInt(currentCount) - 1;
        $(this).parent().find("h3 span").text(newCount);
      } else {

      }; //end if
  }); //end .click()

}; //end addListenerForMinus()

  
DonutCounter.prototype.addCheckListener = function() {
  $('#check > button:nth-child(1)').click(function(){
    var donutCount = Number( $('#donuts > h3 > span').text() ),
        guestCount = Number( $('#guests > h3 > span').text() );

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


DonutCounter.prototype.addResetListener = function() {
  $("#check > button:nth-child(2)").click(function(){
    $('#donuts > h3 > span').text(0);
    $('#guests > h3 > span').text(0);
  });
};

