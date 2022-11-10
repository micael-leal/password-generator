const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%¨&*()+-*/+.,<>;/~][';

function generate(length) {
    var len = document.getElementById("len").value;
    if (len < 1){
     alert("please choose a length greater than 0")
    }
    else{
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



        
   