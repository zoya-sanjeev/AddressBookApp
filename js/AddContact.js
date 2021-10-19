window.addEventListener("DOMContentLoaded", (event) =>{
   
    const name=document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
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
})