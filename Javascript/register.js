function checkPassword() 
{
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pass = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirmPass").value;


    if(pass.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }


    if(pass != confirmPass) 
    {
        alert("Passwords do not match!");
        return false;
    }

    const user = {name,email,pass,phone}
    localStorage.setItem("user", JSON.stringify(user))


    alert("Account created successfully!");
    return true;
}
