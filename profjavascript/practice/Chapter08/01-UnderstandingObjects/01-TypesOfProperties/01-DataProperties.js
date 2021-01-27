const ________________________________________ = require('../../../js/common').separation;

________________________________________(1); {
  let person = {
    name: "Nicholas"
  };
  console.log(person);
} ________________________________________(2); {
  let person = {};
  Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
  });
  console.log(person.name);  // "Nicholas"
  person.name = "Greg";
  console.log(person.name);  // "Nicholas"
  /**
   * This example creates a property called name with a value of "Nicholas" that is read-only.
   * The value of this property can’t be changed, and any attempts to assign a new value are
   * ignored in nonstrict mode. In strict mode, an error is thrown when an attempt is made to
   * change the value of a read-only property.
   */
} ________________________________________(3); {
  {
    let person = {};
    Object.defineProperty(person, "name", {
      configurable: false,
      value: "Nicholas"
    });
    console.log(person.name);  // "Nicholas"
    delete person.name;
    console.log(person.name);  // "Nicholas"
    /**
     * Here, setting configurable to false means that the property cannot be removed from the object. 
     * Calling delete on the property has no effect in nonstrict mode and throws an error in strict mode. 
     * Additionally, once a property has been defined as nonconfigurable, it cannot become configurable again. 
     * Any attempt to call Object.defineProperty() and change any attribute other than writable causes an error:
     */
  }

  {
    let person = {};
    Object.defineProperty(person, "name", {
      configurable: false,
      value: "Nicholas"
    });

    // Throws an error
    // Object.defineProperty(person, "name", {
    //   configurable: true,
    //   value: "Nicholas"
    // });
    /**
     * So although you can call Object.defineProperty() multiple times for the same property,
     * there are limits once configurable has been set to false.
     */
  }
}

