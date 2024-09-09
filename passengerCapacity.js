// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const passengerCapacity = Object.assign(car,{"passenger capacity": 5}); //object.assign is the easiest way to add an object inside an object

const updateCar = {...car, "Total Sit": 33} //spread operator
console.log(car)
console.log(updateCar)