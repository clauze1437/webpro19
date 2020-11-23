//namaPengguna
let namaPengguna = document.getElementById("namaPengguna")
let length = document.getElementById("length")
let messageName = document.getElementById("messageName")

namaPengguna.onkeyup = function () {
    if (namaPengguna.value.length >= 1 && namaPengguna.value.length <= 30) {
        messageName.classList.remove("invalid");
        messageName.classList.add("valid");
    } else {
        messageName.classList.remove("valid");
        messageName.classList.add("invalid");
    }
}

//email
let email = document.getElementById("email")
let messageEmail = document.getElementById("messageEmail")
let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

email.onkeyup = function () {
    if (email.value.match(emailFormat)) {
        messageEmail.classList.remove("invalid")
        messageEmail.classList.add("valid")
    } else {
        messageEmail.classList.remove("valid")
        messageEmail.classList.add("invalid")
    }
}

//jam
let jam = document.getElementById("jam")
let messageJam = document.getElementById("messageJam")
let jamFormat = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/

jam.onkeyup = function () {
    if (jam.value.match(jamFormat)) {
        messageJam.classList.remove("invalid")
        messageJam.classList.add("valid")
    } else {
        messageJam.classList.remove("valid")
        messageJam.classList.add("invalid")
    }
}

//tujuanKeberangkatan
let tujuan = document.getElementById("tujuan")
let messageTujuan = document.getElementById("messageTujuan")

tujuan.onkeyup = function () {
    if (tujuan.value.toUpperCase() == "INDONESIA" || tujuan.value.toUpperCase() == "RUSIA" || tujuan.value.toUpperCase() == "JEPANG") {
        messageTujuan.classList.remove("invalid")
        messageTujuan.classList.add("valid")
    } else {
        messageTujuan.classList.remove("valid")
        messageTujuan.classList.add("invalid")
    }
}

//jumlah tiket
let jumlah = document.getElementById("jumlah")
let messageJumlah = document.getElementById("messageJumlah")

jumlah.onkeyup = function () {
    if (jumlah.value != null && jumlah.value != "" && jumlah.value >= 1 && jumlah.value <= 10) {
        messageJumlah.classList.remove("invalid")
        messageJumlah.classList.add("valid")
    } else {
        messageJumlah.classList.remove("valid")
        messageJumlah.classList.add("invalid")
    }
}

//function getAll
function getAll() {
    let namaPengguna = document.getElementById("namaPengguna").value
    let email = document.getElementById("email").value
    let jam = document.getElementById("jam").value
    let tujuan = document.getElementById("tujuan").value
    let jumlah = document.getElementById("jumlah").value
    let getFinal = document.getElementById("get").innerHTML

    document.write(getFinal + "<br>")
    document.write("Nama Pengguna : " + namaPengguna + "<br>")
    document.write("Email : " + email + "<br>")
    document.write("Jam Keberangkatan : " + jam + "<br>")
    document.write("Tujuan Keberangkatan : " + tujuan + "<br>")
    document.write("Jumlah Tiket : " + jumlah + "<br>")

}