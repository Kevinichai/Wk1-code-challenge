function promptingSpeedInput() {
    const speed = parseFloat(prompt('Enter vehicle speed'));
    overSpeedingRegulator(speed);
}

function overSpeedingRegulator(speed) {
    // Definition of key elements in the code
    const speedLimit = 70;
    const kmsPerDemeritPoint = 5;

    // Initialize the points deducted variable
    let pointsDeducted = 0;

    // Conditional statements confining the input values
    if (speed < 0 || speed > 350) {
        console.log('Invalid speed measurement inputted');
    } else if (speed <= speedLimit) {
        console.log('OK');
    } else {
        pointsDeducted = Math.floor((speed - speedLimit) / kmsPerDemeritPoint);

        if (pointsDeducted > 12) {
            console.log('License suspended');
        } else {
            console.log('Points:', pointsDeducted);
        }
    }

    return { pointsDeducted };
}

promptingSpeedInput();