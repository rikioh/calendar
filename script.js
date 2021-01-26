// global variables
// variable for total hours in a day
var hours = 24
// variable to add hour id's to form fields
var stringTime = ["12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"]
// variable to add id's to save buttons
// var btnNum = ["0000","0100","0200","0300","0400","0500","0600","0700","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300"]
var btnVal = 0

// create 1 row for each hour for a total of 24 rows
for (i=0;i<hours;i++){
    // create row for the individual hour
    var timeRow = $("<div>");
    // create columns for time, info, and save button
    var hourCol = $("<div>")
    var infoCol = $("<div>")
    var saveCol = $("<div>")
    // Non editable hour text for each row
    var timeText = $("<h4>")
    // text area for infoCol
    var textArea = $("<textarea>")
    // save button
    var saveButton = $("<button>")
    // add class and Id's to columns in rows
    timeRow.addClass("row");
    timeRow.attr("id", "timeRow");
    hourCol.addClass("col-md-2")
    hourCol.attr("id", "hourCol")
    infoCol.addClass("col-md-7 form-group")
    infoCol.attr("id", "infoCol");
    saveCol.addClass("col-md-1")
    saveCol.attr("id", "saveCol")
    // add ID and style to timeText
    timeText.attr("id", "timeText")
    timeText.attr("style", "text-align: right")
    // add class and style to text area form
    textArea.addClass("form-control")
    textArea.attr("style", "background-color: #90EE90;")
    // add class/generic id to save button
    saveButton.addClass("btn btn-primary")
    saveButton.attr("id", "saveButton")
    // append row to main div
    $("#calendarRows").append(timeRow)
    // append columns to time Row div
    $("#timeRow").append(hourCol)
    $("#timeRow").append(infoCol)
    $("#timeRow").append(saveCol)
    // append hour text and text form to columns
    $("#hourCol").append(timeText)
    $("#infoCol").append(textArea)
    // append save button to save column
    $("#saveCol").append(saveButton)
    // set hour text in hour column
    $("#timeText").text(stringTime[i])
    $("#saveButton").text("Save")
    // remove generic id attributes for items for loop to continue working
    $("#timeText").removeAttr("id")
    $("#hourCol").removeAttr("id")
    $("#timeRow").removeAttr("id")
    $("#infoCol").removeAttr("id")
    $("#saveCol").removeAttr("id")
    $("#saveButton").removeAttr("id")
    // add unique ids/values to textArea and saveButton
    textArea.attr("id", stringTime[i])
    saveButton.attr("value", btnVal)
    // increase btnVal value for next save button
    btnVal++
}

$(".btn-primary").on("click", function() {
    // create variable equal to button value. 
    var matchVal = $(this).attr("value")
    // create variable equal to stringTime array index item of matchVal. This turns matchVal into the full time.
    var stringVal = stringTime[matchVal]
    
    // console.log($("textarea").eq(matchVal).val())
    // set local storage to the item in the corresponding text area for the button
    localStorage.setItem(stringVal,JSON.stringify($( "textarea" ).eq(matchVal).val()));

  });