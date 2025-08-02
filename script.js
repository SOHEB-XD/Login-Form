// Register From

let rgbtn = document.getElementById("rgbtn");

let dataBase = [];


if (rgbtn) {
    rgbtn.addEventListener("click", (event) => {

        event.preventDefault();

        let rEmail = document.getElementById("r-email").value;
        let rPass = document.getElementById("r-pass").value;

        dataBase.push(rEmail);
        dataBase.push(rPass);

        localStorage.setItem('myArray', JSON.stringify(dataBase));

        console.log(dataBase);

        document.getElementById("r-email").value = "";
        document.getElementById("r-pass").value = "";

        alert("Login Details Are Saved Successfully!");

        window.open('Portfolio/index.html', '_blank');

    });
};



const retrievedString = localStorage.getItem('myArray');
const retrievedDatabse = JSON.parse(retrievedString);
console.log(retrievedDatabse);


// Login Form

let lgbtn = document.getElementById("lgbtn");

if (lgbtn) {


    lgbtn.addEventListener("click", (event) => {

        event.preventDefault();

        let lEmail = document.getElementById("l-email").value;
        let lPass = document.getElementById("l-pass").value;

        if (retrievedDatabse.includes(lEmail) && retrievedDatabse.includes(lPass)) {
            window.open('Portfolio/index.html', '_self');

            document.getElementById("l-email").value = '';
            document.getElementById("l-pass").value = '';
        }

        else {
            alert("User Doesn't Exist");
            document.getElementById("l-email").value = '';
            document.getElementById("l-pass").value = '';
        }
    });
}

