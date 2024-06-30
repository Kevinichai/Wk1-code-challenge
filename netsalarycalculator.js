function netsalarycalculator(basicSalary,benefits){
let basicSalary=parseFloat(prompt('Kindly input Basic Salary'));
let benefits=parseFloat(prompt('Indicate Expected Benefits'));


if(basicSalary<=0 && benefits<=0){console.log('Invalid Input,Expected Entries Should Exceed 0')}


//Deductions and Tax Brackets
const grosssalary=basicSalary+benefits;
const PAYE =grosssalary*taxrate;
const NHIF=grosssalary*NHIFrate;
const NSSF=grosssalary*NSSFrate;



//Calculating PAYE Deductions
if (grosssalary>800000){PAYE=0.35*grosssalary}
else if(grosssalary<= 800000 && grosssalary>500000){PAYE=0.325*grosssalary}
else if(grosssalary<=500000 && grosssalary>=32334){PAYE=0.3*grosssalary}
else if(grosssalary<=32333 && grosssalary>=24001){PAYE=0.25*grosssalary}
else if(grosssalary<=24000){PAYE=0.1*grosssalary}

//Calculating NSSF deductions
if (grosssalary<=10000 && grosssalary<=36000){NSSF=0.6*grosssalary}
else if(grosssalary<=100000 && grosssalary>=36000){NSSF=2160}

//Calculating NHIF deductions
if (grosssalary<=5999){NHIF=150}
else if(grosssalary<= 7999 && grosssalary>=6000){NHIF=300}
else if(grosssalary<=11999 && grosssalary>=8000){NHIF=400}
else if(grosssalary<=14999 && grosssalary>=12000){NHIF=500}
else if(grosssalary<=19999 && grosssalary>=15000){NHIF=600}
else if(grosssalary<= 24999 && grosssalary>=20000){NHIF=750}
else if(grosssalary<=29999 && grosssalary>=25000){NHIF=850}
else if(grosssalary<=34999 && grosssalary>=30000){NHIF=900}
else if(grosssalary<=39999 && grosssalary>=35000){NHIF=950}
else if(grosssalary<= 44999 && grosssalary>=40000){NHIF=1000}
else if(grosssalary<=49999 && grosssalary>=45000){NHIF=1100}
else if(grosssalary<=59999 && grosssalary>=50000){NHIF=1200}
else if(grosssalary<=69999 && grosssalary>=60000){NHIF=1300}
else if(grosssalary<= 79999 && grosssalary>=70000){NHIF=1400}
else if(grosssalary<=89999 && grosssalary>=80000){NHIF=1500}
else if(grosssalary<=99999 && grosssalary>=90000){NHIF=1600}
else if(grosssalary>=100000){NHIF=1700}

//Net Salary determinant
const netsalary=grosssalary-PAYE-NHIF-NSSF;

return{grosssalary, PAYE, NSSF, NHIF, netsalary};



}