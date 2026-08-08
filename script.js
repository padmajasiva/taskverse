const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const themeBtn = document.getElementById("themeBtn");


/* PROGRESS */

function updateProgress() {

    const tasks = taskList.querySelectorAll(".task");

    const completed = taskList.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    const total = tasks.length;
    const done = completed.length;

    const percentage = total === 0
        ? 0
        : (done / total) * 100;

    progressFill.style.width = percentage + "%";

    progressText.textContent =
        `${done} of ${total} tasks completed`;
}


/* ADD TASK */

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.className = "task";

    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${taskText}</span>
        </label>

        <button class="delete-btn">🗑️</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    updateProgress();
}


/* ADD BUTTON */

addTaskBtn.addEventListener("click", addTask);


/* ENTER KEY */

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


/* CHECKBOX */

taskList.addEventListener("change", function (event) {

    if (event.target.type === "checkbox") {
        updateProgress();
    }

});


/* DELETE */

taskList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        event.target.closest(".task").remove();

        updateProgress();
    }

});


/* THEME */

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeBtn.textContent = "🌙";

    } else {

        themeBtn.textContent = "☀️";

    }

});


/* INITIAL PROGRESS */

updateProgress();