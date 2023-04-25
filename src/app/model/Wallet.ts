export class wallet{
 

   constructor ( public id?: number, public name?: string,public balance?: number, public dateofJoiningBalance?: string, public email?:string,public  password?: String){}
}
// JSOn needed in Spring boot
// {
  
//     "name": "Rohan",
//     "email": "rohan@g.com",
//     "pin": "1023",
//     "phoneNumber": "7041389781",
//     "dateOfJoining": "2023-03-15",
//     "salary": 70000
//   }