function studentMarksToGrade(){
//Indication of the calculation input

let marks =prompt('Enter marks between 0 and 100');
marks=Number(marks);

//Conditional Limits to the function

if(marks>=0 && marks <=100){console.log ('marks inputed')}

else(marks<0 && marks>100);{console.log('inputed marks invalid')};

//Grades assigned for each mark

if (marks>79){grade==='A'};

if(marks>=60 && marks<79);{grade==='B'}

if(marks>=49 && marks<=59);{grade==='C'};

if(marks>=40 && marks<49);{grade==='D'}

if(marks<40 && marks>0);{grade==='E'}
return(grade)}
