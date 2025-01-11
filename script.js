let printPasswords = () => {
    const password1 = generateRandomPassword();
    const password2 = generateRandomPassword();
    document.getElementById("password1").textContent = password1;
    document.getElementById("password2").textContent = password2;
}

let generateRandomPassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i <= 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    } 
    return password;
}

let copyToClipboard = (elementId) => {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!");
    });
}