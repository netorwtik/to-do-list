const showForm = document.querySelector('#show-form');
const form = document.querySelector('#form');
const addTaskButton = document.querySelector('#add-task');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

showForm.addEventListener('click', () => {
  form.style.display = 'block';
});

addTaskButton.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  list.appendChild(li);
  li.classList.add('task-item');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    li.remove();
  });
  input.value = '';
  form.style.display = 'none';
});
