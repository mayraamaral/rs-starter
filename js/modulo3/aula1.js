var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var botao = document.querySelector('#app button');

var toDos = [
    /* Caso o To-Do tivesse mais de uma propriedade:
     * { text: 'Fazer café', propriedade: 1 } 
     */
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderToDos(){

    listElement.innerHTML = '';

    for (toDo of toDos){
        var toDoElement = document.createElement('li'); // cria um item na lista
        var toDoText = document.createTextNode(toDo); // coloca o texto do todo na variavel todotext

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

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

}

botao.onclick = addToDo;