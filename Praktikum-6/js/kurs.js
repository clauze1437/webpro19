function kurs() {
    let uangLuar = Number(document.getElementById("nilaiUang").value)
    let listUangLuar = Number(document.getElementById("list").value)
    let hasil = uangLuar * listUangLuar
    document.getElementById("konversi").value = hasil
}