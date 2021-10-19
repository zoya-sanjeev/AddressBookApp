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
})
