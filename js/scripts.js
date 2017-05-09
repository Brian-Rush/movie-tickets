function Ticket(title, time, price) {
  this.movieTitle = title;
  this.showTime = time;
  this.ticketPrice = price;
};

//determine price based on variables
var priceDetermine = function(movie, showtime, age) {
  if (age == "a" || showtime == "a" || showtime == "b" || (age == "c" && movie == "old")) {
    var price = 5
  } else if (age == "b" && movie == "old") {
    var price = 6.50
  } else if (age == "c" && movie == "first-run") {
    var price = 8
  } else {
    var price = 10
  }
  return price;
};
$(function() {
  $("form#ticket-picker").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("select#movie-title").val();
    var inputtedTime = $("select#movie-time").val();
    var inputtedAge = $("select#viewer-age").val();
    var calculatedPrice = priceDetermine(inputtedTitle, inputtedTime, inputtedAge)
    var attributeName = $("#movie-title option:selected").attr('name');
    console.log(attributeName);

    // function(x) {
    //   $( "option[name='Hot Fuzz']" )
    // };
    var newTicket = new Ticket(attributeName, inputtedTime, calculatedPrice);
    // console.log(calculatedPrice);
    console.log(newTicket);
  });

});
