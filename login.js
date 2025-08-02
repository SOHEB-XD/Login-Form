// Login Form

let lgbtn = document.getElementById("lgbtn");

let dataBase =['soheb8976@gmail.com', '1234'];

lgbtn.addEventListener("click", ()=>{

    let lEmail = document.getElementById("l-email").value;
    let lPass = document.getElementById("l-pass").value;

    if (dataBase.includes(lEmail) & dataBase.includes(lPass)) {
        alert("the databse has these details");
    }

    else{
        alert("error");
    }
});