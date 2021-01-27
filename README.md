# calendar

**Name**: Rikio's daily calendar

Description and usage: This daily calendar is for an individuals single day event management. The calendar accounts for a work day's worth of hours between 8AM-6PM. This calendar is used by typing in data in the respective hour's text field. Once you have filled out the information you want to save, you press the adjacent save button to the right of the information field. Any hour that has passed will be grayed out but will still be accessible. The current hour is highlighted green and future hours are highlighted in blue. This site will save your data locally and will be populated with your previously saved data the next time you visit the website if it is during the same day. This website is refreshed and your locally saved data will be wiped every day at midnight PST.

**Visuals**: ![Expected output](./Assets/example.jpg "Expected output and user interaction") This image shows the example of the calendar in use.

**Technologies used**: HTML, Javascript, CSS, JQuery

**Link to deployed application**: https://rikioh.github.io/calendar/

**Expected behavior/acceptance criteria of javascript code**:

GIVEN I am using a daily planner to create a schedule<br>
WHEN I open the planner<br>
THEN the current day is displayed at the top of the calendar<br>
WHEN I scroll down<br>
THEN I am presented with time blocks for standard business hours<br>
WHEN I view the time blocks for that day<br>
THEN each time block is color-coded to indicate whether it is in the past, present, or future<br>
WHEN I click into a time block<br>
THEN I can enter an event<br>
WHEN I click the save button for that time block<br>
THEN the text for that event is saved in local storage<br>
WHEN I refresh the page<br>
THEN the saved events persist

