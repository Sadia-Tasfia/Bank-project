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
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // step:5- get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousbalanceTotalString =balanceTotalElement.innerText;
  const previousbalanceTotal = parseFloat(previousbalanceTotalString);

  // step:6- calculate the current balance
  const currentbalanceTotal = previousbalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText= currentbalanceTotal;
  
    // step: 7- clear the deposit field
    depositField.value = "";
});