
const inputbox = document.getElementById('password');
const length = 12;


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "%&#@{}*~!$^&*"

const allchars = uppercase +  lowercase + symbols + numbers;


function showpassword(){
    let password ='';
   password += uppercase [Math.floor(Math.random() * uppercase.length)];
   password += lowercase [Math.floor(Math.random() * lowercase.length)];
   password += numbers [Math.floor(Math.random() *numbers.length)];
   password += symbols [Math.floor(Math.random() *symbols.length)];

    while (length > password.length) {
        password += allchars [Math.floor(Math.random()* allchars.length)];
    }

    inputbox.value = password;

}

function copypassword(){
    inputbox.select();
    document.execCommand("copy")
}
