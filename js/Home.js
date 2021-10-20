let contactList;
window.addEventListener("DOMContentLoaded", (event) => {
    if(site_properties.use_local_storage.match("true"))
        getContactDataFromStorage();
    else    
        getContactDataFromServer();
    contactList = getContactDataFromStorage();
});

const processContactDataResponse = () =>{
    document.querySelector(".address-count").textContent = contactList.length;
    createInnerHtml();
    localStorage.removeItem("editContact");
}

const getContactDataFromStorage = () => {
    return localStorage.getItem("ContactList")
      ? JSON.parse(localStorage.getItem("ContactList"))
      : [];
    processContactDataResponse();
}


const createInnerHtml = () => {
    const headerHtml =
      "<tr><th>Full Name</th><th>Address</th><th>City</th>" +
      "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>";
    if (contactList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contactData of contactList) {
      innerHtml = `${innerHtml}
          <tr>
          <td>${contactData.name}</td>
          <td>${contactData.address}</td>
          <td>${contactData.city}
          <td>${contactData.state}</td>
          <td>${contactData.pincode}</td>
          <td>${contactData.phone}</td>
          <td>
          <img id="${contactData.id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
          <img id="${contactData.id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
          </td>
          </tr>
          `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };

  const remove = (node) => {
    let contactData = contactList.find(contactPerson => contactPerson.id == node.id);

    if (!contactData) return;
    const index = contactList
                .indexOf(contactData);
    console.log(index);
    contactList.splice(index, 1);
    localStorage.setItem("ContactList",JSON.stringify(contactList));
    document.querySelector(".address-count").textContent = contactList.length;
    createInnerHtml();
    
  }

  const update = (node) => {
    console.log(node);
    let contactData = contactList.find(contactPerson => contactPerson.id == node.id);
    console.log(contactData);
    if (!contactData) return;
    localStorage.setItem("editContact", JSON.stringify(contactData));
    window.location.replace(site_properties.add_contact_page);
  }