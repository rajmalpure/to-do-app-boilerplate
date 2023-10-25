var listtoActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

//Event Handler vs Event Listenr 

function click() {
    listtoActivities.push(input.value);
    console.log(listtoActivities);

    input.value = "";
    showList();
}

function showList(){
    todolist.innerHTML = " ";

    listtoActivities.forEach(function(n,i){
        todolist.innerHTML +="<li>" + n + "<a onclick='editItem(" + i + ")'>Edit</a>" +
        "<a onclick='deleteItem(" + i + ")'>&times | </a></li>";

    })

}

function deleteItem(i){
    listtoActivities.splice(i,1);
    showList()
}

function editItem(i){
    var newValue = promt("Please insert your new value");
    listtoActivities.splice(i,1,newValue);
    showList();
}