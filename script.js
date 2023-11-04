document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const resultTable = document.getElementById('result-table');
    const resultRows = document.getElementById('result-rows');

    const studentData = {
        "101": {
            "name": "Abhishek Agarwal 68.10",
            "subjects": {
                "Anatomy(A)": { "marks": 25, "remarks": "PASS" },
                "Physiology(B)": { "marks": 27, "remarks": "PASS" },
                "Sociology(A)": { "marks": 23, "remarks": "PASS" },
                "Physiology(B)": { "marks": 20, "remarks": "PASS" },
                "Nursing Foundation": { "marks": 48, "remarks": "PASS" }
            }
        },

        "102": {
            "name": "Akash",
            "subjects": {
                "Anatomy(A)": { "marks": 16, "remarks": "FAIL" },
                "Physiology(B)": { "marks": 16, "remarks": "FAIL" },
                "Sociology(A)": { "marks": 17, "remarks": "PASS" },
                "Physiology(B)": { "marks": 10, "remarks": "FAIL" },
                "Nursing Foundation": { "marks": 48, "remarks": "FAIL" }
            }
        },

        "103": {
            "name": "Banti Meena",
            "subjects": {
                "Anatomy(A)": { "marks": 19, "remarks": "PASS" },
                "Physiology(B)": { "marks": 15, "remarks": "FAIL" },
                "Sociology(A)": { "marks": 15, "remarks": "FAIL" },
                "Physiology(B)": { "marks": 11, "remarks": "PASS" },
                "Nursing Foundation": { "marks": 45, "remarks": "PASS" }
            }
        },
        "104": {
            "name": "Bhanu Panwar ",
            "subjects": {
                "Anatomy(A)": { "marks": 28, "remarks": "PASS" },
                "Physiology(B)": { "marks": 27, "remarks": "PASS" },
                "Sociology(A)": { "marks": 23, "remarks": "PASS" },
                "Physiology(B)": { "marks": 22, "remarks": "PASS" },
                "Nursing Foundation": { "marks": 43, "remarks": "PASS" }
            }
        },
        "105": {
            "name": "Bharvika Tiwari ",
            "subjects": {
                "Anatomy(A)": { "marks": 31, "remarks": "PASS" },
                "Physiology(B)": { "marks": 33, "remarks": "PASS" },
                "Sociology(A)": { "marks": 21, "remarks": "PASS" },
                "Physiology(B)": { "marks": 35, "remarks": "PASS" },
                "Nursing Foundation": { "marks": 52, "remarks": "PASS" }
            }
        },
        
    };

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
            studentName.textContent = student.name;

            resultRows.innerHTML = '';

            for (const subject in student.subjects) {
                const row = document.createElement('tr');
                const subjectCell = document.createElement('td');
                subjectCell.textContent = subject;
                const marksCell = document.createElement('td');
                marksCell.textContent = student.subjects[subject].marks;
                const remarksCell = document.createElement('td');
                remarksCell.textContent = student.subjects[subject].remarks;

                row.appendChild(subjectCell);
                row.appendChild(marksCell);
                row.appendChild(remarksCell);

                resultRows.appendChild(row);
            }

            resultContainer.style.display = 'block';
        } else {
            alert('Student not found. Please check the roll number.');
        }
    });
});
