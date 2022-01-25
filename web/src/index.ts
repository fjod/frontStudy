import {User} from "./models/user";

console.log("123");

const user = new User({name : 'ff', age : 15});
user.set({name: 'aaa', age : 4444});
console.log(user.get('name'));
console.log(user.get('age'));
user.set({name: 'penis'});
console.log(user.get('name'));

const user2 = new User({}); // valid with optional data in interface