document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task';

        const statusSpan = document.createElement('span');
        statusSpan.className = 'status';
        statusSpan.textContent = '⏳'; // Pendente

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
            if (taskSpan.classList.contains('completed')) {
                statusSpan.textContent = '✔️'; // Concluído
            } else {
                statusSpan.textContent = '⏳'; // Pendente
            }
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(statusSpan);
        li.appendChild(taskSpan);
        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
});
