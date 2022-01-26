import {User} from "./models/user";
import axios from "axios";

console.log("123");

const user = new User({id : 1});
user.fetch();
console.log(user.get('name'));
console.log(user.get('age'));

