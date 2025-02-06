// const inputbox = document.getElementByClassNam("input");
const inputbox = document.querySelector("input");
const listcontainer = document.getElementById("list-container")

function addtask() {
    if (inputbox.value ==='') {
        alert("you must write something");
    }
    else{
        let li = document.createElement("li"); 
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        inputbox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    saveData();
}

listcontainer.addEventListener("click" , function(e){
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();