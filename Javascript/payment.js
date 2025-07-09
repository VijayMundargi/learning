function checkDetails() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const code = document.getElementById("code").value.trim();

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Check Phone Number! It must contain exactly 10 digits.or Enter only number");
        return false;
    }

    if (code.length !== 4 || isNaN(code)) {
        alert("CVV number must contain exactly 4 digits. or Enter only number");
        return false;
    }

    alert("Details added successfully!");
    return true;
}
