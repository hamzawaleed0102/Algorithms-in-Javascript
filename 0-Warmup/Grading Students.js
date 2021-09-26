/*
    HackerLand University has the following grading policy:
    - Every student receives a grade in the inclusive range from 0 to 100.
    - Any grade less than 38 is a failing grade.

    Sam is a professor at the university and likes to 
    round each student's grade according to these rules:

    - If the difference between the grade and the next multiple of 5
      is less than 3, round grade up to the next multiple of 5.

    - If the value of grade is less than 38, no rounding occurs as the
       result will still be a failing grade.
*/

const grades = [73, 67, 38, 33];

const calculateGrades = (grades) => {
  return grades.map((grade) => {
    if (grade < 38 || grade % 5 < 3) {
      return grade;
    } else {
      return grade + (5 - (grade % 5));
    }
  });
};

const newGrades = calculateGrades(grades);
console.log(newGrades); //Outputs: [74, 67, 40, 33]
