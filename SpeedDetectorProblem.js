function overspeedingregulator(speed){ 
    //Definition of key elements in the code

    let speed=Number()
    const speedLimit= 70
    const kmsPerDemeritPointsDeducted=5
    const pointsDeductedPerExceedingSpeed=1

//Equation to get demerit points deducted per infraction

   pointsDeductedPerExceedingSpeed=speed-speedLimit/kmsPerDemeritPointsDeducted
   
//conditional statements confining the inputed values.

if (speed <0 && speed >350){console.log('Invalid speed measurement inputed')}
if (speed <= 70(speedLimit)){console.log('OK')} else(speed>70);{console.log('Overspeeding')}
if (pointsDeductedPerExceedingSpeed>12){console.log('license suspended')}else(console.log('Points')+ pointsDeductedPerExceedingSpeed)

return{pointsDeductedPerExceedingSpeed,};
}