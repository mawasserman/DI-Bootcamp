const tasks = [];
const inputTask = document.getElementById('task');
const error = document.getElementById('error');
const listTasks = document.querySelector('.listTasks');

function addTask(event){
    event.preventDefault();


    if (inputTask.value.trim() === ''){
        error.style.display = 'block';

    }else{
        error.style.display = 'none';

        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            
        });

        const taskLabel = document.createElement('label');
        taskLabel.innerText = inputTask.value;

       

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskLabel);
        listTasks.appendChild(taskElement);

        inputTask.value = '';
    }
}

