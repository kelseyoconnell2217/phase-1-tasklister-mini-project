document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addItem(e.target.new_task_description.value)
    let blank = document.querySelector('#new_task_description') 
    blank.textContent = "description"
  form.reset()})
});



function addItem(task){
  let listItem = document.createElement('li');
  let btn = document.createElement('button');
  let moveBtn = document.createElement('button')
  moveBtn.textContent = 'Move up or down'
  btn.textContent = `(delete)`;
  btn.addEventListener('click', handleDelete)
  listItem.textContent = `${task}  `
  listItem.contentEditable = true 
  moveBtn.addEventListener('click', makeMoveable)
  listItem.appendChild(btn)
    btn.contentEditable = false
  listItem.appendChild(moveBtn)
    moveBtn.contentEditable = false
    console.log(listItem)
  document.getElementById('tasks').appendChild(listItem)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

function makeMoveable(e){
  let moveItem = e.target.parentNode
  moveItem.addEventListener('keydown', moveItemUpOrDown)
}

function moveItemUpOrDown(e){
  let moveItem = e.target.parentNode
  const prevItem = moveItem.previousElementSibling
  const nextItem = moveItem.nextElementSibling
  if (e.key === 'ArrowUp') {
    if (prevItem){
      moveItem.parentNode.insertBefore(moveItem, prevItem)
    }
  } else if (e.key === 'ArrowDown'){
    if (nextItem) {
      moveItem.parentNode.insertBefore(nextItem, moveItem)
    }
  }
}

// Original code before Stretch Deliverables

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#create-task-form");
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     addItem(e.target.new_task_description.value)
//     let blank = document.querySelector('#new_task_description') 
//     blank.textContent = "description"
//   form.reset()})
// });



// function addItem(task){
//   let listItem = document.createElement('li');
//   let btn = document.createElement('button');
//   btn.textContent = `(delete)`;
//   btn.addEventListener('click', handleDelete)
//   listItem.textContent = `${task}  ` 
//   listItem.appendChild(btn)
//   console.log(listItem)
//   document.getElementById('tasks').appendChild(listItem)
// }

// function handleDelete(e){
//   e.target.parentNode.remove()
// }