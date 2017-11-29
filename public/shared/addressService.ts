class AddressService {
  constructor(){

  }

  //I used arrow syntax here in the video but I should have done this instead.
  getFullAddress(customer) {
    return customer.address1 + ", " + customer.city + ", " + customer.state + " " + customer.zip;
  }
}

export default AddressService;