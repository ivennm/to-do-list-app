function addTask() {
    const inputValue = document.getElementById("task-input").value;
    if (inputValue) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox"> ${inputValue}`;
        document.getElementById("task-list").appendChild(newTask);
        document.getElementById("task-input").value = ""; // Clear input
    }
}

function clearPage() {
    location.reload()
    return false;
}