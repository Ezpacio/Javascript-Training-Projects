const form = document.querySelector('form');
const addTodoBtn = document.querySelector('.add-todo');
const days = document.querySelector('.days');
const month = document.querySelector('.month')
const todoList = document.querySelectorAll('.todo-list');
const todoBody = document.querySelector('.todo-body');
const taskCounter = document.getElementById('counter');
const addItem = document.getElementById('add-item');
const input = document.querySelector('input[type="text"]');

function displayItems(){
    const itemsFromStorage = getItemFromStorage();
    itemsFromStorage.forEach(item => {
        createTodo(item);
    });
    dateSet(itemsFromStorage);
};

// Submit new todo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkIfItemExists(input.value)){
        alert('The todo is already exist!')
        input.value = '';
        return
    }
    addItemToUI();
    const itemsFromStorage = getItemFromStorage();
    dateSet(itemsFromStorage);
});

addTodoBtn.addEventListener('click', () => {
    form.classList.toggle('active');
});

function createTodo(value) {
    const divIncl = document.createElement('div');
    const leftSide = document.createElement('div');
    const hour = document.createElement('div');
    const label = document.createElement('label');
    const iconDiv = document.createElement('div');

    // Setting attributes
    divIncl.classList.add('todo-list');
    leftSide.classList.add('left');
    hour.classList.add('hour');
    label.appendChild(document.createTextNode(value));
    iconDiv.classList.add('removeBtn')
    iconDiv.innerHTML = "<i class='iconoir-xmark'></i>";

    // Appending
    leftSide.appendChild(label);
    hour.textContent = `${date.getHours()}:${date.getMinutes()} ${currentMonth.hour.slice(3, 5)}`
    divIncl.appendChild(leftSide);
    divIncl.appendChild(hour);
    divIncl.appendChild(iconDiv);
    todoBody.appendChild(divIncl);


    divIncl.addEventListener('click', ()=>divIncl.classList.toggle('active'));

    iconDiv.addEventListener('click', () =>{
        removeTodo(iconDiv.parentElement);
    })
};

// Add to Local Storage
function addItemToStorage(todo) {
    const itemsFromStorage = getItemFromStorage();

    // Add  new item to array
    itemsFromStorage.push(todo);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))


};

function getItemFromStorage() {

    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem
        ('items'));
    };
    return itemsFromStorage;
}

function checkIfItemExists(item){
    let itemsFromStorage = getItemFromStorage();
    return itemsFromStorage.includes(item);
}

function removeTodo(todo){
    if(confirm('Are you sure?')){
        todo.remove();
        removeItemFromStorage(todo.firstElementChild.firstElementChild.textContent);
    };
};

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemFromStorage();
    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

function addItemToUI() {
    const input = document.querySelector('input[type="text"]');
    if (input.value.trim() === '') {
        confirm('please input a value')
        return;
    };
    createTodo(input.value);
    addItemToStorage(input.value)
    input.value = '';
}

todoList.forEach(todo => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('active');
    });
});

// Get the name of weekend
const date = new Date();
const currentMonth = {
    month: date.toLocaleString('en-US', { month: 'long' }),
    hour: date.toLocaleString('en-US', { hour: 'numeric' })
}
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dateSet(todos) {
    days.innerHTML = `${weekday[date.getDay()]}, <span>${date.getDate()}${weekday[date.getDay()].toLowerCase().slice(0, 2)}</span>`;
    month.textContent = currentMonth.month;
    taskCounter.innerHTML = todos.length;
}
document.addEventListener('DOMContentLoaded', displayItems);


