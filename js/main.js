
//week9
//IIFE / module JAVASCRIPT PATTERN- Job Interview
// self invoking anonymous function
//code encapsulated security
// good for privacy- you can expose some parts of it 
(() => {
    //query selector take anu Valid css selector -> class, attribute ettc
    const toDoList = document.querySelector('.todo-list'),
            addButton = document.getElementById("addToDo"),
            saveButton = document.getElementById("saveToDo");

    function addToDo() {
        let newListItem = `
        <li>
            <span contenteditable>Add ToDo text here</span>
        </li>
        `;

        //increment operator to PUNCH PUTIN
        toDoList.innerHTML += newListItem;

    }

    function saveToDo() {
        // save to local storage
        let toDoListItems = toDoList.innerHTML; //grabs all list items

        //put them in local storage
        if (window.localStorage) {
            localStorage.setItem('toDoList', toDoListItems);
        }
    }

    function retrieveToDos() {
        if (localStorage && localStorage.getItem('toDoList')) {
            let myToDos = localStorage.getItem('toDoList');

            toDoList.innerHTML += myToDos;
        }

        let person = {
            name: "your name",
            role: "admin",
            permissions: 5
        }

        localStorage.setItem('user', JSON.stringify(person));
    }

    retrieveToDos();

    addButton.addEventListener("click", addToDo);
    saveButton.addEventListener("click", saveToDo);

})();

