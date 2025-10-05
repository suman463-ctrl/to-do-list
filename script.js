function addTask() {
    const tasklist = document.getElementById('tasklist');
    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();
    if (!taskText) return;

    const newTask = document.createElement('li');
    


    // Container for checkbox + text
    const taskContent = document.createElement('div');
    taskContent.style.display = 'flex';
    taskContent.style.alignItems = 'center';
    taskContent.style.gap = '5px';  // Small gap between checkbox and text

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.transform='scale(1.5)'
    checkbox.style.margin = '0 5px ';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.fontSize = '22px';  
    


    checkbox.onchange = function () {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    };

    taskContent.appendChild(checkbox);
    taskContent.appendChild(span);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => newTask.remove();

    // Push delete button to right
    deleteBtn.style.marginLeft = 'auto';

    // Append content and delete button to li
    newTask.appendChild(taskContent);
    newTask.appendChild(deleteBtn);

    tasklist.appendChild(newTask);
    input.value = '';
}
