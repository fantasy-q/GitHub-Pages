{
  class Vehicle { }

  // Inherit from class
  class Bus extends Vehicle { }

  let b = new Bus();
  console.log(b instanceof Bus);      // true
  console.log(b instanceof Vehicle);  // true


  function Person() { }

  // Inherit from function constructor
  class Engineer extends Person { }

  let e = new Engineer();
  console.log(e instanceof Engineer);  // true
  console.log(e instanceof Person);    // true
} console.log();
{
  class Vehicle {
    identifyPrototype(id) {
      console.log(id, this);
    }

    static identifyClass(id) {
      console.log(id, this);
    }
  }

  class Bus extends Vehicle { }

  let v = new Vehicle();
  let b = new Bus();

  b.identifyPrototype('bus');        // bus, Bus {}
  v.identifyPrototype('vehicle');    // vehicle, Vehicle {}

  Bus.identifyClass('bus');          // bus, class Bus {}
  Vehicle.identifyClass('vehicle');  // vehicle, class Vehicle {} 
}