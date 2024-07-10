function studentMarksToGrade() {
    // Indication of the calculation input
    const marks = parseFloat(prompt('Enter marks between 0 and 100'));

    // Conditional Limits to the function
    if (marks >= 0 && marks <= 100) {
        console.log('Marks inputted');
    } else {
        console.log('Invalid marks input');
        return; // Exit function if marks are out of range
    }

    let grade; // Initialize grade variable

    // Grades assigned for each mark
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks < 80) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks < 50) {
        grade = 'D';
    } else if (marks >= 0 && marks < 40) {
        grade = 'E';
    }

    return grade;
}
