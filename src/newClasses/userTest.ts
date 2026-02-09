import { BMW } from "../inheritance/car.js";
import { User } from "./user.js";

let u1 = new User('Tom', 20, 12.33);
u1.drive();
console.log(u1.shares);

let bm = new BMW();
bm.start();
bm.stop();
bm.autoParking();