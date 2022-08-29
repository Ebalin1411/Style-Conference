var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var commentError=document.getElementById('comment-error');
var submitError=document.getElementById('submit-error');
/*---------UserName Validation-----------*/

function validateName(){
    var userName=document.getElementById('contact-name').value;  
 
    if (userName == ""){        
        nameError.innerHTML="Please Enter your name";
        return false;
    }

    if (userName.length > 15){        
        nameError.innerHTML="Please type with in 15 letters";
        return false;
    }

    if(!userName.match(/^[A-Za-z]+$/)){  
        nameError.innerHTML="Please type Only alphabets";
        return false;
    }
       nameError.innerHTML='<i class="fa fa-check-circle"></i>';
        return true;
    
    }     
    /* email Validation */
    
    var  emailkey =document.querySelector('contact-email');

     emailkey.addEventListener('keyup',(e)=>{
    if (e.keycode === 13){
        validateEmail()
    }   
})

   
function validateEmail(){
    var email =document.getElementById('contact-email').value;
   
    if(email.length == ""){
        emailError.innerHTML='Enter email address'
         return false;          
    }
   
    if (!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        emailError.innerHTML='Enter a valid email address'
        return false;        
    }
    emailError.innerHTML='<i class="fa fa-check-circle"></i>'; 
      
    return true;
  
  } 
    
   /*  Comment box validation */

   var limitField =document.getElementById('commentTxt').value;  
   limitNum =200;

   function  limitText(limitField, limitNum) {

    if (limitField.value.length > limitNum) {
       commentError.innerHTML('You comments should not exceed 200 letters');
       return false;
    }
    else{
        commentError.innerHTML('<i class="fa fa-check-circle"></i>')
        return true;
    }
}     






