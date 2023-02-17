function valueFromTitle(id) {
  const titleId = document.getElementById(id).innerText;
  return titleId;
}

function takeValueFromText(idName) {
  const element = document.getElementById(idName);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}
function takeValueFromInput(InputIdName) {
  const element = document.getElementById(InputIdName);
  const elementString = element.value;
  const elementValue = parseFloat(elementString);
  return elementValue;
}
function displayData(productName, productPrice, productQuantity, totalPrice) {
  const table_container = document.getElementById('table_container');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${totalPrice}</td>
    
    `;
  table_container.appendChild(tr);
}
// first Card
let serial = 0;
document
  .getElementById('first_card_btn')
  .addEventListener('click', function () {
    serial += 1;
    // get the Data
    const productName = valueFromTitle('first_name');
    const productPrice = takeValueFromText('first_price');

    const productQuantity = takeValueFromText('first_quantity');
    const totalPrice = productPrice * productQuantity;

    // Show the data
    displayData(productName, productPrice, productQuantity, totalPrice);
  });

//   second card
document
  .getElementById('second_card_btn')
  .addEventListener('click', function () {
    serial += 1;
    const productName = valueFromTitle('second_name');
    const productPrice = takeValueFromText('second_price');

    const productQuantity = takeValueFromText('second_quantity');
    const totalPrice = productPrice * productQuantity;

    // Show the data
    displayData(productName, productPrice, productQuantity, totalPrice);
  });

//   third card
document
  .getElementById('third_card_btn')
  .addEventListener('click', function () {
    serial += 1;
    const productName = valueFromTitle('third_name');
    const productPrice = takeValueFromText('third_price');

    const productQuantity = takeValueFromText('third_quantity');
    const totalPrice = productPrice * productQuantity;

    // Show the data
    displayData(productName, productPrice, productQuantity, totalPrice);
  });
//   forth card
document
  .getElementById('forth_card_btn')
  .addEventListener('click', function () {
    serial += 1;
    const productName = valueFromTitle('forth_name');
    const productPrice = takeValueFromText('forth_price');

    const productQuantity = takeValueFromText('forth_quantity');
    const totalPrice = productPrice * productQuantity;

    // Show the data
    displayData(productName, productPrice, productQuantity, totalPrice);
  });
// fith card

document
  .getElementById('fifth_card_btn')
  .addEventListener('click', function () {
    serial += 1;
    const productName = valueFromTitle('fifth_name');
    const productPrice = takeValueFromInput('price_input');
    const productQuantity = takeValueFromInput('quantity_input');
    const totalPrice = productPrice * productQuantity;
    displayData(productName, productPrice, productQuantity, totalPrice);
  });
