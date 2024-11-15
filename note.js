// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const deleteAllBtn = document.getElementById('deleteAllBtn');
// const taskList = document.getElementById('taskList');

// document.addEventListener('DOMContentLoaded', loadTasks);

// addTaskBtn.addEventListener('click', addTask);

// deleteAllBtn.addEventListener('click', deleteAllTasks);

// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.forEach(task => {
//         createTaskElement(task);
//     });
// }

// function createTaskElement(task) {
//     const li = document.createElement('li');
//     li.textContent = task;
//     taskList.appendChild(li);
// }

// function addTask() {
//     const task = taskInput.value.trim();
//     if (task === '') return;

//     createTaskElement(task);

//     saveTaskToLocalStorage(task);

//     taskInput.value = '';
// }

// function saveTaskToLocalStorage(task) {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function deleteAllTasks() {
//     localStorage.removeItem('tasks');
//     taskList.innerHTML = '';
// }





// document.addEventListener('DOMContentLoaded', () => {
//     const taskList = document.getElementById('taskList');
//     const taskInput = document.getElementById('taskInput');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const deleteAllBtn = document.getElementById('deleteAllBtn');

//     const loadTasks = () => (JSON.parse(localStorage.getItem('tasks')) || []).forEach(task => {
//         const li = document.createElement('li');
//         li.textContent = task;
//         taskList.appendChild(li);
//     });
    
//     addTaskBtn.addEventListener('click', () => {
//         const task = taskInput.value.trim();
//         if (task) {
//             const tasks = [...(JSON.parse(localStorage.getItem('tasks')) || []), task];
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             taskList.innerHTML += `<li>${task}</li>`;
//             taskInput.value = '';
//         }
//     });

//     deleteAllBtn.addEventListener('click', () => {
//         localStorage.removeItem('tasks');
//         taskList.innerHTML = '';
//     });

//     loadTasks();
// });







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
