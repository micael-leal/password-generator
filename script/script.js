function generate(length) {
    var len = document.getElementById("len").value;
    numbersCheck = document.getElementById("numbers");
    lettersCheck = document.getElementById("letters");
    symbolsCheck = document.getElementById("symbols");

    if (len < 1){
     alert("please choose a length greater than 0")
    }
    else if (numbersCheck.checked && lettersCheck.checked == false && symbolsCheck.checked == false){
     const characters ='0123456789';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (lettersCheck.checked && numbersCheck.checked == false && symbolsCheck.checked == false){
     const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (symbolsCheck.checked && lettersCheck.checked == false && numbersCheck.checked == false){
     const characters ='!@#$%&*_-.';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (lettersCheck.checked && numbersCheck.checked && symbolsCheck.checked == false){
     const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (lettersCheck.checked && numbersCheck.checked && symbolsCheck.checked){
     const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_-.';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (lettersCheck.checked && numbersCheck.checked == false && symbolsCheck.checked){
     const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*_-.';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
    else if (lettersCheck.checked ==false && numbersCheck.checked && symbolsCheck.checked){
     const characters ='0123456789!@#$%&*_-.';
     let result = '';
     const charactersLength = characters.length;
     for (let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     document.getElementById("password").value = result;
     console.log(generate(len)); 
    }
}

function copy(){
     var copyText = document.getElementById("password");

     copyText.select();
     copyText.setSelectionRange(0,99999);

     navigator.clipboard.writeText(copyText.value);
}



        
   