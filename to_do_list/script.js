document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => taskList.removeChild(li);

        li.appendChild(removeBtn);
        li.onclick = () => li.classList.toggle('completed');

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
