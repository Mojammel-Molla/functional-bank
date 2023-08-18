function getInputFieldById(InputFieldId) {
  const InputField = document.getElementById(InputFieldId);
  const InputFieldValue = InputField.value;
  const InputFieldAmount = parseFloat(InputFieldValue);
  InputField.value = '';
  return InputFieldAmount;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const elementAmount = parseFloat(elementValue);
  return elementAmount;
}


function setElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


document.getElementById('deposit-btn').addEventListener('click', function () {
  const newDepositAmount = getInputFieldById('deposit-field');
  
  if (isNaN(newDepositAmount)) {
    alert('Please provide a valid amount')
    return;
   }
   const previousDepositAmount = getElementTextById('deposit-balance');
   const depositTotal = previousDepositAmount + newDepositAmount;
   setElementById('deposit-balance', depositTotal);
   const balanceTotal = getElementTextById('total-balance');
   const newBalanceTotal = balanceTotal + newDepositAmount;
   setElementById('total-balance', newBalanceTotal);
 })


document.getElementById('withdraw-btn').addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldById('withdraw-field');
  if (isNaN(newWithdrawAmount)) {
    alert('Please provide a valid amount')
    return;
   }
  const previousWithdrawAmount = getElementTextById('withdraw-balance');
  const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setElementById('withdraw-balance', withdrawTotal);
  const balanceTotal = getElementTextById('total-balance');

  const newWithdrawTotal = balanceTotal - newWithdrawAmount;
  setElementById('total-balance', newWithdrawTotal);

})