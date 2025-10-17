let tasks=JSON.parse(localStorage.getItem("tasks") ) || [] ;

function saveTasksToStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    tasks.forEach(task=>addTask(task.text,task.completed,true));
    const allTasksButton = document.getElementById("allTasks");
    const activeTasksButton = document.getElementById("activeTasks");
    const completedTasksButton = document.getElementById("completedTasks");

    function addTask(taskText,completed=false,skipSaving=false) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
if(completed)
{
    taskItem.classList.add("completed");
}


//buttons
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            const newText = prompt("Edit task:",taskItem.firstChild.nodeValue);
            if (newText) {
               const taskIndex=tasks.findIndex(t=>t.text === taskItem.firstChild.nodeValue);
               if(taskIndex !== -1)
               {
                   tasks[taskIndex].text=newText;
                   saveTasksToStorage();
               }
               taskItem.childNodes[0].nodeValue=newText;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
            tasks=tasks.filter(t=>t.text !==taskItem.firstChild.nodeValue);
            saveTasksToStorage();
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
            const task=tasks.find(t=>t.text ===taskItem.firstChild.nodeValue);
            if(task)
            {
                task.completed =!task.completed;
                saveTasksToStorage();
            }
        });

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);

       if(!skipSaving){
        tasks.push({text:taskText,completed});
        saveTasksToStorage();
    }
}

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    allTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => task.style.display = "");
    });

    activeTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => {
            if (task.classList.contains("completed")) {
                task.style.display = "none";
            } else {
                task.style.display = "";
            }
        });
    });

    completedTasksButton.addEventListener("click", function() {
        const tasks = document.querySelectorAll("li");
        tasks.forEach(task => {
            if (task.classList.contains("completed")) {
                task.style.display = "";
            } else {
                task.style.display = "none";
            }
        });
    });
});
