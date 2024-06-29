function calculateResults() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 ;
    const averageMarks = totalMarks / 4;
    let grade = '';

    if (averageMarks >= 90) {
        grade = 'O';
    } else if (averageMarks >= 80) {
        grade = 'A+';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else if (averageMarks >= 70) {
        grade = 'B';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else if (averageMarks >= 60) {
        grade = 'C';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else {
        grade = 'U';
        document.getElementById('resultContainer').style.backgroundImage = "";
    }

    document.getElementById('totalMarks').innerText = `Total Marks: ${totalMarks}`;
    document.getElementById('averageMarks').innerText = `Average Marks: ${averageMarks.toFixed(2)}`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
}