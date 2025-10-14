const student = {
    lastName: "Minne",
    firstName: "Niels",
    gender: 1,
    birthDate: 748180800000,
    courses: [
        {
            name: "Programming 1",
            teachers: ["Michael", "Niels"]
        },
        {
            name: "Web 1",
            teachers: ["Karel", "Dieter"]
        },
        {
            name: "Data Management 1",
            teachers: ["Adriaan"]
        }
    ]
}

function generateStringForGender(genderCode) {
    if (genderCode === 1) {
        return "Male"
    } else if (genderCode === 2) {
        return "Female"
    } else {
        return "Other"
    }
}

function generateStringForLecturers(lecturers) {
    return lecturers.join(", ")
}

function generateStringForCourses(courses) {
    let text = ""
    for (const course of courses) {
        text += `
        Course: ${course.name}
        Lecturers: ${generateStringForLecturers(course.teachers)}
        -------------------------------------------------------`
    }

    return text;
}

function generateStringForStudent(student) {
    return `
    ======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.lastName}
Gender: ${generateStringForGender(student.gender)}
Day of birth: ${new Date(student.birthDate)}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
======================================================`;
}

console.log(generateStringForStudent(student));