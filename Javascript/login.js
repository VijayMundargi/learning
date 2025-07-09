function loginCheck() {
    
    const pass = document.getElementById("pass").value;
    const email = document.getElementById("email").value;

    const user = JSON.parse(localStorage.getItem("user"))

    if(user && user.email === email && user.pass === pass) {
        alert("Login successful!");
        
        return true;
    }
    alert("Invalid email or password!");
    return false;
}