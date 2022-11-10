function generate(){
     const myArray = new Uint32Array(1);
     let text = "";
     crypto.getRandomValues(myArray);

     for (const num of myArray) {
       text += num 
     }
     document.getElementById("password").value = text;
    }

function copy(){
     var copyText = document.getElementById("password");

     copyText.select();
     copyText.setSelectionRange(0,99999);

     navigator.clipboard.writeText(copyText.value);



}

        
   