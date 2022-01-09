class Vehicle {
    color: string ;

    drive(): void{
        console.log("drive");
    }

    constructor(color:string) {
        this.color = color;
    }
}

class Vehicle2 {

    constructor(public color:string) { // short way for fields
    }
}

const v = new Vehicle('black');
v.drive();

class Car extends Vehicle{
    drive(): void{
        console.log("drive2");
    }
}

const v2 = new Car('green');
v2.drive();

const v3 = new Vehicle2('green');
console.log(v3.color);