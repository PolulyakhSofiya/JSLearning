function Vehicle() {
    Vehicle.prototype.go = function (name, speed) {
        console.log(name + " go with a speed: " + speed);
    };
}
function Car() {
    var name = "car";
    var speed = 80;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.sound = function () {
    console.log("bi-bi");
};
var car = new Car();
var vehicle = new Vehicle();
car.sound();
car.go(car.name, car.speed);