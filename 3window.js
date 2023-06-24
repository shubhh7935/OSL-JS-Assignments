//PART 1: WINDOW

//FUCNTION DISPLAY THE CURRENT URL OF THE PAGE

function displayCurrentURL() {
  let URL = window.location.href;
  console.log("URL is : " + URL);
}
displayCurrentURL()

//FUNCTION OPEN A NEW WINDOW WHEN THE BUTTON IS CLICKED

function openNewWindow() {
  window.open("https://www.google.com/", "_blank", "width=500, height=400");
}

//openNewWindow() starts when button is clicked.
//window.open method opens a new window
//first parameter takes the link which will open
//_blank specifies that the window should open in a new tab
//third parameter specifies the features of the window


