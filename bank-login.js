document.getElementById('btn-submit').addEventListener('click', function(){
    // get email
    const emailInputField = document.getElementById('input-field1');
    const email = emailInputField.value;
    
    // get password
    const passwordInputField = document.getElementById('input-field2');
    const password = passwordInputField.value;

    // is email & password valid [amra eta use korbo na -- nutun ai jonno use kortasi]
if(email === 'abc@gmail.com' && password === '1234'){
    window.location.href= 'bank-inside.html'
}
else{
    alert('invalid user')
}

})