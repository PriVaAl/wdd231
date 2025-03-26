document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

const year = document.querySelector("#currentYear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified")
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(filteredCourses) {
    const coursesContainer = document.getElementById('courses');
    coursesContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.textContent = `${course.subject} ${course.number}`;
        if (course.completed) {
            courseButton.classList.add('completed-course');
        } else {
            courseButton.classList.add('incomplete-course');
        }
        courseButton.addEventListener('click', () => {displayCourseDetails(course)});
        coursesContainer.appendChild(courseButton);
    });
    displayTotalCredits(filteredCourses);
}

function displayTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalCreditsElement = document.getElementById('totalCredits');
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

function filterCourses(category) {
    let filteredCourses;
    if (category === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject.startsWith(category));
    }
    displayCourses(filteredCourses);
}
document.querySelector('.filters button[onclick="filterCourses(\'all\')"]').addEventListener('click', () => filterCourses('all'));
document.querySelector('.filters button[onclick="filterCourses(\'CSE\')"]').addEventListener('click', () => filterCourses('CSE'));
document.querySelector('.filters button[onclick="filterCourses(\'WDD\')"]').addEventListener('click', () => filterCourses('WDD'));

filterCourses('all');
});

function displayCourseDetails(course) {
    const courseDetails = document.getElementById('course-details');
    
    // Clear any previous content and populate the dialog
    courseDetails.innerHTML = `
        <button id="closeModal">Close</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
    `;

    // Show the dialog
    courseDetails.showModal();

    // Get the close button after it has been added to the DOM
    const closeModal = document.getElementById('closeModal');

    // Close the dialog when the close button is clicked
    closeModal.addEventListener('click', () => {
        courseDetails.close();
    });
}