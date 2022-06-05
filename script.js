function multiply(index) {
  const table = document.getElementById("myTable")
  const row = table.querySelectorAll('tr')[index]
  const form1 = row.querySelector('form')
  var multiplicand = form1.elements["multiplicand"].value;
  var multiplier = form1.elements["multiplier"].value;
  var product = multiplicand * multiplier;
  console.log(product)
  row.querySelector("label[my-label]").textContent = "= " + product; 
};