var leapYear = function(userInput) {

  if (userInput % 4 === 0) {
    return true;
  } else if (userInput % 100 === 0) {
    return false;
  } else if (userInput % 400 === 0) {
    return true;
  } else {
    return false;
  }
};





$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("#year").val());
    var result = leapYear(year);

    if (result === false) {
      $("#answer").text(year + " is not a leap year.");
    } else {
      $("#answer").text(year + " is a leap year.");
    }
  });
});
