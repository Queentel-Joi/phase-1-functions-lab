const hqStreet = 42

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - hqStreet);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;

  if (distance <= 400) {

    return 0;
  } else if (distance > 400 && distance <= 2000) 

    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {

    return 25;
  } else {

    return 'cannot travel that far';
  }



