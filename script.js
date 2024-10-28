// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Por favor, insira uma tarefa.');
      return;
    }
  
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = taskInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Excluir';
    deleteButton.onclick = () => taskList.removeChild(taskItem);
  
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
  }
  