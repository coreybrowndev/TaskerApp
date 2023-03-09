
const form = document.getElementById('form');
const input = document.getElementById('add_task');
const tasks = document.getElementById('tasks');
const currentCompletedCounter = document.querySelector("#curr_count");
const err = document.querySelector('.err-msg');
const taskList = document.getElementById('task-list');
const completedOptions = document.getElementById('options');
const checkbox = document.querySelectorAll("input[name=tasks]");
const taskParent = document.querySelector("#tasks");
let completedCounter = 0;



document.addEventListener('click', e => {

    const isDropDownButton = e.target.matches("[data-dropdown-button]")

    if(!isDropDownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropDown;

    if(isDropDownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropDown) return 
        dropdown.classList.remove('active')
    })
});


//event listener which allows sumbit button to be pressed
form.addEventListener('submit', e => {
    e.preventDefault();

    formValidation();
});


let formValidation = () => {
    if(input.value === "") {
        err.innerHTML = "Task can't be empty";
    }else {
        newPost();
        input.value = "";
    }
}

let newPost = () => {
    tasks.innerHTML += `<li>
    <div>
        <input type="checkbox" name="tasks">
        <span>${input.value}</span>
    </div>

    <div>
        <button title="edit-task" onclick="editTask(this)" class="edit-task">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button title="remove-task" onclick="deleteTask(this)" class="remove-task" id="btn">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
</li>`
}


let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.children[1].innerHTML;
    e.parentElement.parentElement.remove();
}

//add checkbox to completed section after transition finishes
taskParent.addEventListener("transitionend", (e) => {
    if(e.target.nodeName === "INPUT") {
        e.target.parentElement.parentElement.remove();
        completedCounter++;
        currentCompletedCounter.innerHTML = completedCounter;
        completedOptions.innerHTML += `<li>
        <div>
            <input class="task-el" type="checkbox"  id="completed">
            <span>${e.target.nextElementSibling.innerHTML}</span>
        </div>

        <div>
            <button title="remove-task" onclick="deleteTask(this)" class="remove-task">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>`

    }
});











































