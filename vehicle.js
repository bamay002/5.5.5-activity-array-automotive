class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}


class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    checkService(){
        if (this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService
        }
    }
    start(){
        if (this.fuel > 0) {
            console.log("engine has started")
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassanger(num){
        if (this.passenger < this.maxPassengers){
            if (num + this.passenger <= this.maxPassengers){
                this.passenger = num
                return this.passenger
            }
            else{
                console.log(`${this.model} ${this.make} does not have enough space to fit all passengers.`)
            }
        }
        else{
            console.log(`${this.model} ${this.make} cannot fit all passengers`)
        }
    }
}




let myCar = new Car('HONDA', 'ACCORD', '2017', 'WHITE', 90000)

myCar.start()
myCar.loadPassanger(2)
myCar.stop()
myCar.checkService()
console.log(myCar.scheduleService)

console.log(myCar)