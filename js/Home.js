let contactList;
window.addEventListener("DOMContentLoaded", (event) => {
    contactList = getContactDataFromStorage();
    document.querySelector(".address-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
});

const getContactDataFromStorage = () => {
    return localStorage.getItem("ContactList")
      ? JSON.parse(localStorage.getItem("ContactList"))
      : [];
};