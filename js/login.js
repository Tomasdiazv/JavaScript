
const mockUser = {
    "username": "Benjamin",
    "password": "123"
};

function validateUser(){
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(username == mockUser["username"] && password == mockUser["password"]){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = '../index.html';
    }else{
        alert("Los datos ingresados son incorrectos.")
    }
}

