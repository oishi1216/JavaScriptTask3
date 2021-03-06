const btn = document.getElementById('btn');
let taskList = [];
let id = 0;

const clickButton = () => {

  let text = document.getElementById('text');
  let textValue = text.value;
  const tbody = document.getElementById('task');

  let newId = document.createTextNode(id);
  taskList.push(newId);

  let newText = document.createTextNode(textValue);
  taskList.push(newText);

  let newWorkingButton = document.createElement('button');
  newWorkingButton.textContent = '作業中';
  newWorkingButton.setAttribute('id', 'workng')
  taskList.push(newWorkingButton);

  let newDeleteButton = document.createElement('button');
  newDeleteButton.setAttribute('id', 'delete')
  newDeleteButton.textContent = '削除';
  taskList.push(newDeleteButton);

  const tr = document.createElement('tr');

    taskList.forEach(function(value){
      const td = document.createElement('td');
      td.appendChild(value); 
      tr.appendChild(td);
    });

  tbody.appendChild(tr);
  taskList.splice(0);
  text.value = '';
  id ++;

};

btn.addEventListener("click", clickButton);