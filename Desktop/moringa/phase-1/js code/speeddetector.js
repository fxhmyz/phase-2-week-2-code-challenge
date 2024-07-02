//function to calculate speed based on points

function checkSpeed(speed) {

    const speedlimit = 70;
    const kmPerDemeritPoint = 5;
    const pointslimit = 12;


    if(speed < speedlimit){
        console.log('no issue')
    }

//calculate number of demerit points
let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

//if points exceed at any given time
if (demeritPoints > pointsLimit) {
    console.log("License suspended");
    }


    else {
        console.log(`Points: ${demeritPoints}`);
    }


      console.log(calculateDemeritPoints(80));





    }     