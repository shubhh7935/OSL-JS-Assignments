function calculateArea() {
  // Get the input values
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  // Calculate the area
  let area;
  if (length == 0 || width == 0) {
    area = "not possible";
  } else {
    area = length * width;
  }

  // Display the result
  document.getElementById("result").textContent =
    "Area of Rectangle is " + area;
}
