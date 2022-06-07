// Code your solution in this file!
// function distanceFromHqInBlocks(blocks){
//     let headQuatre = 42;
//     return Math.abs(blocks - headQuatre);
// }
// console.log(distanceFromHqInBlocks(34));

// function distanceFromHqInFeet(pickupLocation) {
//     return distanceFromHqInBlocks(pickupLocation) * 264;
// }

//  function distanceTravelledInFeet (start, destination){
//      return Math.abs((start- destination)*264) + " " + "distance in feet";
//     }
//  console.log(distanceTravelledInFeet(42,42));

function distanceFromHqInBlocks(pickUpLocation){
    let headQuatre = 42;
    return Math.abs(headQuatre - pickUpLocation);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation) {
   return distanceFromHqInBlocks(pickupLocation) * 264;
}

console.log(distanceFromHqInFeet(50));

 function distanceTravelledInFeet (start, destination){
     return Math.abs((destination - start)*264);
    }
 console.log(distanceTravelledInFeet(50,60));

 function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    if (distance > 2500){
        return 'cannot travel that far';}
    else if (distance <= 2500 && distance > 2000){
        return 25;}
    else
        {return distance <= 400 ? 0 : (distance - 400) * 0.02;}
}
