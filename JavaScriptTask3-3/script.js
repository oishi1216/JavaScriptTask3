const btn = document.getElementById('btn');

const clickButton = () => {

  let text = document.getElementById('text');
  let textValue = text.value;
  const tbody = document.getElementById('task');
  const newRow = tbody.insertRow();
  newRow.classList.add('parent');

  let newCell = newRow.insertCell();
  newCell.classList.add('child');
  let newText = task.rows.length -1;
  let idNum = document.createTextNode(newText)
  newCell.appendChild(idNum);

  newCell = newRow.insertCell();
  newText = document.createTextNode(textValue);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  let newWorkingButton = document.createElement('button');
  newWorkingButton.setAttribute('id', 'workng')
  newWorkingButton.textContent = '作業中';
  newWorkingButton.addEventListener('click', () => workingTask(newWorkingButton));
  newCell.appendChild(newWorkingButton);

  newCell = newRow.insertCell();
  let newDeleteButton = document.createElement('button');
  newDeleteButton.setAttribute('id', 'delete')
  newDeleteButton.textContent = '削除';
  newDeleteButton.addEventListener('click', () => deleteTask(newDeleteButton, tbody));
  newCell.appendChild(newDeleteButton);

  text.value = '';

};

btn.addEventListener("click", clickButton);

const workingTask = (button) => {
  if (button.textContent === '作業中'){
    button.textContent = '完了'
  } else {
    button.textContent = '作業中'
  }
};

const deleteTask = (row, tbody) => {
  const rowNum = row.parentNode.parentNode.rowIndex -1;
  tbody.deleteRow(rowNum); 

  const trElement = document.getElementsByClassName('parent');
  const tdElement = document.getElementsByClassName('child');
  for (let i = 0; i < trElement.length; i++){
    let trRow = trElement[i].rowIndex-1;
    tdElement[i].innerHTML = trRow;
  }
};