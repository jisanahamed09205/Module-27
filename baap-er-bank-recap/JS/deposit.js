// Step-1:
document.getElementById('btn-deposit').addEventListener('click',function(){
    // Step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step-3:
    depositField.value = '';
    // Step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // Step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step-7:
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;
    
});