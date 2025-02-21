//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`//the html string made from step
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const letter_grades = ["A", "B", "A"];

function calculate_gpa_from_letter(letter_grade) {
    let grade_point = 0;
    if (letter_grade === "A") {
        grade_point = 4.0;
    }
    else if (letter_grade === "B"){
        grade_point = 3.0;
    }
    
    return grade_point;
}

const gpaPoints = letter_grades.map(calculate_gpa_from_letter);
// console.log("gpa points: " + gpaPoints)

const gpa = gpaPoints.reduce((total, item) => {
    return total + item
}, 0)

console.log(gpa)

