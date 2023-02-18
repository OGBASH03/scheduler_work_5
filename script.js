// Sets the "currentDay" header to display the current date using the moment.js library
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do')); 
console.log(moment().hour());

// Defines an array of business hours
var block = [9,10,11,12,13,14,15,16,17]; 
// Initializes a counter variable and gets the current hour using moment.js
var i=0;
// Iterates over each row in the schedule table and adds a class to the textarea to indicate whether the event is in the past, present, or future
var currentHour= moment().hour()
$(".row").each(function(){
    if (currentHour>block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("past")

    }
    else if(currentHour===block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("present")
    }
    else {
        $(this).children(".col-sm-10").children("textarea").addClass("future")
    }
    $(this).children(".col-sm-10").children("textarea").val(localStorage.getItem(block[i])) // returns the value(events) of the Storage Object item
    i++

})

// Adds a click event listener to the save button to save the text of the corresponding textarea to local storage
$("input").on("click",function(){ 

  //var text=  $(this).parent(".col-sm-1").parent(".row").children(".col-sm-10").children("textarea").val()

  // Gets the value of the textarea and the corresponding data-id attribute and sets it as the value of the corresponding storage object item
  var text= $(this).parent(".col-sm-1").siblings(".col-sm-10").children("textarea").val()
  var id= $(this).parent(".col-sm-1").parent(".row").attr("data-id")
  localStorage.setItem(id,text)
})