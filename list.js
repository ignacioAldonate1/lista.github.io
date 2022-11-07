const lista = document.querySelector("#lista");
const btnAgregar = document.querySelector("#btn-agregar");
const tareaInput = document.querySelector("#tareaInput");
const empty = document.querySelector("#empty");


//Eventos
btnAgregar.addEventListener("click", agregarTarea);

tareaInput.addEventListener("click", comprobarInput);


//Funciones
function agregarTarea(e){

    e.preventDefault();
    if(tareaInput.value===""){
        tareaInput.className="error";
        tareaInput.setAttribute("placeholder", "Tarea no valida");
        return;
    }
    
    let tarea = tareaInput.value;
    let li = document.createElement("li");
    li.textContent=tarea;
    let btnEliminar = document.createElement("a");

    
    btnEliminar.textContent="x";
    li.appendChild(btnEliminar);
    lista.appendChild(li);

    empty.style.display="none";

    btnEliminar.addEventListener("click", function(){
        li.remove();
        const items = document.querySelectorAll("li");

        if(items.length === 0){
            empty.style.display="block";
        }
    })

    tareaInput.value="";
}




function comprobarInput(){
    tareaInput.className="";
    tareaInput.setAttribute("placeholder","Escribe una tarea");
}

