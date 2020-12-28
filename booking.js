function validate(){
    var name= document.getElementById('uname').value;
    var address= document.getElementById('uaddress').value;
    var email= document.getElementById('email').value;
    var street=document.getElementById('street').value;
    var country= document.getElementById('ucountry').value;
    var telephone= document.getElementById('tel').value;
    
    
    var comment= document.getElementById('com').value;
    
    var emailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

     if(name==""){
         alert("Please enter your name");
         return false;
     }
     
     if(address==""){
         alert("Please enter your address");
         return false;
     }

     if(email==""){
        alert("Please enter your email");
        return false;
    }
    else if(email.match(emailformat)){
        alert("email is valid");
    }
    else{
        alert("Email is invalid");
        return false;
    }
    
     if(street==""){
         alert("Please enter your street name");
         return false;
     }

     if(country==""){
         alert("Please enter your country name");
         return false;
     }
    
     if(telephone==""){
         alert("Telephone number is missing");
         return false;
     }
     else if(telephone.length=10 && !isNaN(telephone)){
        alert("valid number");
    }
    else{
        alert("Invalid number");
    }
    
    if(comment==""){
        alert("Please add comment");
        return false;
    }
    

}