// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

/*const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};*/

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//const createFareMultiplier = multiplier => fare => fare * multiplier;

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

/*const createFareMultiplier = (multiplier) => {
  return (fare) => multiplier * fare;
};*/ 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnTwoDrivers) => returnTwoDrivers === returnFirstTwoDrivers ? drivers.slice(0, 2) : drivers.slice(2);
 
