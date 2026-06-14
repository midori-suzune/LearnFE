const endpoint = "http://localhost:3800/students";

const form = document.querySelector(".student-form");
const lastNameInput = document.querySelector("input[name=lastName]");
const firstNameInput = document.querySelector("input[name=firstName]");
const studentCodeInput = document.querySelector("input[name=studentCode]");
const submitButton = document.querySelector(".submit-user");
const studentList = document.querySelector(".student-list");

let editingId = null;

const getStudents = async () => {
    const response = await fetch(endpoint);
    return await response.json();
};

const createStudent = async (student) => {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    return await response.json();
};

const updateStudent = async (id, student) => {
    const response = await fetch(`${endpoint}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    return await response.json();
};

const deleteStudent = async (id) => {
    await fetch(`${endpoint}/${id}`, {
        method: "DELETE"
    });
};

const getStudentFromForm = () => {
    return {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        studentCode: studentCodeInput.value.trim()
    };
};

const isValidStudent = (student) => {
    return student.firstName !== "" && student.lastName !== "" && student.studentCode !== "";
};

const clearForm = () => {
    lastNameInput.value = "";
    firstNameInput.value = "";
    studentCodeInput.value = "";
    lastNameInput.focus();
};

const switchToAddMode = () => {
    editingId = null;
    submitButton.textContent = "+Add";
};

const switchToEditMode = (student) => {
    editingId = student.id;
    lastNameInput.value = student.lastName;
    firstNameInput.value = student.firstName;
    studentCodeInput.value = student.studentCode;
    submitButton.textContent = "Save";
    lastNameInput.focus();
};

const renderStudents = async () => {
    const students = await getStudents();

    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.lastName}</td>
            <td>${student.firstName}</td>
            <td>${student.studentCode}</td>
            <td>
                <div class="action">
                    <button type="button" class="edit-btn" data-id="${student.id}">Edit</button>
                    <button type="button" class="delete-btn" data-id="${student.id}">Delete</button>
                </div>
            </td>
        `;

        studentList.appendChild(row);
    });
};

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const student = getStudentFromForm();

    if (!isValidStudent(student)) {
        alert("Please fill in all student information.");
        return;
    }

    if (editingId === null) {
        await createStudent(student);
    } else {
        await updateStudent(editingId, student);
        switchToAddMode();
    }

    clearForm();
    await renderStudents();
});

studentList.addEventListener("click", async (event) => {
    const target = event.target;
    const id = target.dataset.id;

    if (target.classList.contains("delete-btn")) {
        await deleteStudent(id);

        if (editingId === id) {
            switchToAddMode();
            clearForm();
        }

        await renderStudents();
    }

    if (target.classList.contains("edit-btn")) {
        const students = await getStudents();
        const student = students.find((item) => item.id === id);

        if (student) {
            switchToEditMode(student);
        }
    }
});

renderStudents();
