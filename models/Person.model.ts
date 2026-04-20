export enum Role{

  Admin = "Admin",
  Agent = "Agent",
  Customer = "Customer",
  Merchant = "Merchant"

}


export interface Person{

    name : string,
    email : string,
    password : string,
    phoneNumber : string,
    nid : string,
    role ?: Role 


}