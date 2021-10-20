let contactObj ={};
let isUpdate = false;
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

  checkForUpdate();

});

const checkForUpdate = () =>{
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson ? true : false;
    if(!isUpdate) return;
    contactObj = JSON.parse(contactJson);
    setForm();
}

const setForm = () => {
    setValue('#name', contactObj.name);
    setValue('#phoneNumber', contactObj.phone);
    setValue('#address', contactObj.address);
    setValue('#city', contactObj.city);
    setValue('#state', contactObj.state);
    setValue('#zip', contactObj.pincode);
}

const save = (event) =>{
    event.preventDefault();
    event.stopPropagation();
    try{
        setContactObject();
        if(site_properties.use_local_storage.match("true")){
        createAndUpdateStorage();
        window.location.replace(site_properties.home_page);
        }
        else{
            createOrUpdateContact();
        }
    }catch(e){
        console.log(e);
    }
}

const createOrUpdateContact = () =>{
    let postUrl = site_properties.server_url;
    let methodCall = "POST";
    if(isUpdate){
        methodCall = "PUT"
        postUrl = postUrl + contactObj.id.toString();
    }
    makeServiceCall(methodCall,postUrl, true, contactObj)
        .then(responseText => {
            window.location.replace(site_properties.home_page);
        })
        .catch(error =>{
            throw error;
        });
}
const reset = () =>{
    setValue("#name", "");
    setValue("#phoneNumber", "");
    setValue("#address", "");
    setSelectedIndex('#city', 0);
    setSelectedIndex('#state', 0);
    setValue("#zip", "");
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
    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if (contactList) {
        if(isUpdate){
            const index = contactList.map((data) => data.id).indexOf(contactObj.id);
            contactList.splice(index,1, contactObj);
        }
        else{
         if(contactList.length == 0)
             contactObj.id = 1;
         else
            contactObj.id = contactList[contactList.length -1].id + 1;
        contactList.push(contactObj);
        }
         
    } else {
        contactObj.id = 1;
        contactList = [contactObj];
    }
    localStorage.setItem("ContactList", JSON.stringify(contactList));

}

const getInputValue = (selector) => {
    let value = document.querySelector(selector).value;
    return value;
  }

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
