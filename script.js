document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const studentSubject = document.getElementById('student-subject');
    const studentMarks = document.getElementById('student-marks');
    const studentRemarks = document.getElementById('student-remarks');

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

       
        const studentData = {
            "101": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "102": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "103": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "104": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "105": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "106": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "107": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "108": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "109": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "110": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "111": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "112": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "113": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "114": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "115": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "116": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "117": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "118": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "119": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "120": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "121": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "122": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "123": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "124": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "125": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "126": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "127": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "128": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "129": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "130": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "131": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "132": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "133": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "134": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "135": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "136": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "137": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "138": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "139": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "140": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "141": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "142": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "143": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "144": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "145": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "146": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            }, 
            "147": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "148": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "149": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "150": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "151": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "152": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "153": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            "154": {
                "name": "Jane Smith",
                "subject": "Science",
                "marks": 88,
                "remarks": "Very Good"
            },
            "155": {
                "name": "John Doe",
                "subject": "Math",
                "marks": 95,
                "remarks": "Excellent"
            },
            
            "156": {
                "name": "Emma Johnson",
                "subject": "History",
                "marks": 82,
                "remarks": "Very Good"
            }
        };

        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
            studentName.textContent = student.name;
            studentSubject.textContent = student.subject;
            studentMarks.textContent = student.marks;
            studentRemarks.textContent = student.remarks;
            resultContainer.style.display = 'block';
        } else {
            alert('Student not found. Please check the roll number.');
        }
    });
});
