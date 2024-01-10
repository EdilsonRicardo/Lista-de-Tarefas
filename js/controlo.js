//Pegar os itens que serao utilizados

let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

//contador para identificar itens
let contador = 0;


function addTarefa() {
    //Pegar o conteudo do input

    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `
        <div id="${contador}" class="item">

        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <img id="img_${contador}" src="/img/circle-outline.svg" alt="circle-outline" srcset="">
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})">
                <img src="/img/delete.svg" alt="" srcset="">
                Deletar
            </button>
        </div>

    </div>
        `
        // Adicionar Tarefa no início da lista
        main.insertAdjacentHTML('afterbegin', novoItem);
        
        //Adicionar Tarefa de forma simples:
        //main.innerHTML += novoItem;

        //Limpar Campo
        input.value = "";
        //Recuperar foco
        input.focus();
        


    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    //Codigo pra pegar a class do item em causa
    var classe = item.getAttribute('class')
    var icone = document.getElementById('img_' + id);
    //var imga = item.getAttribute('')
    //console.log(classe)
    
    if (classe == "item") {
        //adicionar classe "clicado" ao item. 
        item.classList.add('clicado')
        icone.src = '/img/check-circle.svg'
        item.parentNode.appendChild(item);
        
        //icone.classList.remove('circle-outline');
        //icone.classList.add('check-circle')
        //Colocar o item marcado no fundo da lista
        
    } else {
        item.classList.remove('clicado') 
        icone.src = "/img/circle-outline.svg";
        //item.parentNode.
        //icone.classList.add('circle-outline');
        //icone.classList.remove('check-circle')
    }
}

//O event lister presta atencao no que acontece com o item em causa
//key up é usado quando se toca uma tecla
input.addEventListener("keyup", function (event) {
    //Se click=ou enter (tecla 13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})




