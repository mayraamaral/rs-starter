var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var botao = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){

    listElement.innerHTML = '';

    for (toDo of toDos){
        var toDoElement = document.createElement('li'); // cria um item na lista
        var toDoText = document.createTextNode(toDo); // coloca o texto do todo na variavel todotext

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        var pos = toDos.indexOf(toDo); // armazena a posicao do todo em pos
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        toDoElement.appendChild(toDoText); // adiciona o texto ao elemento todo (o li)
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement); // adiciona o elemento todo na lista 

    }
}

renderToDos();

function addToDo(){
    var toDoText = inputElement.value; // pega o valor do input e coloca na variavel

    toDos.push(toDoText); // adiciona a variavel q acabou de ser criada ao array (no final)
    inputElement.value = ''; // limpa o input
    renderToDos(); // renderiza novamente para aparecer o novo item acrescentado
    saveToStorage();
}

botao.onclick = addToDo;

function deleteToDo(pos){

    toDos.splice(pos, 1);
    renderToDos();
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(toDos));
}