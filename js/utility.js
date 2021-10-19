const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw 'Name is Incorrect!';
}

const checkPhoneNumber = (phone) => {
    let phoneRegex = RegExp("^(\\+[0-9]{2}|[0-9]{2})?[6-9]{1}[0-9]{9}$");
    if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
}

const checkAddress = (address) => {
    address += " ";
    let addressRegex = RegExp("^(.{3,}\\s){2,}$");
    if (!addressRegex.test(address)) throw "Address is incorrect";
}