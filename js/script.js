// Variaveis Necessarias
const newTask = document.getElementById('new-task')
const saveTask = document.getElementById('bttn-save-task')
const fadeTaskForm = document.getElementById('fade')
const modalTaskForm = document.getElementById('modal')


// Função de abre e fecha Modal
const toogleModalTask = () => {
    modalTaskForm.classList.toggle('hide')
    fadeTaskForm.classList.toggle('hide')
}


// Abre e Fecha o Modal de Formulario para Tarefa
[newTask, fadeTaskForm].forEach((el) => { 
    el.addEventListener('click', () => toogleModalTask())
});

// Função para inserir informações resgatadas do Formulario na tabela de Tarefas
function insertTask() {
    
    // Variaveis que recebem os dados digitados pelo usuario
    let titleTask = document.getElementById('titleTask')
    let descTask = document.getElementById('newTasktxt')
    let tempTask = document.querySelector('input[name="prazos"]:checked').value

    // Variaveis que mostram os dados digitados no box de tarefas
    let boxTasks = document.querySelector('.box-tasks')

    let newBoxTask = document.createElement('div')
    let newTitleTask = document.createElement('h4')
    let newDescTask = document.createElement('p')
    let newTempTask = document.createElement('p')

    let txtTitleTaks = document.createTextNode(titleTask.value)
    let txtDescTask = document.createTextNode(descTask.value)
    let txtTempTask = document.createTextNode(tempTask)

    // inserção no box de tarefas

    newTitleTask.appendChild(txtTitleTaks)
    newDescTask.appendChild(txtDescTask)
    newTempTask.appendChild(txtTempTask)

    newBoxTask.appendChild(newTitleTask)
    newBoxTask.appendChild(newDescTask)
    newBoxTask.appendChild(newTempTask)

    newBoxTask.classList.add('new-box-task')

    boxTasks.appendChild(newBoxTask)

}

// Função que limpa os Inputs após ser inserido no box-tasks
function cleanInputsForm() {
    let titleTask = document.getElementById('titleTask')
    let descTask = document.getElementById('newTasktxt')
    let tempTask = document.querySelector('input[name="prazos"]:checked').value

    titleTask.value = ''
    descTask.value = ''
}

function saveNewTask() {
    let noTask = document.getElementById('no-task')
    let newTasktxt = document.getElementById('newTasktxt')
    let newTaskBox = document.getElementById('newTasktxt')
    let titleTask = document.getElementById('titleTask')
    
    if (newTasktxt.value.length <= 0 && titleTask.value.length <= 0) {
        newTaskBox.style.border = '1px solid red'
        titleTask.style.border = '1px solid red'
    }else {
        newTaskBox.style.border = 'none'
        titleTask.style.border = 'none'
        noTask.style.display = 'none'
        
        insertTask()

        cleanInputsForm()
        
        toogleModalTask()
    }
    

}









































// function formTask() {
//     let boxTask = document.getElementsByClassName('box-tasks')
    
//     let div = document.createElement('div')
//     let inputTitle = document.createElement('input')
//     div.appendChild(inputTitle)
//     let inputTask = document.createElement('input')
//     div.appendChild(inputTask)

//     div.classList.add('box-form-ft')
//     inputTitle.classList.add('inputTitle-ft')
//     inputTask.classList.add('inputTask-ft')

    

// }


// function newTask() {
//     let noTask = document.getElementById('no-task')
//     noTask.style.display = 'none'

//     let div = document.createElement('div')
//     let txtTask = document.createTextNode(document.getElementById(''))
// }