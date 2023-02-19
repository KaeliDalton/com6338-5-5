//variable list
var form = document.getElementById("add-todo")
var list = document.getElementById("todo-list")
var input = document.querySelector('input')

//create form submit event
form.onsubmit = function(e){
    e.preventDefault()
    var inputValue = document.querySelector('input').value
    //prevent spaces or blanks from adding to list
    if(inputValue == "" || inputValue.trim().length === 0){
        form.reset()
        return
        }else{
            //add item to list
            var li = document.createElement("li")
            //item must be button nested in li
            var btn = document.createElement("button")
            btn.textContent = inputValue;
            list.appendChild(li)
            li.appendChild(btn)
            
            //reset input to empty
            input.value = ""
        } 
}

