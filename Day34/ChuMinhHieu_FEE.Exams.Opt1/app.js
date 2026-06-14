var studentArr = [
    {
        firstName: "Tran Thi Minh",
        lastName: "Thuy",
        studentCode: "B16DCXXYYY"
    },
    {
        firstName: "Le Thuy",
        lastName: "Trang",
        studentCode: "B17DCXXYYY"
    },
    {
        firstName: "Vu Thanh",
        lastName: "Loan",
        studentCode: "B18DCXXYYY"
    },
    {
        firstName: "Dam Thi",
        lastName: "Thu",
        studentCode: "B19DCXXYYY"
    }
];

const form = document.querySelector(".add-user");
const lastNameInput = document.querySelector("input[name=lastname]");
const firstNameInput = document.querySelector("input[name=first-name]");
const codeNameInput = document.querySelector("input[name=code-name]");
const submitButton = document.querySelector(".submit-user");
const tbody = document.querySelector(".show-data-body");

let editingIndex = -1;

// Render all students from the current array state.
const renderStudents = () => {
    tbody.innerHTML = "";

    studentArr.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.lastName}</td>
            <td>${student.firstName}</td>
            <td>${student.studentCode}</td>
            <td>
                <div class="action">
                    <button type="button" class="edit-btn" data-index="${index}">Edit</button>
                    <button type="button" class="remove-btn" data-index="${index}">Remove</button>
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });
};

const clearForm = () => {
    lastNameInput.value = "";
    firstNameInput.value = "";
    codeNameInput.value = "";
    lastNameInput.focus();
};

const getStudentFromForm = () => {
    return {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        studentCode: codeNameInput.value.trim()
    };
};

const isValidStudent = (student) => {
    return student.firstName !== "" && student.lastName !== "" && student.studentCode !== "";
};

const switchToAddMode = () => {
    editingIndex = -1;
    submitButton.textContent = "+Add";
};

const switchToEditMode = (index) => {
    const student = studentArr[index];

    editingIndex = index;
    lastNameInput.value = student.lastName;
    firstNameInput.value = student.firstName;
    codeNameInput.value = student.studentCode;
    submitButton.textContent = "Save";
    lastNameInput.focus();
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const student = getStudentFromForm();

    if (!isValidStudent(student)) {
        alert("Please fill in all student information.");
        return;
    }

    if (editingIndex === -1) {
        studentArr.push(student);
    } else {
        studentArr[editingIndex] = student;
        switchToAddMode();
    }

    clearForm();
    renderStudents();
});

tbody.addEventListener("click", (event) => {
    const target = event.target;
    const index = Number(target.dataset.index);

    if (target.classList.contains("remove-btn")) {
        studentArr.splice(index, 1);

        if (editingIndex === index) {
            switchToAddMode();
            clearForm();
        } else if (editingIndex > index) {
            editingIndex -= 1;
        }

        renderStudents();
    }

    if (target.classList.contains("edit-btn")) {
        switchToEditMode(index);
    }
});

renderStudents();
