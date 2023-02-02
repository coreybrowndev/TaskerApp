

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


let form = document.getElementById('form');
let input = document.getElementById('add_task');
let tasks = document.getElementById('tasks');
let err = document.querySelector('.err-msg');


//event listener which allows sumbit button to be pressed
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("button-clicked");

    formValidation();

});


let formValidation = () => {
    if(input.value === "") {
        err.innerHTML = "Woah! Task can't be empty";
        console.log("failure");
    }else {
        acceptData();
        input.value = "";
    }
}


let data = {};

let acceptData = () => {
    data["task"] = input.value;
    
    newPost();
}

let newPost = () => {
    tasks.innerHTML += `<li>
    <div>
        <input type="checkbox" name="tasks" id="1">
        <span>${data.task}</span>
    </div>

    <button title="remove-task" class="remove-task">
        <i class="fa-solid fa-trash-can"></i>
    </button>
</li>`;
}

let deleteTask = (e) => {
    
}

deleteTask();



















