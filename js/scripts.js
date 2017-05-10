function Ticket(title, time, price) {
  this.movieTitle = title;
  this.showTime = time;
  this.ticketPrice = price;
};

// Ticket.prototype.getPrice = function()

// Ticket.prototype.generateTicket = function() {
//   return this.movieTitle + " at " + this.showTime;
// };

//determine price based on variables
// Ticket.prototype.

priceDetermine = function(movie, showtime, age) {
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

//User Interface Logic
//document ready shortcut
$(function() {
  $("form#ticket-picker").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("select#movie-title").val();
    var inputtedTime = $("select#movie-time").val();
    var inputtedAge = $("select#viewer-age").val();
    var calculatedPrice = priceDetermine(inputtedTitle, inputtedTime, inputtedAge)
    var selectedMovieName = $("#movie-title option:selected").attr('name');
    console.log(selectedMovieName);

    var newTicket = new Ticket(attributeName, inputtedTime, calculatedPrice);
    // console.log(calculatedPrice);
    // console.log(newTicket);

    // newTicket.priceDetermine()

  });
});
