const form=document.getElementById("form");

const inputForm=document.getElementById("inputform");

const myBtn=document.getElementById("btn")

const formContainer=document.getElementById("form-container");


const errorShow=document.createElement("p");
errorShow.textContent="Enter your task.....";
errorShow.style.fontSize="2rem";
errorShow.style.textAlign="center";


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const taskValue=inputForm.value.trim()
    if(taskValue===""){
        if(!errorShow.parentElement){
            formContainer.appendChild(errorShow);
        }

    return;
    }
    if(errorShow.parentElement){
        errorShow.remove();
    }
    addTask();
    inputForm.value="";
})

const taskHeading=document.createElement("h2");
taskHeading.textContent="Daily Tasks";
formContainer.appendChild(taskHeading)


function addTask(){
    const taskDiv=document.createElement("div");
    const checkBox=document.createElement("input");
    checkBox.type="checkbox";
    const paraEle=document.createElement("p");
    paraEle.textContent=inputForm.value;
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";


    checkBox.addEventListener("change",()=>{
        completeTask(checkBox,paraEle)
    });

    deleteBtn.addEventListener("click",()=>{
        deleteTask(taskDiv)
    })

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(paraEle);
    taskDiv.appendChild(deleteBtn);
    formContainer.appendChild(taskDiv)
}


function completeTask(checkbox,paraEle){
    if(checkbox.checked){
        paraEle.style.textDecoration="line-through"
    }
    else{
        paraEle.style.textDecoration="none"
    }
}


function deleteTask(taskDiv){
    taskDiv.remove();
}