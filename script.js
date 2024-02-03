var listofActivities = [];

var input = document.getElementById("input");

var todoList = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
    listofActivities.push(input.value);

    input.value = "";
    showList();
}

function showList(){
    todoList.innerHTML = " ";

    listofActivities.forEach(function(n, i){
        todoList.innerHTML += "<li>" + n + "<a onclick='editItem(" + i + ")'>Edit</a>" + 
        "<a onclick='deleteItem(" + i + ")'>&times | </a></li>";
    })
    //<li>n<a onclick='editItem(i)'>Edit</a><a onclick='deleteItem(i)'>&times | </a></li>
}

function deleteItem(i){
    listofActivities.splice(i,1);
    showList();
}

function editItem(i){
    var newValue = prompt("Please insert your new value");
    listofActivities.splice(i, 1, newValue);
    showList();
}
