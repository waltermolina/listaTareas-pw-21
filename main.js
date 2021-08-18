const agregarBtn =  document.getElementById("agregarBtn");

agregarBtn.addEventListener("click", agregarTarea);



function agregarTarea(){
    const nuevaTareaValue = document.getElementsByName("nuevaTarea")[0].value;

    const nuevaTareaNodo = document.createElement("li");
    nuevaTareaNodo.innerHTML = 
                    `
                        <div>
                            <input type="checkbox" name="" id="">
                            <p>${nuevaTareaValue}</p>
                        </div>
                        <button onclick="this.parentElement.remove()"><span class="mdi mdi-delete-outline"></span></button>
                    `;
    const listadoUl = document.querySelector("#listado");

    listadoUl.insertBefore(nuevaTareaNodo, listadoUl.childNodes[0]);


}