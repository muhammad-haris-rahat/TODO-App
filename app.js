let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let editedLI = null;
let saveBtn = document.getElementById("saveBtn");
saveBtn.style.display = "none";
let deleteAllBtn = document.getElementById("deleteAllBtn");
deleteAllBtn.style.display = "none";

function addTodo() {
    let todoInput = document.getElementById("inputTODO");
    todoInputValue = todoInput.value;
    if (todoInput.value.trim()) {
        let createLi = document.createElement("li");
        createLi.innerText = todoInputValue;
        todoList.appendChild(createLi);
        deleteAllBtn.style.display = "inline-block";

        let deleteBtn = document.createElement("Button");
        deleteBtn.innerText = "Delete";
        createLi.appendChild(deleteBtn);


        let editBtn = document.createElement("Button");
        editBtn.innerText = "Edit";
        createLi.appendChild(editBtn);

        deleteBtn.addEventListener("click", function () {
            createLi.remove();
            if (todoList.children.length === 0) {
                deleteAllBtn.style.display = "none";

            }

        })

        editBtn.addEventListener("click", function () {
            let forEditText = createLi.childNodes[0].nodeValue;
            todoInput.value = forEditText;
            saveBtn.style.display = "inline-block";
            addBtn.style.display = "none"
            editedLI = createLi;
        })

        saveBtn.addEventListener("click", function () {
            saveBtn.style.display = "none";
            addBtn.style.display = "inline-block";
            editedLI.childNodes[0].nodeValue = todoInput.value;
        })
    }
    todoInput.value = "";

}

function deleteAll() {
    if(todoList.children.length > 0){
        todoList.innerText = null;
    }
    deleteAllBtn.style.display = "none";
}
