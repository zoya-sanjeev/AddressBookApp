window.addEventListener("DOMContentLoaded", (event) =>{
   
    const name=document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', ()=>{
    if(name.value.length == 0){
      nameError.textContent ="";
      return;
    }
    try{
      checkName(name.value); 
      nameError.textContent ="";
    }catch(e){
      nameError.textContent = e;
    }
  });

    const phone=document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.tel-error');
    phone.addEventListener('input', ()=>{
    if(phone.value.length == 0){
      phoneError.textContent ="";
      return;
    }
    try{
      checkPhoneNumber(phone.value); 
      phoneError.textContent ="";
    }catch(e){
      phoneError.textContent = e;
    }
  });

    const address=document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', ()=>{
    if(address.value.length == 0){
      addressError.textContent ="";
      return;
    }
    try{
      checkAddress(address.value); 
      addressError.textContent ="";
    }catch(e){
      addressError.textContent = e;
    }
  });

});

const submit = (event) =>{

}
const reset = () =>{
    
}
