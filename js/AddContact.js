window.addEventListener("DOMContentLoaded", (event) =>{
   
    const name=document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
    if(name.value.length == 0){
      textError.textContent ="";
      return;
    }
    try{
      checkName(name.value); 
      textError.textContent ="";
    }catch(e){
      textError.textContent = e;
    }
  });
})