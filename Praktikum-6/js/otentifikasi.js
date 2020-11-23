function otentikasi() {
    let usernameFinal = document.getElementById("username").value
    let passwordFinal = document.getElementById("password").value
    if (usernameFinal == "mangga" && passwordFinal == "1404514045") {
        alert("login sukses!")
        window.open().document.write("<h1>Login Sukses</h1>")
    } else {
        alert("Login salah coba lagi!")
    }
}