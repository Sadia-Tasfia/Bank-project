// step:1 - add event listener
document.getElementById("btn-withdraw").addEventListener('click',function(){
  // step:2- get the withdraw amount from the input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step:3- get the previous withdraw
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  withdrawTotalElement.innerText = newWithdrawAmount;
  // step:4- calculate total withdraw
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step:5-get the previous total balance amount
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString =balanceTotalElement.innerText;
  const previousbalanceTotal = parseFloat(previousBalanceTotalString);

  // step:6 -calculate the new balance and set the new balance
  const currentbalanceTotal = previousbalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentbalanceTotal;

  // step: 7- clear the withdraw field
  withdrawField.value = " ";
});