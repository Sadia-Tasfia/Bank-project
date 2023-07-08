// step:1 - add event listener
document.getElementById("btn-deposit").addEventListener('click', function(){

  // step:2 - get the deposit amount from the the deposit input field
  // for input field use .value to get the amount/text from the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString =depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  

  // step:3- get the deposit total amount
  // for non input(element/input/textarea) use innerText to get the amount/text 
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  depositTotalElement.innerText = newDepositAmount;

  // step:4- add numbers to set the total deposit
  const currentDepositTotal = newDepositAmount + previousDepositTotal;
  depositTotalElement.innerText = currentDepositTotal;

  // step:5- get balance current total
    // step: 7- clear the deposit field
    depositField.value = "";
});