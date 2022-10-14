let inputPass = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', showpassword);

function showpassword(){
    if(inputPass.type == 'password'){
        inputPass.type = 'text';
    }
    else{
        inputPass.type = 'password';
    };
};