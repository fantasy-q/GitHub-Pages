{
  let name = 'Matt';

  let person = {
    name: name
  };

  console.log(person);  // { name: 'Matt' }
} console.log('--------------------'); {
  let name = 'Matt';

  let person = {
    name
  };

  console.log(person);  // { name: 'Matt' }
} console.log('--------------------'); {
  function makePerson(a) {
    return {
      name: a
    };
  }

  let person = makePerson('Matt');

  console.log(person.name);  // Matt
} console.log('--------------------'); {
  function makePerson(name) {
    return {
      name
    };
  }

  let person = makePerson('Matt');

  console.log(person.name);  // Matt
}