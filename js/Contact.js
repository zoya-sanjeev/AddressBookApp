class Contact{
    id;

  get name() {
    return this.name;
  }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name)) 
        throw "Name is incorrect";
    else 
        this.name = name;
  }

  get address() {
    return this.address;
  }
  set address(address) {
    address += " ";
    let addressRegex = RegExp("^(.{3,}\\s){2,}$");
    if (!addressRegex.test(address)) 
        throw "Address is incorrect";
    else 
        this.address = address;
  }

  get phone() {
    return this.phone;
  }
  set phone(phone) {
    this.phone = phone;
    let phoneRegex =  RegExp("^(\\+[0-9]{2}|[0-9]{2})?[6-9]{1}[0-9]{9}$");
    if (!phoneRegex.test(phone)) 
        throw "Phone number is incorrect";
    else 
        this.phone = phone;
  }

  get city() {
    return this.city;
  }
  set city(city) {
    this.city = city;
  }

  get state() {
    return this.state;
  }
  set state(state) {
    this.state = state;
  }

  get zipCode() {
    return this.zipCode;
  }
  set zipCode(zipCode) {
    this.zipCode = zipCode;
  }

  toString() {
      return ("id=" + this.id + ",name=" + this.name + ",phone number=" + this.phone 
        + ",address=" + this.address + ",city=" + this.city + ",state=" + this.state + ",zipcode=" + this.zipCode);
  }
}