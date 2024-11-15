document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');

    // Load tasks
    (JSON.parse(localStorage.getItem('tasks')) || []).forEach(task => 
        taskList.innerHTML += `<li>${task}</li>`
    );

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            const tasks = [...(JSON.parse(localStorage.getItem('tasks')) || []), task];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskList.innerHTML += `<li>${task}</li>`;
            taskInput.value = '';
        }
    });

    // Delete all tasks
    deleteAllBtn.addEventListener('click', () => {
        localStorage.removeItem('tasks');
        taskList.innerHTML = '';
    });
});
