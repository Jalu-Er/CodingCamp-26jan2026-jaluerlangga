function checkName() {
    let name = localStorage.getItem("userName");

    if (!name) {
        name = prompt("Halo, siapakah nama anda?", "");
        if (name) {
            localStorage.setItem("userName", name);
        } else {
            name = "User";
        }
    }

    document.getElementById("user-name").innerText = name;
}

checkName();

function validateForm() {
    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birth-date").value;
    const message = document.getElementById("message").value;
    
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : ""; 

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Mohon lengkapi semua data form!");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerText = name;
    document.getElementById("sender-dob").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-message").innerText = message;

    const now = new Date();
    document.getElementById("current-time").innerText = now.toString();
}