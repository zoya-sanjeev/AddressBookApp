let contactObj ={};

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

const save = (event) =>{
    console.log("in save");
    event.preventDefault();
    try{
        setContactObject();
        createAndUpdateStorage();
    }catch(e){
        console.log(e);
    }
}
const reset = () =>{

}

setContactObject = () => {
    contactObj.name = getInputValue("#name");
    contactObj.address = getInputValue("#address");
    contactObj.phone = getInputValue("#phoneNumber");
    contactObj.city = getInputValue("#city");
    contactObj.state = getInputValue("#state");
    contactObj.pincode = getInputValue("#zip");
}

createAndUpdateStorage = () => {
    console.log(contactObj);
    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if (contactList) {
        contactList.push(contactObj);
    } else {
        contactList = [contactObj];
    }
    localStorage.setItem("ContactList", JSON.stringify(contactList));
    alert(contactObj);
}

const getInputValue = (selector) => {
    let value = document.querySelector(selector).value;
    return value;
  }
