function netSalaryCalculator(basicSalary, benefits) {
    // Validate input
    if (basicSalary <= 0 || benefits <= 0) {
        console.log('Invalid Input. Expected entries should exceed 0.');
        return;
    }

    // Deductions and Tax Brackets
    const grossSalary = basicSalary + benefits;
    let PAYE = 0;
    let NHIF = 0;
    let NSSF = 0;

    // Calculating PAYE Deductions
    if (grossSalary > 800000) {
        PAYE = 0.35 * grossSalary;
    } else if (grossSalary > 500000) {
        PAYE = 0.325 * grossSalary;
    } else if (grossSalary >= 32334) {
        PAYE = 0.3 * grossSalary;
    } else if (grossSalary >= 24001) {
        PAYE = 0.25 * grossSalary;
    } else if (grossSalary >= 0) {
        PAYE = 0.1 * grossSalary;
    }

    // Calculating NSSF deductions
    if (grossSalary <= 10000) {
        NSSF = 0.06 * grossSalary;
    } else if (grossSalary <= 100000) {
        NSSF = 2160;
    }

    // Calculating NHIF deductions
    if (grossSalary <= 5999) {
        NHIF = 150;
    } else if (grossSalary <= 7999) {
        NHIF = 300;
    } else if (grossSalary <= 11999) {
        NHIF = 400;
    } else if (grossSalary <= 14999) {
        NHIF = 500;
    } else if (grossSalary <= 19999) {
        NHIF = 600;
    } else if (grossSalary <= 24999) {
        NHIF = 750;
    } else if (grossSalary <= 29999) {
        NHIF = 850;
    } else if (grossSalary <= 34999) {
        NHIF = 900;
    } else if (grossSalary <= 39999) {
        NHIF = 950;
    } else if (grossSalary <= 44999) {
        NHIF = 1000;
    } else if (grossSalary <= 49999) {
        NHIF = 1100;
    } else if (grossSalary <= 59999) {
        NHIF = 1200;
    } else if (grossSalary <= 69999) {
        NHIF = 1300;
    } else if (grossSalary <= 79999) {
        NHIF = 1400;
    } else if (grossSalary <= 89999) {
        NHIF = 1500;
    } else if (grossSalary <= 99999) {
        NHIF = 1600;
    } else if (grossSalary >= 100000) {
        NHIF = 1700;
    }

    // Net Salary determination
    const netSalary = grossSalary - PAYE - NHIF - NSSF;

    // Return a single object with all calculated values
    return {
        grossSalary,
        PAYE,
        NSSF,
        NHIF,
        netSalary
    };
}
const salaryDetails = netSalaryCalculator(parseFloat(prompt('Enter Basic Salary')), parseFloat(prompt('Enter Expected Benefits')));
console.log(salaryDetails);