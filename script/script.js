function generate(){
     const password = Math.floor(Math.random() * 2000000000);
     document.getElementById("password").value = password
    }

function copy(){
     var copyText = document.getElementById("password");

     copyText.select();
     copyText.setSelectionRange(0,99999);

     navigator.clipboard.writeText(copyText.value);



}

        
   