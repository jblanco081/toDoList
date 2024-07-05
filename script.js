document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value.trim();
    const priorityInput = document.getElementById('priorityInput').value;
    const dueDateInput = document.getElementById('dueDateInput').value;
    const creationDate = new Date().toLocaleDateString();

    if (taskInput === '') return;

    const taskList = document.getElementById('taskList');
    const task = document.createElement('li');
    task.innerHTML = `
        <div class="task-header">
            <span>${taskInput}</span>
            <button class="delete">Delete</button>
        </div>
        <div class="task-details">
            <p>Created: ${creationDate}</p>
            <p>Priority: ${priorityInput}</p>
            <p>Due: ${dueDateInput ? dueDateInput : 'No due date'}</p>
        </div>
    `;
    task.className = 'task';
    taskList.appendChild(task);

    document.getElementById('taskInput').value = '';
    document.getElementById('priorityInput').value = 'Low';
    document.getElementById('dueDateInput').value = '';

    task.addEventListener('click', function() {
        task.classList.toggle('completed');
    });

    task.querySelector('.delete').addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(task);
    });
});
