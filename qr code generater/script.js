let inputBox = document.getElementById('inputbox');
let imgBox = document.getElementById('imgbox');
let image = document.getElementById('image');


function generateQr(){
   
    if(inputBox.value.length > 0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value ;
        imgBox.classList.add("show-img");
    }
    else{
        inputBox.classList.add('error');

        setTimeout(function(){
            inputBox.classList.remove('error');
        },1000)
    }

}