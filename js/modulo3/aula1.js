var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var botao = document.querySelector('#app button');

var toDos = [
    /* Caso o To-Do tivesse mais de uma propriedade:
     * { text: 'Fazer café', propriedade: 1 } 
     */
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rcoketseat'
];

function renderToDos(){
    for (toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);

    }
}


function addToDo(){
    var toDoText = inputElement.value;

    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();

}

botao.onclick = addToDo;