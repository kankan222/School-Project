// password
const pswrdField = document.querySelector("form .user input[type='password']"),
toggleBtn = document.querySelector("form .user i");

toggleBtn.onclick = ()=>{
    if(pswrdField.type == "password"){
        pswrdField.type = "text";
        toggleBtn.classList.add("active");
    }
    else{
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
}