const ________________________________________ = require('../../../js/common').separation;
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
________________________________________(); {
  let person = {};
  person[nameKey] = 'Matt';
  person[ageKey] = 27;
  person[jobKey] = 'Software engineer';

  console.log(person);  // { name: 'Matt', age: 27, job: 'Software engineer' }
} ________________________________________('Computed Property'); {
  let person = {
    [nameKey]: 'Matt',
    [ageKey]: 27,
    [jobKey]: 'Software engineer'
  };

  console.log(person);  // { name: 'Matt', age: 27, job: 'Software engineer' } 
} ________________________________________(); {
  let uniqueToken = 0;

  function getUniqueKey(key) {
    return `${key}_${uniqueToken++}`;
  }

  let person = {
    [getUniqueKey(nameKey)]: 'Matt',
    [getUniqueKey(ageKey)]: 27,
    [getUniqueKey(jobKey)]: 'Software engineer'
  };

  console.log(person);  // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' } 
}