// calculate deposite unite

// get deposit btn
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputBalanceString = depositInput.value;
    const depositInputBalance = parseFloat(depositInputBalanceString);

    // if()

    // set new deposit
    const currentDeposit = document.getElementById('new-deposit');
    const previousDepositString = currentDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    const newDeposit = previousDeposit + depositInputBalance ;
    currentDeposit.innerText = newDeposit;
    
    
    // set new total balance for deposit
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceString = mainBalance.innerText
    const mainTotalBalance = parseFloat(mainBalanceString)
    const newMainBalance = mainTotalBalance + depositInputBalance;
    mainBalance.innerText = newMainBalance

    // auto input refresh
    depositInput.value = '';
})

// calculate withdraw unite

// get withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawBalanceString = withdrawInput.value;
    const withdrawInputBalance = parseFloat(withdrawBalanceString)

    // set new withdraw
    const newWithdraw = document.getElementById('new-withdraw');
    const previousWithdrowString = newWithdraw.innerText
    const previousWithdraw = parseFloat(previousWithdrowString)
    const totalWithdrawBalance = previousWithdraw + withdrawInputBalance
    newWithdraw.innerText = totalWithdrawBalance
    
    
    // set new total balance for withdraw
    const mainBalance = document.getElementById('main-balance');
    const withdrawMainBalanceString = mainBalance.innerText
    const withdrawMainBalance = parseFloat(withdrawMainBalanceString)
    const mainBalanceRemain = withdrawMainBalance - withdrawInputBalance;
    mainBalance.innerText = mainBalanceRemain
    // newMainBalance.innerHTML = mainBalance.innerText + newDeposit.innerText;

    // auto input refresh
    withdrawInput.value = '';
})